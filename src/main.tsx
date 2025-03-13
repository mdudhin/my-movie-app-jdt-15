import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { TokenProvider } from "./hooks/useToken";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>
);
