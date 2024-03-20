import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider.jsx";
import "./index.css";
import { router } from "./routes/router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[1440px] mx-auto">
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
