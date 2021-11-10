import { Container, Typography } from '@mui/material';
import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <Container>
            <Typography sx={{textAlign: "Center", fontWeight: 500}} variant='h4'>
              All Reviews
            </Typography>
            <Review></Review>
            <Review></Review>
        </Container>
    );
};

export default Reviews;