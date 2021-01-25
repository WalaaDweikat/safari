import "./favorites.css";
import CancelIcon from "@material-ui/icons/Cancel";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Button: {
    background: "#ED165F",
    color: "white",
    fontSize: "18px",
    fontFamily: "'Mulish', sans-serif",
    height: "45px",
    width: "171px",
    fontWeight: "800",
    lineHeight: "24px;",
  },
}));

export default function FavoriteItem(props) {
  const classes = useStyles();
  return (
    <div className="favorites">
      <div className="fav1">
        <img src={props.src} alt="" />
        <div className="fav1-details">
          <span className="fav1-name">{props.name}</span>
          <span className="fav1-size">{props.size}</span>
          <span className="fav1-price">₦ {props.price}</span>
        </div>
      </div>
      <div className="fav2">
        <Button variant="contained" className={classes.Button}>
          BUY NOW
        </Button>
        <div className="remove">
          <CancelIcon></CancelIcon>
          <span>REMOVE</span>
        </div>
      </div>
    </div>
  );
}
