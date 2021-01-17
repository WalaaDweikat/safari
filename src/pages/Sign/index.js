import "./sign.css";
import Input from "../../Components/Input/index.js";
import Button2 from "../../Components/Button2/index.js";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
const Check = withStyles({
  root: {
    color: "#ED165F",
    "&$checked": {
      color: "#ED165F",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
export default function Sign() {
  return (
    <div className="sign">
      <div className="ms">
        <h1>Hello there!</h1>
        <span>Please sign in or create account to continue</span>
      </div>
      <div className="signInCreate">
        <div className="sc">
          <span>SIGN IN</span>
          <Input idd="Email" name="Email" label="" type="email" />
          <Input idd="password" name="Password" label="" type="password" />
          <div className="divc">
            <Check />
            <label>Remember my details</label>
          </div>
          <Link to="/AccountInformation">
            <Button2 name="SIGN IN" />
          </Link>
          <a href="#" className="la">
            Forget Password?
          </a>
        </div>
        <div className="sc">
          <span>CREATE ACCOUNT</span>
          <Input idd="firstName" name="First Name" label="" type="text" />
          <Input idd="lastName" name="lastName" label="" type="text" />
          <Input idd="Email2" name="Email" label="" type="email" />
          <Input
            idd="createPassword"
            name="Create Password"
            label=""
            type="password"
          />
          <Input
            idd="confirmPassword"
            name="Confirm Password"
            label=""
            type="password"
          />
          <div className="divc">
            <Check />
            <label>
              I want to receive Safari newsletters with the best deals and
              offers
            </label>
          </div>
          <Link to="/AccountInformation">
            <Button2 name="CREATE ACCOUNT" />
          </Link>
        </div>
      </div>
    </div>
  );
}
