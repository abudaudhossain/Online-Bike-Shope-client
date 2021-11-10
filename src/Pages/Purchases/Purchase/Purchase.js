import React, { useState } from 'react';
import { Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Purchase = ({ product }) => {
    const { name, image, description, price } = product;
    const { user } = useAuth();
    const { displayName, email } = user;
    const [orderInfo, setOrderInfo] = useState({ displayName, email});

    
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo)

    }

    const handleOrderSubmit = (e) => {
        alert("submit")
        console.log(orderInfo);
        e.preventDefault();
    }
    return (
        <div>
            <Paper elevation={3} sx={{ m: 3, p: 3 }}>
                <Typography variant='h4'>
                    {name}
                </Typography>
                <img src={image} alt="product-img" />
                <Typography variant='body2'>
                    {description}
                </Typography>
                <Typography variant='h6'>
                    Price: ৳ {price} lack
                </Typography>
                <Typography sx={{ mt: 5, textAlign: "center" }} variant='h4'>
                    Please Order Now
                </Typography>

                {
                    email ? <form onSubmit={handleOrderSubmit}>
                    <TextField
                        required
                        onBlur={handleOnChange}
                        name="phone"
                        sx={{ width: "100%", my: 1 }} id="phone" label="phone" variant="standard" />
                    <TextField
                        required
                        onBlur={handleOnChange}
                        name="address"
                        sx={{ width: "100%", my: 1 }} id="address" label="Address" variant="standard" />

                    <Button type="submit" sx={{ width: "100%", my: 1 }} variant="contained">Order Now</Button>
                </form>:  <CircularProgress />
                }
            </Paper>
        </div>
    );
};

export default Purchase;