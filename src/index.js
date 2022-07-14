import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/global";
import { ProductsProvider } from "./Providers/Products";
import { CartProvider } from "./Providers/Cart";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
