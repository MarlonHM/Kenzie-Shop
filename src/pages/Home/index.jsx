import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";
import Card from "../../components/Card";
import { Container } from "./style";

const Home = () => {
  const products = useContext(ProductsContext);

  return (
    <Container>
      {products.map(({ id, name, price, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            price={price}
            image={image}
            carrinho={false}
          />
        );
      })}
    </Container>
  );
};

export default Home;
