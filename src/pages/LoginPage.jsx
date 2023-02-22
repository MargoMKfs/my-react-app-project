import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import axios from "axios";
import loginSchema from "../validation/login.validation";
import validate from "../validation/validation";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [disBtn, setDisBtn] = useState(false);

  const dispatch = useDispatch();

  const handleLoginInputChange = (ev) => {
    let newLoginInput = JSON.parse(JSON.stringify(loginInput));
    newLoginInput[ev.target.id] = ev.target.value;
    setLoginInput(newLoginInput);
  };

  //Another way to disable and unavible the login btn, with schema rules
  // useEffect(() => {
  //   const { error } = validate(loginInput, loginSchema);
  //   if (error) {
  //     setDisBtn(true);
  //   } else {
  //     setDisBtn(false);
  //   }
  // }, [loginInput]);

  const handleSubmitLogin = (ev) => {
    ev.preventDefault();
    const { error } = validate(loginInput, loginSchema);
    if (error) {
      console.log("error", { error });
      let errorMsgs = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "string.min":
            errorMsgs += `${errorItem.context.label} must contain at least ${errorItem.context.limit} characters. `;
            break;
          case "string.max":
            errorMsgs += `${errorItem.context.label} must contain a maximum of ${errorItem.context.limit} characters. `;
            break;
          default:
            errorMsgs += `Something went wrong. `;
            break;
        }
      }
      toast.error(errorMsgs, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    axios
      .post("/users/login", {
        email: loginInput.loginEmail,
        password: loginInput.loginPassword,
      })
      .then((res) => {
        console.log("response", res.data);
        console.log("jwt", jwt_decode(res.data.token));
        localStorage.setItem("token", res.data.token);
        dispatch(authActions.login(jwt_decode(res.data.token)));
        toast.success("You logged in !", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Please check your email or password", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  const onInput = (ev) => setDisBtn(ev.target.value);

  const handleLoginEmailInvalid = (ev) => {
    ev.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmitLogin}>
        <h2>Login</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="loginEmail"
            placeholder="Email address"
            value={loginInput.loginEmail}
            onChange={handleLoginInputChange}
            onInput={onInput}
            onInvalid={handleLoginEmailInvalid}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
            value={loginInput.loginPassword}
            onChange={handleLoginInputChange}
            onInput={onInput}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" disabled={!disBtn}>
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default LoginPage;
