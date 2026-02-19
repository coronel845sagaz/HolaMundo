import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import List from "./components/List.tsx";
import App from "./components/App.tsx";
import HolaReact from "./components/HolaReact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HolaReact />
    <Ods />


  </StrictMode>
)
