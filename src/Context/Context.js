import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const addToCart = (product) => {
    if (!cart.map((i) => {
      return i.id;
    }).includes(product.id)) {
      setCart([...cart, product]);
    }
  }
  const clearCart = () => {
    setCart([])
  }
  return (
    <AppContext.Provider value={{
      cart, setCart, addToCart, clearCart,
      total,
      setTotal,
      subTotal,
      setSubTotal,
      discount,
      setDiscount
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}