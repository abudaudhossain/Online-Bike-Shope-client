import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, error} = useAuth();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    console.log(loginData);

    const handleLoginSubmit = (e) => {
        if(loginData.password !== loginData.rePassword){
            alert("Your password is not match")
            return;
        }
        registerUser(loginData.email, loginData.password)
        
        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Typography sx={{ textAlign: "Center", fontWeight: 500 }} variant='h4'>
                Please Register Now{error}
            </Typography>
            <Container>
                <Grid style={{ height: "90vh" }} sx={{ display: 'flex', alignItems: 'center' }} container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                onBlur={handleOnChange}
                                name="name"
                                sx={{ width: "100%", my: 1 }} id="name" label="Name" variant="standard" />
                            <TextField
                                onBlur={handleOnChange}
                                name="email"
                                sx={{ width: "100%", my: 1 }} id="email" label="Email" variant="standard" />
                            <TextField
                                onBlur={handleOnChange}
                                name="password"
                                sx={{ width: "100%", my: 1 }} id="password" label="Password" variant="standard" type="password" />
                            <TextField
                                onBlur={handleOnChange}
                                name="rePassword"
                                sx={{ width: "100%", my: 1 }} id="rePassword" label="RePassword" variant="standard" type="password" />
                            <Button type="submit" sx={{ width: "100%", my: 1 }} variant="contained">Register</Button>
                        </form>
                        <NavLink to='/login'>
                    <Button variant="text">Already registered? Please Login </Button>
                    </NavLink>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={login} width="100%" alt="constant" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;