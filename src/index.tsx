import './styles/index.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from "./theme/ThemeProvider";


// Make sure the DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("app");
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <BrowserRouter>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </StrictMode>
    );
  } else {
    console.error("Root element with id 'app' not found");
  }
});
