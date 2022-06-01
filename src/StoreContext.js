import { createContext } from "react/cjs/react.production.min";

const StoreContext = createContext(null);

export const Provider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
