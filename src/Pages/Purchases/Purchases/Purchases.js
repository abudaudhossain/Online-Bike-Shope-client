import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Purchase from '../Purchase/Purchase';

const Purchases = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product);
    return (
        <Container>
            <Grid sx={{ mt: 5 }} container spacing={4}>

                <Grid item xs={12}>
                    {
                        product.name ? <Purchase
                            product={product}></Purchase>
                            : <div style={{ textAlign: 'center' }}>
                                <CircularProgress />
                            </div>

                    }
                </Grid>
            </Grid>
        </Container>


    );
};

export default Purchases;