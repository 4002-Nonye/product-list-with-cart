import Cart from './Cart';
import Desserts from './Desserts';
import OrderSuccess from './OrderSuccess';
import { useModal } from '../context/ModalContext';

function App() {
  const { showModal } = useModal();
  // PREVENT BACKGROUND SCROLLING WHEN MODAL IS OPEN
  if (showModal) document.body.classList.add('noScroll');
  else document.body.classList.remove('noScroll');
  return (
    <main className='flex justify-between gap-5 relative'>
      <Desserts />
      <Cart />
     <OrderSuccess />
    </main>
  );
}

export default App;
