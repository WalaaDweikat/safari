import "./dash.css";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import LibraryBooksSharpIcon from "@material-ui/icons/LibraryBooksSharp";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Favorite from "@material-ui/icons/Favorite";
import firebase from "firebase";
import "firebase/auth";
import { NavLink, Link } from "react-router-dom";
export default function DashBoard() {
  return (
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
      <Link to="/signIn-CreateAccount">
        <pre
          className="signOut"
          onClick={async () => {
            try {
              await firebase.auth.signOut();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <ExitToAppRoundedIcon className="exit" />
          <span>SIGN OUT</span>
        </pre>
      </Link>
    </div>
  );
}
