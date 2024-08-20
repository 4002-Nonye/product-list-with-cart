import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

import { useModal } from "../context/ModalContext";
import { useProduct } from "../context/ProductContext";
import Button from "./Button";
import OrderSuccessItem from "./OrderSuccessItem";

function OrderSuccess() {
  const { orders, getTotalAmount, handleDefault } = useProduct();
  const { startNewOrder, showModal } = useModal();
  return (
    <>
      <div
        className={`fixed left-2/4 top-2/4 z-50 m-auto flex h-screen w-full -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-none bg-white p-7 md:h-fit md:w-[27rem] md:justify-center md:rounded-lg ${
          showModal ? "visible opacity-100" : "invisible opacity-0"
        } transition duration-700 ease-in-out`}
      >
        <FaRegCheckCircle className="mb-3 text-3xl text-green" />

        <h2 className="mb-2 text-3xl font-bold text-rose-500">
          Order Confirmed
        </h2>
        <p className="text-rose-300">We hope you enjoy your food!</p>

        <div className="mt-4 divide-y-[1px] rounded-lg bg-rose-100 px-4 pt-4">
          <div className="h-32 overflow-auto lg:h-72">
            {orders.map((order) => (
              <OrderSuccessItem order={order} key={order.id} />
            ))}
          </div>

          <div className="flex justify-between py-5">
            <p className="font-semibold text-rose-400">Order Total</p>
            <p className="text-lg font-bold text-rose-500">
              ${getTotalAmount(orders).toFixed(2)}
            </p>
          </div>
        </div>

        <Button
          type="newOrder"
          onclick={() => {
            startNewOrder();
            handleDefault();
          }}
        >
          Start New Order
        </Button>
      </div>

      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-10 h-screen bg-black bg-opacity-50 backdrop-blur-sm ${
          showModal ? "opacity-100" : "invisible opacity-0"
        } transition duration-700 ease-in-out`}
      />
    </>
  );
}

export default OrderSuccess;
