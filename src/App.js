import "./App.css";
import Home from "./pages/Home/index.js";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import Sign from "./pages/Sign/index.js";
import Clothes from "./pages/Clothes/index.js";
import Cart from "./pages/Cart/index.js";
import AccountInformation from "./pages/AccountInformation/index.js";
import Favorites from "./pages/Favorites/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
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
            <Sign />
          </Route>
          <Route path="/ShoppingCart">
            <Cart />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route>
          <Route path="/AccountInformation">
            <AccountInformation />
          </Route>
          <Route path="/AddressBook">
            <AccountInformation />
          </Route>
          <Route path="/MyOrders">
            <AccountInformation />
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
