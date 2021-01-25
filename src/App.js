import "./App.css";
import Home from "./pages/Home/index.js";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import Sign from "./pages/Sign/index.js";
import Clothes from "./pages/Clothes/index.js";
import Cart from "./pages/Cart/index.js";
import AccountInformation from "./pages/AccountInformation/index.js";
import Favorites from "./pages/Favorites/index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const inter = () => {
    setIsAuth(true);
  };

  const out = () => {
    setIsAuth(false);
  };
  return (
    <Router>
      <div className="app">
        <Header
          item1="Home"
          item2="Clothes"
          item3="Shoes"
          item4="Accessories"
        />
        <Switch>
          <Route path="/Clothes">
            <Clothes />
          </Route>
          <Route path="/Shoes"></Route>
          <Route path="/Accessories"></Route>
          <Route path="/signIn-CreateAccount">
            <Sign onClick={inter} />
          </Route>
          <Route path="/ShoppingCart">
            {isAuth ? (
              <Cart onClick={out} />
            ) : (
              <Redirect to="/signIn-CreateAccount" />
            )}
          </Route>
          <Route path="/Favorites">
            {isAuth ? (
              <Favorites onClick={out} />
            ) : (
              <Redirect to="/signIn-CreateAccount" />
            )}
          </Route>
          <Route path="/AccountInformation">
            {isAuth ? (
              <AccountInformation />
            ) : (
              <Redirect to="/signIn-CreateAccount" />
            )}
          </Route>
          <Route path="/AddressBook">
            {isAuth ? (
              <AccountInformation onClick={out} />
            ) : (
              <Redirect to="/signIn-CreateAccount" />
            )}
          </Route>
          <Route path="/MyOrders">
            {isAuth ? (
              <AccountInformation onClick={out} />
            ) : (
              <Redirect to="/signIn-CreateAccount" />
            )}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
