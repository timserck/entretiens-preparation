import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, TextField, Typography } from "@mui/material";

import { useDebounce } from "../../hooks/useDebounce";

export const Route = createFileRoute("/exercices/search")({
  component: Search,
});

function Search() {
  const [value, setValue] = useState("");

  // 👇 debounce value
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      <Link to="/exercices">back</Link>

      <Card>
        <CardContent>
          <Typography variant="h6">Search</Typography>

          <TextField
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something..."
            sx={{ mt: 2 }}
          />

          <Typography sx={{ mt: 2 }}>
            Raw input: {value}
          </Typography>

          <Typography sx={{ mt: 1 }} color="primary">
            Debounced: {debouncedValue}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}