
import emptyCart from '../assets/illustration-empty-cart.svg'
function EmptyCart() {
  return (
    <div className='flex flex-col items-center mt-9' >
        <img src={emptyCart} alt="empty-cart" />
            <p className='text-rose-400 font-bold mt-4 rounded-md'>Your added items will appear here</p>
        </div>
  )
}

export default EmptyCart