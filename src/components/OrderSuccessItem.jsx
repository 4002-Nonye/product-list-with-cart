/* eslint-disable react/prop-types */


function OrderSuccessItem({ order }) {

  return (
    <>
      <div className='flex justify-between mb-4 items-center py-3'>
        <div className='flex gap-3'>
          <img src={order.thumbnail} alt='thumbnail' className='w-16' />

          <div className='flex flex-col text-sm space-y-2'>
            <p className='font-semibold text-rose-500 '>{order.name}</p>
            <p className='text-rose-400 '>
              <span className='font-bold text-red'>
                {order.quantity}x &nbsp; &nbsp;{' '}
              </span>{' '}
              @ ${order.unitPrice.toFixed(2)}{' '}
            </p>
          </div>
        </div>

        <p className='font-bold '>
          &nbsp; &nbsp;${order.totalPrice.toFixed(2)}
        </p>
      </div>

     
    </>
  );
}

export default OrderSuccessItem;
