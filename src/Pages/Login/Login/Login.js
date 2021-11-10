import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import login from '../../../login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {loginUser, error, user} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (user.email) {
        history.replace(from);
    }

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    console.log(loginData);
    const handleLoginSubmit = (e) => {
        alert("submit")
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }

  
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Typography sx={{ textAlign: "Center", fontWeight: 500 }} variant='h4'>
                Please Login{error}
            </Typography>
            <Container>
                <Grid style={{ height: "90vh" }} sx={{ display: 'flex', alignItems: 'center' }} container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                onBlur={handleOnChange}
                                name="email"
                                sx={{ width: "100%", my: 1 }} id="email" label="Email" variant="standard" />
                            <TextField
                                onBlur={handleOnChange}
                                name="password"
                                sx={{ width: "100%", my: 1 }} id="password" label="Password" variant="standard" type="password" />
                            <Button type="submit" sx={{ width: "100%", my: 1 }} variant="contained">Login</Button>
                        </form>
                        <NavLink to='/register'>
                            <Button variant="text">New User? Please Register Now</Button>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={login} width="100%" alt="constant" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;