import emptyCart from "../assets/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <div className="mt-9 flex flex-col items-center">
      <img src={emptyCart} alt="empty-cart" />
      <p className="mt-4 rounded-md font-bold text-rose-400">
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyCart;
