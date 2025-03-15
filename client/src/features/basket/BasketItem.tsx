import { Box, Grid2, IconButton, Paper, Typography } from "@mui/material";
import { Item } from "../../app/models/basket";
import { Add, Close, Remove } from "@mui/icons-material";
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from "./basketApi";
import { CurrencyFormat } from "../../lib/util";

type Props = {
  item: Item;
};

export default function BasketItem({ item }: Props) {
  const [removeBasketItem] = useRemoveBasketItemMutation();
  const [addBasketitem] = useAddBasketItemMutation(); 
  return (
    <Paper
      sx={{
        height: 140,
        borderRadius: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src={item.pictureUrl}
          alt={item.name}
          sx={{
            width: 100,
            height: 100,
            objectFit: "cover",
            birderRadius: "4px",
            mr: 8,
            ml: 4,
          }}
        />
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6">{item.name}</Typography>
          <Box display="flex" alignItems="center" gap={3}>
            <Typography sx={{ fontSize: "1.1rem" }}>
              {CurrencyFormat(item.price)} x {item.quantity}
            </Typography>
            <Typography sx={{ fontSize: "1.1rem" }} color="primary">
              {CurrencyFormat(item.price * item.quantity)}
            </Typography>
          </Box>
          <Grid2 container spacing={1} alignItems="center">
            <IconButton
              onClick={() => removeBasketItem({productId: item.productId, quantity: 1})}
              color="error"
              size="small"
              sx={{ borderRadius: 1, border: 1, minWidth: 0 }}
            >
              <Remove />
            </IconButton>
            <Typography variant="h6">{item.quantity}</Typography>
            <IconButton
              onClick={() => addBasketitem({ product: item, quantity: 1})}
              color="success"
              size="small"
              sx={{ borderRadius: 1, border: 1, minWidth: 0 }}
            >
              <Add />
            </IconButton>
          </Grid2>
        </Box>
      </Box>
      <IconButton
      onClick={() => removeBasketItem({productId: item.productId, quantity: item.quantity})}
        color="error"
        size="small"
        sx={{
          borderRadius: 1,
          border: 1,
          minWidth: 0,
          alignSelf: "start",
          mr: 1,
          mt: 1,
        }}
      >
        <Close />
      </IconButton>
    </Paper>
  );
}
