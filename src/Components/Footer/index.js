import "./footer.css";
import Logo from "../../images/Logo.png";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#ED165F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ED165F",
      },

      "&:hover fieldset": {
        borderColor: "#ED165F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    marginTop: "-10px",
  },
  input: {
    width: "30ch",
    height: "5.3ch",
    fontSize: "14px",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    fontFamily: "'Mulish', sans-serif",
  },

  Button: {
    background: "#ED165F",
    color: "white",
    fontSize: "14px",
    fontFamily: "'Mulish', sans-serif",
    height: "5.3ch",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginTop: "-10px",
  },
  icon: {
    color: "#ED165F",
    marginBottom: "-5px",
    marginRight: "5px",
    width: "17px",
    height: "17px",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <div className="dis">
        <span>About Us</span>
        <span>Contact</span>
        <span>Terms {"&"} conditions </span>
      </div>
      <div className="dis">
        <span>
          <Facebook className={classes.icon} />
          Facebook
        </span>
        <span>
          <Twitter className={classes.icon} />
          Twitter
        </span>
        <span>
          <Instagram className={classes.icon} />
          Instagram
        </span>
      </div>
      <div className="dis">
        <span className="Subscribe">Subscribe to our newsletter</span>
        <pre>
          <TextField
            id="outlined-search"
            label="Email Address"
            type="email"
            variant="outlined"
            className={classes.root}
            InputProps={{
              className: classes.input,
            }}
          />
          <Button variant="contained" className={classes.Button}>
            Ok
          </Button>
        </pre>
      </div>
      <div className="dis">
        <span>497 Evergreen Rd. Roseville, CA 95673</span>
        <span>+44 345 678 903</span>
        <span>adobexd@mail.com</span>
      </div>
    </div>
  );
}
