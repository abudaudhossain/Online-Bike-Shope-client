import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contact from '../../../contact_us.png';
const ContactUs = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }}>
            <Typography sx={{ textAlign: "Center", fontWeight: 500 }} variant='h4'>
               Contact Us
            </Typography>
            <Container>
                <Grid sx={{p: 2}} container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <form>
                            <TextField 
                            sx={{width: "100%", my:1}} id="name" label="Name" variant="standard" />
                            <TextField 
                            sx={{width: "100%", my:1}} id="email" label="Email" variant="standard" />
                            <TextField 
                            sx={{width: "100%", my:1}} id="subject" label="Subject" variant="standard" />
                            <TextField
                            sx={{width: "100%", my:1}} 
                                id="Message"
                                label="Message"
                                variant="standard"
                                multiline
                                rows={4} />
                                <Button   sx={{width: "100%", my:1}} variant="contained">Message</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={contact} width="100%" alt="constant" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactUs;