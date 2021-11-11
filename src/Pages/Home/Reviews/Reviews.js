import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(reviews)
    return (
        <Container>
            <Typography sx={{ textAlign: "Center", fontWeight: 500 }} variant='h4'>
                All Reviews
            </Typography>
            {
                reviews.length ? reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>) : <h1>No review fount</h1>
            }

        </Container>
    );
};

export default Reviews;