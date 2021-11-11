import React, { useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const Purchase = ({ product }) => {
    const { name, image, description, price, _id } = product;
    const { user } = useAuth();
    const { displayName, email } = user;
    const date = new Date().toLocaleDateString();
    const [orderInfo, setOrderInfo] = useState({ displayName, email, name, image, productId: _id, date, states: "pending" });
    const history = useHistory();


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo)

    }
    console.log(orderInfo);
    const handleOrderSubmit = (e) => {
        fetch('https://serene-reaches-93418.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order is Success");
                    history.replace("/");
                }
            })


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

                <form onSubmit={handleOrderSubmit}>
                    <TextField
                        required
                        defaultValue={displayName}
                        onBlur={handleOnChange}
                        name="displayName"
                        sx={{ width: "100%", my: 1 }} id="displayName" label="Name" variant="standard" />
                    <TextField
                        required
                        defaultValue={email}
                        onBlur={handleOnChange}
                        name="email"
                        sx={{ width: "100%", my: 1 }} id="email" label="Email" variant="standard" />
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
                </form>
            </Paper>
        </div>
    );
};

export default Purchase;