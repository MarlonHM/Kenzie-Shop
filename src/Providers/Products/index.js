import { createContext } from "react";

const initialState = [
  {
    id: 1,
    name: "Monitor Dell",
    price: 2820.0,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbH8VkfMZqML2HsF_RDgiaSrSZQ9GCpXL3ROHBKdZKchU0OPnOgaxtGdIgmV2-Ng&usqp=CAc",
  },
  {
    id: 2,
    name: "Monitor Lg",
    price: 1999.0,
    image:
      "https://images.samsung.com/is/image/samsung/br-ur55-lu28r550uqlmzd-frontblack-258478472?$2160_1728_PNG$",
  },
  {
    id: 3,
    name: "Smartphone Samsung",
    price: 2680.0,
    image: "https://imgs.extra.com.br/55031157/1xg.jpg?imwidth=500",
  },
  {
    id: 4,
    name: "Smartphone Samsung Pro",
    price: 6850.0,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a736blggzto/gallery/br-galaxy-a73-5g-a736-sm-a736blggzto-thumb-532080417?$320_320_PNG$",
  },
];

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={initialState}>
      {children}
    </ProductsContext.Provider>
  );
};
