import { Button, Paper, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';


const AddReview = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const date = new Date().toLocaleDateString();
    const history = useHistory();
    const [value, setValue] = React.useState(5);
    const [reviewInfo, setReviewInfo] = useState({ displayName, email, date: date, rating: value });


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...reviewInfo };
        newReviewInfo[field] = value;
        setReviewInfo(newReviewInfo);
        setValue(parseInt(newReviewInfo.rating));
    }
    console.log(reviewInfo);
    const handleOrderSubmit = (e) => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review add is Success");
                    history.replace("/");
                }
            })


        e.preventDefault();
    }
    return (
        <div>
            <Paper elevation={3} sx={{ m: 3, p: 3 }}>
                <Typography sx={{ mt: 5, textAlign: "center" }} variant='h4'>
                    Please Review Now
                </Typography>

                <form onSubmit={handleOrderSubmit}>
                    <Typography component="legend">Rating</Typography>
                    <Rating
                        name="rating"
                        value={value}
                        onChange={handleOnChange}

                    />
                    <TextField
                        multiline
                        rows={4}
                        required
                        onBlur={handleOnChange}
                        name="description"
                        sx={{ width: "100%", my: 1 }} id="review" label="Add Review" variant="standard" />

                    <Button type="submit" sx={{ width: "100%", my: 1 }} variant="contained">Order Now</Button>
                </form>
            </Paper>
        </div>
    );
};

export default AddReview;