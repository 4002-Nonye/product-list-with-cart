import { FaRegCheckCircle } from 'react-icons/fa';
import { useProduct } from '../context/ProductContext';
import Button from './Button';
import OrderSuccessItem from './OrderSuccessItem';
import { useModal } from '../context/ModalContext';

function OrderSuccess() {
  const { orders, getTotalAmount, handleDefault } = useProduct();
  const { startNewOrder, showModal } = useModal();
  return (
    <>
      <div
        className={`fixed bg-white z-50 flex flex-col justify-center m-auto p-7 rounded-lg left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2 w-[27rem] ${
          showModal ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition duration-700 ease-in-out`}
      >
        <FaRegCheckCircle className='text-green text-3xl mb-3' />

        <h2 className='text-rose-500 text-3xl font-bold mb-2'>
          Order Confirmed
        </h2>
        <p className='text-rose-300'>We hope you enjoy your food!</p>

        <div className='bg-rose-100 px-4 pt-4 mt-4 rounded-lg divide-y-[1px] '>
          <div className='max-h-72 overflow-auto'>
            {orders.map((order) => (
              <OrderSuccessItem order={order} key={order.id} />
            ))}
          </div>

          <div className='flex justify-between py-5'>
            <p className='text-rose-400 font-semibold'>Order Total</p>
            <p className='text-lg font-bold text-rose-500'>
              ${getTotalAmount(orders).toFixed(2)}
            </p>
          </div>
        </div>

        <Button
          type='newOrder'
          onclick={() => {
            startNewOrder();
            handleDefault();
          }}
        >
          Start New Order
        </Button>
      </div>

      <div
        className={`bg-black bg-opacity-50 backdrop-blur-sm fixed left-0 right-0 top-0 bottom-0 h-screen z-10 ${
          showModal ? ' opacity-100 ' : 'opacity-0 invisible'
        } transition duration-700 ease-in-out`}
      />
    </>
  );
}

export default OrderSuccess;
