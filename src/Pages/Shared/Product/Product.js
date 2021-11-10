import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, image, description, price, _id } = product;
    return (
        <Card sx={{}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ my: 1 }} variant="body1" color="text.secondary">
                        Prices : ৳ {price} lack
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/purchases/${_id}`}>
                        <Button variant="contained">Buy Now</Button>
                    </Link>
                </CardActions>
            </CardActionArea>

        </Card>
    );
};

export default Product;