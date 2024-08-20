import React from "react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

import { useProduct } from "../context/ProductContext";
import Button from "./Button";

function UpdateItemQuantity({ currentQuantity, id }) {
  const { decreaseItemQuantity, increaseItemQuantity } = useProduct();
  return (
    <div className="absolute top-[16.5rem] z-10 flex w-40 justify-between rounded-full bg-red px-5 py-3 text-white">
      <Button type="decreaseItem" onclick={() => decreaseItemQuantity(id)}>
        <LuMinusCircle />
      </Button>
      {currentQuantity}
      <Button type="increaseItem" onclick={() => increaseItemQuantity(id)}>
        <LuPlusCircle />
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
