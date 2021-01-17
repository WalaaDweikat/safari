import "./user.css";
import Button2 from "../Button2/index.js";
import Input from "../Input/index.js";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Checkbox, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
const Check = withStyles({
  root: {
    color: "#ED165F",
    "&$checked": {
      color: "#ED165F",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const useStyles = makeStyles((theme) => ({
  select: {
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "red",
    },
  },
  input: {
    width: "350px",
    height: "55px",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "'Mulish', sans-serif",
  },
}));
export default function UserInformation() {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const updateSelectValue = (e) => {
    setGender(e.target.value);
  };
  return (
    <div className="user">
      <div className="userInfo">User Information</div>
      <div className="info">
        <Input idd="firstName" name="First name" label="" type="text" />
        <Input idd="lastName" name="Last name" label="" type="text" />
        <Input idd="email" name="Email" label="" type="email" />
        <div className="select">
          <label>Gender</label>
          <Select
            value={gender}
            variant="outlined"
            onChange={updateSelectValue}
            id="demo-simple-select-outlined"
            inputProps={{
              fontSize: "14px",
              color: "red",
            }}
            className={classes.select}
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
        </div>

        <Input idd="date" name="Date of birth" label="" type="date" />
        <a href="#">Forget Password?</a>
        <div className="divc">
          <Check />
          <label>Newsletter subsciption</label>
        </div>
      </div>
      <Button2 name="SAVE CHANGES" />
    </div>
  );
}
