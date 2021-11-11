import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import Product from '../../Shared/Product/Product';
import { useState, useEffect } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://serene-reaches-93418.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Typography sx={{ textAlign: "Center", fontWeight: 500 }} variant='h4'>
                    Our Products
                </Typography>
                <Container>
                    <Grid sx={{ mt: 5 }} container spacing={4}>

                        {
                            products.length ? products.map(product => <Grid
                                item xs={12} sm={6} md={4}
                                key={product._id}
                            >
                                <Product product={product}></Product>
                            </Grid>) :
                                <CircularProgress />
                        }

                    </Grid>
                </Container>

            </Box>
        </div>
    );
};

export default ExploreProducts;