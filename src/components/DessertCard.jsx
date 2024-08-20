/* eslint-disable react/prop-types */

import { MdAddShoppingCart } from 'react-icons/md';
import { LuPlusCircle } from 'react-icons/lu';
import { LuMinusCircle } from 'react-icons/lu';
import Button from './Button';
import { useProduct } from '../context/ProductContext';

function DessertCard({ product }) {
  const { increaseItemQuantity, decreaseItemQuantity, orders, dispatch } =
    useProduct();


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
      thumbnail:product.image.thumbnail
    };
    dispatch({ type: 'products/addToCart', payload: newOrder });
  }

  return (
    <div className='mt-5'>
      <div className=' flex flex-col '>
        <div className=' flex flex-col items-center relative'>
          <img
            src={product.image.desktop}
            alt='product-img'
            className={`w-72 h-auto rounded-md ${currentQuantity&&'border-red border-2'}`}
          />

          {currentQuantity ? (
            <div className='absolute z-10 top-[15.5rem] bg-red text-white px-5 py-3 rounded-full flex justify-between w-40'>
              <Button
                type='decreaseItem'
                onclick={() => decreaseItemQuantity(id)}
              >
                <LuMinusCircle />
              </Button>
              {currentQuantity}
              <Button
                type='increaseItem'
                onclick={() => increaseItemQuantity(id)}
              >
                <LuPlusCircle />
              </Button>
            </div>
          ) : (
            <Button type='addToCart' onclick={handleAddToCart}>
              <MdAddShoppingCart className='text-red text-2xl' /> Add to Cart
            </Button>
          )}
        </div>

        <div className='space-y-[2px] mt-9 '>
          <h2 className='text-rose-400'>{category}</h2>
          <p className='font-bold text-rose-500 text-xl'>{name}</p>
          <p className='text-red font-bold'>${price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default DessertCard;
