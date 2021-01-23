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
  root: {
    "& .MuiSelect-root": {
      borderColor: "black",
    },
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
          <label className="selectLabel">Gender</label>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={gender}
            onChange={updateSelectValue}
            variant="outlined"
            className={classes.root}
          >
            <MenuItem value={0} disabled></MenuItem>
            <MenuItem value={1}>Female</MenuItem>
            <MenuItem value={2}>Male</MenuItem>
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
