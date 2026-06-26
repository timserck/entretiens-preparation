import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

export const Route = createFileRoute("/exercices/counter")({
  component: Counter,
});

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardContent>
        <Link to={`/exercices/`}>back</Link>
        <Typography variant="h6">Counter</Typography>
        
        <Typography variant="h3">{count}</Typography>

        <Stack direction="row" spacing={2}>
          <Button onClick={() => setCount(c => c + 1)}>+</Button>
          <Button onClick={() => setCount(c => c - 1)}>-</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}