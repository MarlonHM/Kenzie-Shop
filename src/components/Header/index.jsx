import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { Container } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const history = useHistory();

  const cart = useContext(CartContext);
  const { cartList } = cart;

  return (
    <Container>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <div>
        <button onClick={() => history.push("/cart")}>
          <FaShoppingCart /> Carrinho{" "}
        </button>
        {cartList.length > 0 ? <span>{cartList.length}</span> : null}
        <button>Entrar</button>
      </div>
    </Container>
  );
};

export default Header;
