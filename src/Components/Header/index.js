import "./header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Favorite from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/index.js";

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
  const [w, setW] = useState(window.innerWidth);
  const [e, setE] = useState("");
  const [e2, setE2] = useState("h");

  const handleResize = () => {
    setW(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    if (w < 800) {
      setE("h");
      setE2("");
    } else {
      setE("");
      setE2("h");
    }
  }, [w]);

  return (
    <>
      <Sidebar />
      <div className="header">
        <ul className={`ul ${e2}`}>
          <li>
            <img src={Logo} alt=" " className="logoSafari2" />
          </li>
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
        </ul>
        <ul className={`ul ${e}`}>
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

        <img src={Logo} alt=" " className={`logoSafari ${e}`} />

        <ul className={`ul ul2 ${e}`}>
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
              to="/AccountInformation"
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
    </>
  );
}
