import {  useProduct } from '../context/ProductContext';
import DessertCard from './DessertCard';

function Desserts() {
  const { products, status } = useProduct();


  return (
    <div>
      <h1 className='text-3xl font-bold '>Desserts</h1>
      {status === 'loading' ? (
        '...LOADING'
      ) : (
        <div className='mt-7  grid grid-cols-3 gap-4'>
          {products?.map((product) => {
            return <DessertCard product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Desserts;
