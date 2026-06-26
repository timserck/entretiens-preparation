import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Route = createFileRoute("/exercices/_root")({
  component: ExercisesLayout,
});

function ExercisesLayout() {
  const exercices = ["todo", "counter", "search"];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Exercises
      </Typography>

      {/* Navigation interne */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button component={Link} to="/exercises">
          Home
        </Button>

        {exercices.map((ex) => (
          <Button component={Link} to={`/exercises/${ex}`}>
            {ex}
          </Button>
        ))}
      </Stack>

      {/* 👇 IMPORTANT */}
      <Outlet />
    </Box>
  );
}
