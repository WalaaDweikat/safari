import "./sign.css";
import Input from "../../Components/Input/index.js";
import Button2 from "../../Components/Button2/index.js";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useEffect, useState } from "react";
import firebase from "../../firebase.Config.js";
import "firebase/auth";
const signupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  newEmail: yup.string().email().required(),
  createPassword: yup.string().min(9).required(),
  repeat: yup
    .string()
    .oneOf([yup.ref("createPassword"), null], "Passwords must match"),
});

const signIn = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initErrors = {
  email: "",
  password: "",
};
const initErrors2 = {
  firstName: "",
  lastName: "",
  newEmail: "",
  createPassword: "",
  repeat: "",
};

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initErrors);
  const account = { email, password };
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [createPassword, setcreatePassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error2, setError2] = useState({});
  const [flag, setFlag] = useState(false);
  const newAccount = { firstName, lastName, newEmail, createPassword, repeat };

  const v = (a) => {
    signupSchema
      .validate(a, { abortEarly: false })
      .then((valid) => {
        if (valid) {
          setError2(initErrors2);
        }
      })
      .catch((err) => {
        let newError = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});

        setError2(newError);
      });
  };
  useEffect(() => {
    if (flag) {
      v(newAccount);
    }
  }, [firstName, lastName, newEmail, createPassword, repeat]);

  const handleRegister = async (e) => {
    e.preventDefault();
    await signIn
      .validate(account, { abortEarly: false })
      .then((valid) => {
        if (valid) {
          console.log("Yes");
          setError(initErrors);
        }
      })
      .catch((err) => {
        let newError = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setError(newError);
      });

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch {
      setError2(initErrors2);
    }
  };
  const handleRegister2 = async (e) => {
    e.preventDefault();
    setFlag(true);
    await v(newAccount);
    try {
      const a = await firebase
        .auth()
        .createUserWithEmailAndPassword(newEmail, createPassword);
    } catch {
      setError2(initErrors2);
    }
  };
  return (
    <div className="sign">
      <div className="ms">
        <h1>Hello there!</h1>
        <span>Please sign in or create account to continue</span>
      </div>
      <div className="signInCreate">
        <div className="sc">
          <span>SIGN IN</span>
          <Input
            idd="Email"
            name="Email"
            label=""
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="log">{error.email}</label>
          <Input
            idd="password"
            name="Password"
            label=""
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="log">{error.password}</label>
          <div className="divc">
            <Check />
            <label>Remember my details</label>
          </div>
          <Link to="/AccountInformation">
            <Button2 name="SIGN IN" onClick={handleRegister} />
          </Link>
          <a href="#" className="la">
            Forget Password?
          </a>
        </div>
        <div className="sc">
          <span>CREATE ACCOUNT</span>
          <Input
            idd="firstName"
            name="First Name"
            label=""
            type="text"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
          <label className="log">{error2.firstName}</label>
          <Input
            idd="lastName"
            name="lastName"
            label=""
            type="text"
            onChange={(e) => {
              setLast(e.target.value);
            }}
          />
          <label className="log">{error2.lastName}</label>
          <Input
            idd="Email2"
            name="Email"
            label=""
            type="email"
            onChange={(e) => {
              setnewEmail(e.target.value);
            }}
          />
          <label className="log">{error2.newEmail}</label>
          <Input
            idd="createPassword"
            name="Create Password"
            label=""
            type="password"
            onChange={(e) => {
              setcreatePassword(e.target.value);
            }}
          />
          <label className="log">{error2.createPassword}</label>
          <Input
            idd="confirmPassword"
            name="Confirm Password"
            label=""
            type="password"
            onChange={(e) => {
              setRepeat(e.target.value);
            }}
          />
          <label className="log">{error2.repeat}</label>
          <div className="divc">
            <Check />
            <label>
              I want to receive Safari newsletters with the best deals and
              offers
            </label>
          </div>
          <Link to="/AccountInformation">
            <Button2 name="CREATE ACCOUNT" onClick={handleRegister2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
