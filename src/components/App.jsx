import React from "react";

import { useModal } from "../context/ModalContext";
import Cart from "./Cart";
import Desserts from "./Desserts";
import OrderSuccess from "./OrderSuccess";

function App() {
  const { showModal } = useModal();
  // PREVENT BACKGROUND SCROLLING WHEN MODAL IS OPEN
  if (showModal) document.body.classList.add("noScroll");
  else document.body.classList.remove("noScroll");
  return (
    <main className="relative flex flex-col justify-between gap-5 md:flex-row">
      <Desserts />
      <Cart />
      <OrderSuccess />
    </main>
  );
}

export default App;
