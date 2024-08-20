import React from "react";

import { useProduct } from "../context/ProductContext";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";

function Cart() {
  const { orders, getTotalCartQuantity } = useProduct();
  const totalOrders = orders.length;

  return (
    <div className="mt-6 h-fit  bg-white px-5 pb-7 pt-4 md:mt-0 lg:w-96">
      <p className="mb-2 text-xl font-bold capitalize text-red">
        your cart ({getTotalCartQuantity(orders)})
      </p>

      {totalOrders === 0 ? <EmptyCart /> : <OrderSummary />}
    </div>
  );
}

export default Cart;
