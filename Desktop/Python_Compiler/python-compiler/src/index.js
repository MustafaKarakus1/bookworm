import React from "react";
import { createRoot } from "react-dom/client"; // React 18 için createRoot API'si
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Root oluşturuluyor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
