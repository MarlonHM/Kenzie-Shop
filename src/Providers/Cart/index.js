import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (item) => {
    const prod = JSON.parse(localStorage.getItem("produto"));
    const newStorage = prod ? [...prod, item] : [item];
    localStorage.setItem("produto", JSON.stringify(newStorage));
    setCartList([...cartList, item]);
  };

  const subProduct = (product) => {
    const prod = JSON.parse(localStorage.getItem("produto"));
    const newStorage = prod.filter((item) => item.id !== product);
    newStorage.length
      ? localStorage.setItem("produto", JSON.stringify(newStorage))
      : localStorage.clear();
    setCartList(cartList.filter((prod) => prod.id !== product));
  };

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, addProduct, subProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
