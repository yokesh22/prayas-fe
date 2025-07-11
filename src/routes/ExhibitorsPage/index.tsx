import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExhibitorsPage } from "./screens/ExhibitorsPage";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <ExhibitorsPage />
    </ThemeProvider>
  </StrictMode>,
);
