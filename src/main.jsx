import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ProductProvider>
  </StrictMode>,
);
