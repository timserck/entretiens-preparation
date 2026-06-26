let todos = ["learn react", "learn query"];

export async function getTodos() {
  await new Promise((r) => setTimeout(r, 300));
  return todos;
}

export async function addTodo(todo: string) {
  await new Promise((r) => setTimeout(r, 300));
  todos.push(todo);
  return todos;
}

export async function deleteTodo(index: number) {
  await new Promise((r) => setTimeout(r, 300));
  todos = todos.filter((_, i) => i !== index);
  return todos;
}

export async function searchApi(query: string) {
  await new Promise((r) => setTimeout(r, 400));

  const data = ["apple", "banana", "orange", "grape"];

  return data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}