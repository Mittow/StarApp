import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// context para detectar si el screen es mobile o web
import { IsMobileProvider } from "./context/IsMobile.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IsMobileProvider>
      <App />
    </IsMobileProvider>
  </React.StrictMode>
);
