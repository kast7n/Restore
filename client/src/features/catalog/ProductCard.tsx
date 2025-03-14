import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useAddBasketItemMutation } from "../basket/basketApi";


type Props = {
    product: Product;
}

export default function ProductCard({product}: Props) {
    const [addBasketitem, {isLoading}] = useAddBasketItemMutation();
  return (
    <Card 
        elevation={3}
        sx={{
            width: 280,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
    >
        <CardMedia 
            sx={{height:240,backgroundSize: 'cover'}}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography 
                gutterBottom 
                sx={{textTransform: 'uppercase'}} 
                variant='subtitle2'
                >
                    {product.name}
            </Typography>
            <Typography
                variant='h6'
                sx={{color: 'secondary.main'}}
                >
                    ${(product.price / 100).toFixed(2)}
            </Typography>
        </CardContent>
        <CardActions
            sx={{justifyContent: 'space-between'}}
        >
            <Button disabled={isLoading} 
                onClick={() => addBasketitem({product, quantity: 1})}>Add to cart</Button>
            <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
        </CardActions>
    </Card>
  )
}
