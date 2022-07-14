import { Figure, Container } from "./style";

import { CartContext } from "../../Providers/Cart";
import { useContext } from "react";
import { toast } from "react-toastify";

const Card = ({ id, name, price, image, carrinho }) => {
  const cart = useContext(CartContext);
  const { addProduct, subProduct, cartList } = cart;

  let valorFormatado = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container>
      <Figure>
        <img src={image} alt={name} />
      </Figure>
      <h2>{name}</h2>
      <div>
        <span>{valorFormatado}</span>

        {carrinho ? (
          <button
            onClick={() => {
              subProduct(id);
              toast.success("Produto removido!");
            }}
          >
            remover
          </button>
        ) : (
          <button
            onClick={() => {
              if (cartList.find((prod) => prod.id === id)) {
                toast.error("Produto já adicionado!");
              } else {
                addProduct({ id, name, price, image, carrinho });
                toast.success("Produto adicionado ao carrinho!");
              }
            }}
          >
            Adicionar ao carrinho
          </button>
        )}
      </div>
    </Container>
  );
};
export default Card;
