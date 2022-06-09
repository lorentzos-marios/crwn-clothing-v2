import { createContext } from "react";

import { useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({children}) => {
   const [isCartOpen,setIsCartOpen]= useState(false);
    return <CartContext.Provider>{children}</CartContext.Provider>;
};