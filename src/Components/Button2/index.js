import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Button: {
    background: "#ED165F",
    color: "white",
    fontSize: "18px",
    fontFamily: "'Mulish', sans-serif",
    height: "45px",
    width: "350px",
    fontWeight: "800",
    lineHeight: "24px;",
    marginTop: "20px",
    paddingTop: "15px",
  },
}));

export default function Button2(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.Button}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}
