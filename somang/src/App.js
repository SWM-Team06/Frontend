import AppRouter from "./Router";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter></AppRouter>
    </QueryClientProvider>
  );
}

export default App;
