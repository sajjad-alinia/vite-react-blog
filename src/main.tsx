import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SkeletonTheme>
      <RouterProvider router={router} />
    </SkeletonTheme>
  </React.StrictMode>
);
