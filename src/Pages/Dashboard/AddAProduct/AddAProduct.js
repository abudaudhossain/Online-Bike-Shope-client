import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddAProduct = () => {
    const history = useHistory();
    const [productInfo, setProductInfo] = useState({});


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = { ...productInfo };
        newProductInfo[field] = value;
        setProductInfo(newProductInfo);
    }
    const handleAddProductSubmit = (e) => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("product add is Success");
                    history.replace("/products");
                }
            })


        e.preventDefault();
    }
    return (
        <div>
            <Paper elevation={3} sx={{ m: 3, p: 3 }}>
                <Typography sx={{ mt: 5, textAlign: "center" }} variant='h4'>
                    Please Add Product
                </Typography>

                <form onSubmit={handleAddProductSubmit}>
                    <TextField
                        required
                        onBlur={handleOnChange}
                        name="name"
                        sx={{ width: "100%", my: 1 }} id="name" label="Product Name" variant="standard" />
                    <TextField
                        required
                        onBlur={handleOnChange}
                        name="image"
                        sx={{ width: "100%", my: 1 }} id="image" label="Product image url" variant="standard" />
                    <TextField
                        required
                        onBlur={handleOnChange}
                        name="price"

                        sx={{ width: "100%", my: 1 }} id="Price" label="Product price" variant="standard" />

                    <TextField
                        multiline
                        rows={4}
                        required
                        onBlur={handleOnChange}
                        name="description"
                        sx={{ width: "100%", my: 1 }} id="review" label="Add Review" variant="standard" />

                    <Button type="submit" sx={{ width: "100%", my: 1 }} variant="contained">Add Product</Button>
                </form>
            </Paper>
        </div>
    );
};

export default AddAProduct;