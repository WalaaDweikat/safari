import "./input.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#ED165F",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },

      "&:hover fieldset": {
        borderColor: "#ED165F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
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
export default function Input(props) {
  const classes = useStyles();
  return (
    <div className="input">
      <label htmlFor={props.idd}>{props.name}</label>
      <TextField
        id="outlined-basic"
        label={props.label}
        type={props.type}
        variant="outlined"
        className={classes.root}
        InputProps={{
          className: classes.input,
        }}
        onChange={props.onChange}
      />
    </div>
  );
}
