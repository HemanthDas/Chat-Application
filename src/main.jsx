import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes.jsx";
import { RouterProvider } from "@tanstack/react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
