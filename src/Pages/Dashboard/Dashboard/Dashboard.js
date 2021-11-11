import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrder from '../MyOrder/MyOrder';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, logOut } = useAuth();
    const email = user.email;
    let { path, url } = useRouteMatch();
    const [isAdmin, setIsAdmin] = React.useState(false);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin === 'yes') {
                    setIsAdmin(true);
                }
            })
    }, []);
    
    const drawer = (
        <div style={{ background: "#0589e8", height: "100vh" }}>
            <Toolbar />
            <Divider />
            <List >

                {
                    isAdmin ? <>
                        <Link to={`${url}/manageAllOrder`}>
                            <ListItem button >
                                Manage All Orders
                            </ListItem>
                        </Link>
                        <Link to={`${url}/addAProduct`}>
                            <ListItem button >
                               Add A Product
                            </ListItem>
                        </Link>
                        <Link to={`${url}/makeAdmin`}>
                            <ListItem button >
                             Make Admin
                            </ListItem>
                        </Link>
                        <Link to={`${url}/manageProduct`}>
                            <ListItem button >
                             Manage Product
                            </ListItem>
                        </Link>
                    </> : <>
                        <Link to={`${url}/pay`}>
                            <ListItem button >
                                pay
                            </ListItem>
                        </Link>
                        <Link to={`${url}/MyOrder`}>
                            <ListItem button >
                                My Order
                            </ListItem>
                        </Link>
                        <Link to={`${url}/review`}>
                            <ListItem button >
                                Review
                            </ListItem>
                        </Link>
                    </>

                }

            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Online Bike Shop Dashboard
                    </Typography>
                    {
                        user.email ? <>
                            <Link to="/home">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </> : <Link to="/login">
                            <Button color="inherit">Login</Button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageAllOrder`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};
Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Dashboard;