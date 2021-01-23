import "./App.css";
import Home from "./pages/Home/index.js";
import Header from "./Components/Header/index.js";
import Footer from "./Components/Footer/index.js";
import Sign from "./pages/Sign/index.js";
import Clothes from "./pages/Clothes/index.js";
import Cart from "./pages/Cart/index.js";
import AccountInformation from "./pages/AccountInformation/index.js";
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
          <Route path="/signIn-CreateAccount"></Route>
          <Route path="/ShoppingCart"></Route>
          <Route path="/Favorites"></Route>
          <Route path="/AccountInformation"></Route>
          <Route path="/AddressBook"></Route>
          <Route path="/MyOrders"></Route>
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
