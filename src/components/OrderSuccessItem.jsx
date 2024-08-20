function OrderSuccessItem({ order }) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between py-3">
        <div className="flex gap-3">
          <img src={order.thumbnail} alt="thumbnail" className="w-16" />

          <div className="flex flex-col space-y-2 text-sm">
            <p className="font-semibold text-rose-500">{order.name}</p>
            <p className="text-rose-400">
              <span className="font-bold text-red">
                {order.quantity}x &nbsp; &nbsp;{" "}
              </span>{" "}
              @ ${order.unitPrice.toFixed(2)}{" "}
            </p>
          </div>
        </div>

        <p className="font-bold">&nbsp; &nbsp;${order.totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
}

export default OrderSuccessItem;
