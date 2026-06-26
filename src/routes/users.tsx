import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
  component: Users,
});

function Users() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return (
    <div>
      <h1>Users</h1>

      {users.map((u) => (
        <div key={u.id}>
          <Link to="/users/$userId" params={{ userId: String(u.id) }}>
            {u.name}
          </Link>
        </div>
      ))}
    </div>
  );
}