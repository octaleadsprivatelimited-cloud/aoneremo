import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

try {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} catch (error) {
  console.error("Failed to initialize app:", error);
  // Fallback error display
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui; padding: 20px; text-align: center;">
      <div>
        <h1 style="font-size: 24px; margin-bottom: 16px;">Failed to load application</h1>
        <p style="color: #666; margin-bottom: 16px;">Please refresh the page or contact support if the problem persists.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; background: #ea580c; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    </div>
  `;
}
