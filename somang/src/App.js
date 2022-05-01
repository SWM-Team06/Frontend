import AppRouter from "./Router";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter></AppRouter>
    </QueryClientProvider>
  );
}

export default App;
