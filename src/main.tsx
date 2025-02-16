import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AnimatedBackground from "./components/Background.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <AnimatedBackground>
        <div className="flex items-center justify-center min-h-screen">
          <App/>
        </div>
      </AnimatedBackground>
    </main>
  </StrictMode>
);
