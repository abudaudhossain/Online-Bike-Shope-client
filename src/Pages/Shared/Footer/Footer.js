import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 5 ,color: "white", background: "#151320"}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography sx={{ my: 2 }} variant='body1'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant='body2'>
                            Address: KR, Kurigram, Bangladesh
                        </Typography>
                        <Typography sx={{ mt: 2 }} variant='body2'>
                            Phone: 01990000300
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{mb: 2  }} variant='h5'>
                            Services
                        </Typography>
                        <Typography  variant='h6'>
                            <Link to="/">free shipping </Link> <br/>
                            <Link to="/">Product Delivary</Link>  <br/>
                            <Link to="/">Product Tracking</Link>  <br/>
                            <Link to="/">Online Pyament</Link>  <br/>
                            <Link to="/">Discount</Link>  <br/>
                            <Link to="/">Online Vendor</Link>  <br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        
                        <Typography sx={{mb: 2  }} variant='h5'>
                            Support
                        </Typography>
                        <Typography  variant='h6'>
                            <Link to="/">QUeality</Link> <br/>
                            <Link to="/"> Order Details </Link><br/>
                            <Link to="/">Order Slips </Link> <br/>
                            <Link to="/">Shipping </Link> <br/>
                           <Link to="/">Store Deal</Link> <br/>
                            
                        </Typography>
                        
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography sx={{p: 2 , textAlign: "center"}} variant="caption" display="block" gutterBottom>
                        © 2021 Onlie Bike Shopy ❤️ by Abu Daud
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Footer;