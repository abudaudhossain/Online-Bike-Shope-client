import { Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {displayName, email, rating, description, date} = review;
    return (
        <div>
            <Paper elevation={3} sx={{m:3, p: 3}}>
            <Typography variant='h4'>
              {displayName}
            </Typography>
            
            <Typography variant='body1'>
              {email}
            </Typography>

            <Rating name="read-only" value={parseInt(rating)} readOnly /><br/>
            <Typography  variant='p'>
              {description}
            </Typography>
            <small style={{display: "block", textAlign:"right"}}>{date}</small>
            </Paper>
        </div>
    );
};

export default Review;