import './App.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
}

export default App
