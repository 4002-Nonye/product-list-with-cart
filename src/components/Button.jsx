/* eslint-disable react/prop-types */

function Button({ type, children,onclick }) {
  const defaultStyle = 'rounded-full font-semibold ease-in-out transition duration-700 ';
  const activeBtn = 'active:translate-y-1 active:transition';

  const styles = {
    addToCart: `${defaultStyle}  ${activeBtn}  absolute z-10  inline-flex gap-2 items-center  rounded-full border-[1px] border-rose-500 px-5 py-3 bg-rose-50 top-[15.5rem] hover:text-red hover:border-red`,
    confirmOrder: `${defaultStyle} p-4 w-full text-white  bg-red hover:bg-brown`,
    decreaseItem: `${activeBtn}`,
    increaseItem: `${activeBtn}`,
    deleteItem: 'text-3xl',
    newOrder:`${defaultStyle} p-4 w-full text-white  bg-red hover:bg-brown mt-4`
  };
  return <button onClick={onclick} className={`${styles[type]}`}>{children}</button>;
}

export default Button;
