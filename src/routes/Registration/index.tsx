import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Registration } from "./screens/Registration";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <Registration />
    </ThemeProvider>
  </StrictMode>,
);
