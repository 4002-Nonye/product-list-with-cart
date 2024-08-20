import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

import carbonNeutralIcon from "../assets/icon-carbon-neutral.svg";
import { useModal } from "../context/ModalContext";
import { useProduct } from "../context/ProductContext";
import Button from "./Button";

function OrderSummary() {
  const { orders, deleteItem, getTotalAmount } = useProduct();
  const { confirmOrder } = useModal();

  return (
    <>
      <div className="flex flex-col divide-y-[1px]">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between py-5"
          >
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-rose-500">{order.name}</p>
              <p className="text-sm text-rose-400">
                <span className="font-bold text-red">
                  {order.quantity}x &nbsp; &nbsp;{" "}
                </span>{" "}
                @ ${order.unitPrice.toFixed(2)}{" "}
                <span className="font-bold">
                  &nbsp; &nbsp;${order.totalPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <Button type="deleteItem" onclick={() => deleteItem(order.id)}>
              <TiDeleteOutline />
            </Button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-[1px] pt-3">
        <p className="text-rose-400">Order Total</p>
        <p className="text-xl font-bold text-rose-500">
          ${getTotalAmount(orders).toFixed(2)}
        </p>
      </div>
      <p className="my-6 flex justify-center rounded-md bg-rose-100 p-3 text-center text-sm font-semibold text-rose-300">
        <img src={carbonNeutralIcon} alt="icon" />
        &nbsp; This is a&nbsp;
        <span className="font-bold text-rose-400">
          {" "}
          carbon-neutral&nbsp;
        </span>{" "}
        delivery
      </p>
      <Button type="confirmOrder" onclick={() => confirmOrder()}>
        Confirm Order
      </Button>
    </>
  );
}

export default OrderSummary;
