import {
    useQuery,
    useMutation,
    useQueryClient,
  } from "@tanstack/react-query";
  
  import { getTodos, addTodo, deleteTodo } from "../../api/exercises";
  import { useState } from "react";
  
  import { Button, Stack, TextField } from "@mui/material";
import { createFileRoute, Link } from "@tanstack/react-router";
  

  export const Route = createFileRoute("/exercices/todos")({
    component: Todos,
  });
  
  export default function Todos() {
    const [input, setInput] = useState("");
    const queryClient = useQueryClient();
  
    const { data, isLoading } = useQuery({
      queryKey: ["todos"],
      queryFn: getTodos,
    });
  
    const addMutation = useMutation({
      mutationFn: addTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    });
  
    const deleteMutation = useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    });
  
    if (isLoading) return <p>Loading...</p>;
  
    return (
    <>
    <Link to={`/exercices/`}>back</Link>
      <Stack spacing={2}>
        {/* ADD */}
        <Stack direction="row" spacing={2}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
  
          <Button
            onClick={() => {
              addMutation.mutate(input);
              setInput("");
            }}
          >
            Add
          </Button>
        </Stack>
  
        {/* LIST */}
        {data?.map((t, i) => (
          <Stack key={i} direction="row" spacing={2}>
            <p>{t}</p>
  
            <Button
              color="error"
              onClick={() => deleteMutation.mutate(i)}
            >
              Delete
            </Button>
          </Stack>
        ))}
      </Stack>
      </>
    );
  }