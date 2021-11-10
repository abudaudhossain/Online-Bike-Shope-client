import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Product = () => {
    return (
        <Card sx={{}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://preview.hasthemes.com/exporso-preview/exporso/assets/img/product/2.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Buy Now</Button>                    
                </CardActions>
            </CardActionArea>

        </Card>
    );
};

export default Product;