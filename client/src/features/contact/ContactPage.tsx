
import { decrement, increment } from "./counterReducer"
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">Contact page</Typography>
      <Typography variant="body1">The data is: {data}</Typography>
      <ButtonGroup>
        <Button color="error" onClick={() => dispatch(decrement(1))}>decrement</Button>
        <Button color="secondary" onClick={() => dispatch(increment(1))}>increment</Button>
        <Button color="primary" onClick={() => dispatch(increment(5))}>increment 5</Button>
      </ButtonGroup>
    </>
  )
}
