import "./cartItem.css";
import CancelIcon from "@material-ui/icons/Cancel";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "86px",
    height: "55px",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: "35px",
  },
  icon: {
    width: "20px",
    height: "20px",
    color: "#ED165F",
    marginTop: "-3px",
    marginRight: "8px",
    cursor: "pointer",
  },
}));
export default function CartItem(props) {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  return (
    <div className="cartitem">
      <div className="cartitem-1st">
        <p className="pp">ITEM DESCRIPTION</p>
        <div className="asd">
          <div className="asd-1st">
            <img src={props.src} alt="" />
            <div className="spans">
              <p className="span1">Casual flat loafers</p>
              <p className="span2">Size - EU: 36 US: 5.5</p>
            </div>
          </div>

          <div className="amg">
            <FavoriteBorderIcon className={classes.icon} />
            <span className="move">MOVE TO FAVORITES</span>
            <CancelIcon className={classes.icon} />{" "}
            <span className="re">REMOVE</span>
          </div>
        </div>
      </div>
      <div className="cartitem-2nd">
        <p className="pp">QUANTITY</p>
        <TextField
          id="standard-basic"
          type="number"
          className={classes.root}
          InputProps={{
            className: classes.input,
          }}
          value={value}
          onClick={(e) => {
            setValue(e.value);
          }}
        />
      </div>
      <div className="cartitem-3rd">
        <p className="pp">UNIT PRICE</p>
        <span>{props.unitPrice}</span>
      </div>
      <div className="cartitem-4th">
        <p className="pp">SUB TOTAL</p>
        <span>{props.total}</span>
      </div>
    </div>
  );
}
