import { createFileRoute, Link } from "@tanstack/react-router";
import { Typography } from "@mui/material";

export const Route = createFileRoute("/exercices/")({
  component: Home,
});

function Home() {
  const exercises: string[] = ["counter", "search", "todos"];

  return (
    <>
      <Typography>
        Select an exercise 👆
      </Typography>

      <ul>
        {exercises.map((ex) => (
          <li key={ex}>
            <Link to={`/exercices/${ex}`}>
              {ex}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}