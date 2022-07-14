import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

import Card from "../../components/Card";
import { Container, Titulo, Resumo, Pedido } from "./style";

const CartList = () => {
  const cart = useContext(CartContext);
  const { cartList } = cart;

  const preco = cartList.map(({ price }) => price);
  const total =
    preco.length > 0
      ? preco.reduce((anterior, atual) => {
          return anterior + atual;
        })
      : null;

  let totalFormatado =
    total !== null
      ? total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : null;

  return (
    <>
      <Titulo>Produtos</Titulo>
      <Resumo>
        <Container>
          {cartList.map(({ id, name, price, image }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                price={price}
                image={image}
                carrinho
              />
            );
          })}
        </Container>
        <Pedido>
          <h2>Resumo pedido</h2>
          <h4>Quantidade de itens</h4>
          <span>{cartList.length > 0 ? cartList.length : null}</span>
          <p>Total do pedido {totalFormatado}</p>
          <button>Finalizar pedido</button>
        </Pedido>
      </Resumo>
    </>
  );
};

export default CartList;
