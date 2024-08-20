/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  orders: [],
  status: 'loading', // 'LOADING,READY,ERROR'
};

function reducer(state, action) {
  switch (action.type) {
    case 'products/loaded':
      return { ...state, products: action.payload, status: '' };
    case 'products/addToCart':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case 'products/increaseQuantity':
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload
            ? {
                ...order,
                totalPrice: order.quantity * order.unitPrice,
                quantity: order.quantity++,
              }
            : order
        ),
      };

    // DECREASE QUANTITY AND WHEN IT GETS TO 0, REMOVE FROM CART
    case 'products/decreaseQuantity':
      return {
        ...state,
        orders: state.orders
          .map((order) =>
            order.id === action.payload
              ? {
                  ...order,
                  totalPrice: order.quantity * order.unitPrice,
                  quantity: order.quantity--,
                }
              : order
          )
          .filter((order) => order.quantity > 0),
      };

    case 'products/delete':
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };

    case 'products/reset':
      return { ...state, orders: [] };
    default:
      throw new Error('Action Unknown');
  }
}

const ProductProvider = ({ children }) => {
  const [{ products, status, orders }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // GET PRODUCTS ON INITIAL RENDER
  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'products/loaded', payload: data }));
  }, []);

  const increaseItemQuantity = (id) => {
    dispatch({ type: 'products/increaseQuantity', payload: id });
  };
  const decreaseItemQuantity = (id) => {
    dispatch({ type: 'products/decreaseQuantity', payload: id });
  };
  const deleteItem = (id) => {
    dispatch({ type: 'products/delete', payload: id });
  };

  const handleDefault = () => dispatch({ type: 'products/reset' });

  const getTotalAmount = (state) =>
    state.reduce((prev, order) => prev + order.totalPrice, 0);

  const getTotalCartQuantity = (state) =>
    state.reduce((prev, order) => prev + order.quantity, 0);
  return (
    <ProductContext.Provider
      value={{
        products,
        dispatch,
        status,
        orders,
        increaseItemQuantity,
        decreaseItemQuantity,
        deleteItem,
        getTotalAmount,
        getTotalCartQuantity,
        handleDefault,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error(
      'ProductContext context cannot be used outside ProductProvider'
    );
  return context;
};

export { ProductProvider, useProduct };
