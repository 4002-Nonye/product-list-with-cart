import { TiDeleteOutline } from 'react-icons/ti';
import Button from './Button';
import carbonNeutralIcon from '../assets/icon-carbon-neutral.svg';
import { useProduct } from '../context/ProductContext';
import { useModal } from '../context/ModalContext';
function OrderSummary() {
  const { orders, deleteItem,getTotalAmount } = useProduct();
  const { confirmOrder } = useModal();


  return (
    <>
      <div className='flex flex-col divide-y-[1px]'>
        {orders.map((order) => (
          <div
            key={order.id}
            className='flex justify-between items-center py-5'
          >
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-rose-500'>{order.name}</p>
              <p className='text-rose-400 text-sm'>
                <span className='font-bold text-red'>
                  {order.quantity}x &nbsp; &nbsp;{' '}
                </span>{' '}
                @ ${order.unitPrice.toFixed(2)}{' '}
                <span className='font-bold '>
                  &nbsp; &nbsp;${order.totalPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <Button type='deleteItem' onclick={() => deleteItem(order.id)}>
              <TiDeleteOutline />
            </Button>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center border-t-[1px] pt-3'>
        <p className='text-rose-400'>Order Total</p>
        <p className='text-rose-500 font-bold text-2xl'>
          ${getTotalAmount(orders).toFixed(2)}
        </p>
      </div>
      <p className='text-center flex justify-center  bg-rose-100 p-3 rounded-md my-6 text-sm text-rose-300 font-semibold'>
        <img src={carbonNeutralIcon} alt='icon' />
        &nbsp; This is a&nbsp;
        <span className='font-bold text-rose-400'>
          {' '}
          carbon-neutral&nbsp;
        </span>{' '}
        delivery
      </p>
      <Button type='confirmOrder' onclick={() => confirmOrder()}>
        Confirm Order
      </Button>
    </>
  );
}

export default OrderSummary;
