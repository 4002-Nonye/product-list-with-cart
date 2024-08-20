import { useProduct } from '../context/ProductContext';
import EmptyCart from './EmptyCart';
import OrderSummary from './OrderSummary';
function Cart() {
  const { orders,getTotalCartQuantity } = useProduct();
  const totalOrders = orders.length;

  return (
    <div className=' bg-white h-fit px-5 pb-7 pt-4 w-96'>
      <p className='text-red font-bold capitalize text-xl mb-2'>
        your cart ({getTotalCartQuantity(orders)})
      </p>

      {totalOrders === 0 ? <EmptyCart /> : <OrderSummary />}
    </div>
  );
}

export default Cart;
