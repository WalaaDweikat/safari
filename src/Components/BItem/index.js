import "./b.css";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  iconF: {
    color: "#ED165F",
    cursor: "pointer",
    background: "white",
    marginLeft: "5px",
  },
  iconC: {
    color: "#ED165F",
    cursor: "pointer",
    background: "white",
    width: "15px",
    Height: "15px",
  },
}));
export default function BItem(props) {
  const classes = useStyles();
  const [c, setC] = useState("h");
  const enter = () => {
    setC("");
  };
  const out = () => {
    setC("h");
  };
  const click = () => {
    console.log("entered");
  };
  return (
    <div>
      <div className={`mouseOver ${c}`} onMouseOut={out}>
        <div className="fav" onClick={click}>
          <FavoriteBorderIcon className={classes.iconF} />
        </div>
        <div className="add">
          <span>ADD TO CART</span>
          <ShoppingCart className={classes.iconC} />
        </div>
      </div>
      <div className="bitem">
        <img src={props.src} alt="" className="photo" onMouseEnter={enter} />
        <div className="description">
          <span className="name">{props.name}</span>
          <span className="price">₦ {props.price}</span>
        </div>
      </div>
    </div>
  );
}
