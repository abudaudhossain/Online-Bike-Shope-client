import { Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = () => {
    
    return (
        <div>
            <Paper elevation={3} sx={{m:3, p: 3}}>
            <Typography variant='h4'>
               Abu Daud
            </Typography>
            <Rating name="read-only" value={2} readOnly /><br/>
            <Typography  variant='p'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat, sunt quod illo hic optio dolore unde dolorum, nam perspiciatis, sapiente saepe eum!
            </Typography>
            
            </Paper>
        </div>
    );
};

export default Review;