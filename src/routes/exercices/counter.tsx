import { createFileRoute, Link } from "@tanstack/react-router";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { increment, decrement, reset } from "../../store/counterSlice";

export const Route = createFileRoute("/exercices/counter")({
  component: Counter,
});

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card>
      <CardContent>
        <Link to="/exercices/">back</Link>

        <Typography variant="h6">Counter</Typography>

        <Typography variant="h3">{count}</Typography>

        <Stack direction="row" spacing={2}>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}