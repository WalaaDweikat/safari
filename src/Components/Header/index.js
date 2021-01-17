import "./header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Favorite from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiTextField-root": {
      margin: theme.spacing(-2),
      paddingRight: theme.spacing(2),
      width: "17ch",
    },
    "& label.Mui-focused": {
      color: "#ED165F",
    },
    "& label": {
      fontSize: "14px",
      fontFamily: "'Mulish', sans-serif",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ED165F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
    },
  },
  input: {
    fontSize: "14px",
    fontFamily: "'Mulish', sans-serif;",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/" className="main-nav" activeClassName="active">
            {props.item1}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Clothes"
            className="main-nav"
            activeClassName="active"
          >
            {props.item2}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Shoes"
            className="main-nav"
            activeClassName="active"
          >
            {props.item3}
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Accessories"
            className="main-nav"
            activeClassName="active"
          >
            {props.item4}
          </NavLink>
        </li>
      </ul>
      <img src={Logo} alt=" " />

      <ul className="ul2">
        <li>
          <TextField
            className={classes.root}
            id="standard-basic"
            label={"Search..."}
            InputProps={{
              className: classes.input,
            }}
          />
          <Search style={{ cursor: "pointer" }} />
        </li>
        <li>
          <NavLink
            exact
            to="/signIn-CreateAccount"
            className="main-nav"
            activeClassName="active2"
          >
            <Person />
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/ShoppingCart"
            className="main-nav"
            activeClassName="active2"
          >
            <ShoppingCart />
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Favorites"
            className="main-nav"
            activeClassName="active2"
          >
            <Favorite />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
