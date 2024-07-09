import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App.tsx";
import queryClient from "./queryClient.tsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
