import { createContext, useContext, useReducer } from "react";

const ModalContext = createContext();

const initialState = {
  showModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "app/showModal":
      return {
        showModal: true,
      };
    case "app/hideModal":
      return { showModal: false };
    default:
      throw new Error("Action Unknown");
  }
}

const ModalProvider = ({ children }) => {
  const [{ showModal }, dispatch] = useReducer(reducer, initialState);

  const confirmOrder = () => dispatch({ type: "app/showModal" });

  const startNewOrder = () => dispatch({ type: "app/hideModal" });

  return (
    <ModalContext.Provider
      value={{
        showModal,
        confirmOrder,
        startNewOrder,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext cannot be used outside ModalProvider");
  return context;
};

export { ModalProvider, useModal };
