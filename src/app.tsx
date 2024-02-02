import React from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { AppRoutes } from "./renderer/AppRoutes";

const root = createRoot(document.body);
root.render(
  <AppRoutes/>
);