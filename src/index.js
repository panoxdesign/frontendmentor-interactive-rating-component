import { createRoot } from "react-dom/client";
import { App } from "@/App";
import React from "react";

const app = document.getElementById("app");

const root = createRoot(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
