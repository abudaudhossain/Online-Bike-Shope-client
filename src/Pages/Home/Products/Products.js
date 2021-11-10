import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../../Shared/Product/Product';

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Typography sx={{textAlign: "Center", fontWeight: 500}} variant='h4'>
               Our Products
            </Typography>
            <Container>
            <Grid sx={{mt: 5}} container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Product></Product>
                </Grid>
                <Grid item xs={12}sm={6}  md={4}>
                    <Product></Product>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Product></Product>
                </Grid>
                <Grid item xs={12} sm={6}  md={4}>
                    <Product></Product>
                </Grid>
               
            </Grid>
            </Container>
            
        </Box>
    );
};

export default Products;