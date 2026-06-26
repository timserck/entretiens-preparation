import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: UserDetail,
});

function UserDetail() {
  const { userId } = Route.useParams();

  return <h1>User ID: {userId}</h1>;
}