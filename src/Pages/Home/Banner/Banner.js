import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(https://preview.hasthemes.com/exporso-preview/exporso/assets/img/slide/1.jpg) no-repeat center center`,
    backgroundSize: 'cover',
    minHeight: "100vh",
    width: "100%",
    marginTop: "40px"
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid style={{ height: "90vh" }} sx={{ display: 'flex', alignItems: 'center' }} container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontWeight: 500 }} variant='h3'>
                            Online <br />
                            Motor Bike Shope
                        </Typography>
                        <Typography sx={{ my: 3 }} variant='h6'>
                            You want to purchase a used vehicle like bikes, scooty, and cars just visit our showroom.
                        </Typography>
                        <Link to="products">
                            <Button variant="contained">Explore All Bike </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src='https://preview.hasthemes.com/exporso-preview/exporso/assets/img/slide/layer_img_1.png' width="100%" alt="chair" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;