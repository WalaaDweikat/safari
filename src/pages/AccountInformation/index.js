import "./account.css";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import LibraryBooksSharpIcon from "@material-ui/icons/LibraryBooksSharp";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import UserInformation from "../../Components/UserInformation";

import Favorite from "@material-ui/icons/Favorite";
import { Switch, Route, NavLink } from "react-router-dom";

export default function AccountInfomation() {
  return (
    <div className="account">
      <div className="dashboard">
        <div className="list">
          <p className="dashTitle">ACCOUNT DASHBOARD</p>
          <NavLink
            exact
            to="/AccountInformation"
            activeClassName="activeListItem"
          >
            <pre>
              <PersonSharpIcon className="i" />
              <span>Account Information</span>
            </pre>
          </NavLink>
          <NavLink exact to="/AddressBook" activeClassName="activeListItem">
            <pre>
              <LibraryBooksSharpIcon className="i" />
              <span>Address Book</span>
            </pre>
          </NavLink>
          <NavLink exact to="/MyOrders" activeClassName="activeListItem">
            <pre>
              <CardGiftcardIcon className="i" />
              <span>My Orders</span>
            </pre>
          </NavLink>
          <NavLink exact to="/Favorites" activeClassName="activeListItem">
            <pre>
              <Favorite className="i" />
              <span>My Favorites</span>
            </pre>
          </NavLink>
        </div>
        <pre className="signOut">
          <ExitToAppRoundedIcon className="exit" />
          <span>SIGN OUT</span>
        </pre>
      </div>
      <Switch>
        <Route path="/Favorites"></Route>
        <Route path="/AccountInformation">
          <UserInformation />
        </Route>
        <Route path="/AddressBook"></Route>
        <Route path="/MyOrders"></Route>
      </Switch>
    </div>
  );
}
