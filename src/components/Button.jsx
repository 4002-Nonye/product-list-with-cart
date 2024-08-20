function Button({ type, children, onclick }) {
  const defaultStyle =
    "font-semibold transition duration-700 ease-in-out rounded-full";
  const activeBtn = "active:translate-y-1 active:transition";

  const styles = {
    addToCart: `${defaultStyle}  ${activeBtn} absolute top-[16.5rem] z-10 inline-flex items-center gap-2 rounded-full border-[1px] border-rose-500 bg-rose-50 px-5 py-3 hover:border-red hover:text-red`,
    confirmOrder: `${defaultStyle} w-full p-4 text-white bg-red hover:bg-brown`,
    decreaseItem: `${activeBtn} `,
    increaseItem: `${activeBtn}`,
    deleteItem: "text-3xl",
    newOrder: `${defaultStyle} w-full p-4 text-white bg-red hover:bg-brown mt-4`,
  };
  return (
    <button onClick={onclick} className={`${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
