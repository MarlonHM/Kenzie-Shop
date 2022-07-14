import { Switch, Route } from "react-router-dom";
import CartList from "../pages/CartLIst";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <CartList />
      </Route>
    </Switch>
  );
};

export default Routes;
