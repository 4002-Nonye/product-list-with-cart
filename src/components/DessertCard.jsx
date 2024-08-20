import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { useProduct } from "../context/ProductContext";
import Button from "./Button";
import UpdateItemQuantity from "./UpdateItemQuantity";

function DessertCard({ product }) {
  const { orders, dispatch } = useProduct();

  // FIND THE QUANTITY OF ITEM CLICKED ON
  const currentQuantity =
    orders.find((order) => order.id === product.id)?.quantity ?? 0;

  const { name, price, category, id } = product;

  // NEW OBJECT TO ADD TO ORDERS ARRAY
  function handleAddToCart() {
    const newOrder = {
      id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
      thumbnail: product.image.thumbnail,
    };
    dispatch({ type: "products/addToCart", payload: newOrder });
  }

  return (
    <div className="mt-5">
      <div className="flex flex-col">
        <div className="relative flex flex-col items-center">
          <img
            srcSet={`
              ${product.image.mobile} 480w,
              ${product.image.tablet} 768w,
              ${product.image.desktop} 1024w
            `}
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1024px"
            src={product.image.desktop} // Fallback image
            alt="product-img"
            className={`h-72 w-full rounded-lg  ${
              currentQuantity && "border-2 border-red"
            }`}
          />
          {currentQuantity ? (
            <UpdateItemQuantity currentQuantity={currentQuantity} id={id} />
          ) : (
            <Button type="addToCart" onclick={handleAddToCart}>
              <MdAddShoppingCart className="text-2xl text-red" /> Add to Cart
            </Button>
          )}
        </div>

        <div className="mb-8 mt-9 space-y-[2px]">
          <h2 className="text-rose-400">{category}</h2>
          <p className="text-xl font-bold text-rose-500">{name}</p>
          <p className="font-bold text-red">${price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default DessertCard;
