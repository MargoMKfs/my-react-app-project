import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import registerSchema from "../validation/register.validation";
import validate from "../validation/validation";

const RegisterPage = () => {
  const [regisInput, setRegisInput] = useState({
    regisName: "",
    regisEmail: "",
    regisPassword: "",
    regisBiz: false,
  });
  const [disBtn, setDisBtn] = useState(false);

  const handleRegisInputChange = (ev) => {
    let newRegisInput = JSON.parse(JSON.stringify(regisInput));
    if (newRegisInput.hasOwnProperty(ev.target.id)) {
      newRegisInput[ev.target.id] = ev.target.value;
      setRegisInput(newRegisInput);
    }
  };

  const handleRegisBizCheckBox = (ev) => {
    let newRegisInput = JSON.parse(JSON.stringify(regisInput));
    if (newRegisInput.hasOwnProperty(ev.target.id)) {
      newRegisInput[ev.target.id] = ev.target.checked;
      setRegisInput(newRegisInput);
    }
  };

  const handleSubmitRegister = (ev) => {
    ev.preventDefault();
    const { error } = validate(regisInput, registerSchema);
    if (error) {
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
  };

  const handleRegisClick = async () => {
    try {
      await axios.post("/users/register", {
        name: regisInput.regisName,
        email: regisInput.regisEmail,
        password: regisInput.regisPassword,
        biz: regisInput.regisBiz,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onInput = (ev) => setDisBtn(ev.target.value);

  return (
    <Fragment>
      <form onSubmit={handleSubmitRegister}>
        <h2> Register now!</h2>
        <div className="form-floating mb-3">
          <label htmlFor="regisName">Name</label>
          <input
            type="text"
            className="form-control"
            id="regisName"
            placeholder="Name"
            value={regisInput.regisName}
            onChange={handleRegisInputChange}
            onInput={onInput}
          />
        </div>

        <div className="form-floating mb-3">
          <label htmlFor="regisEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="regisEmail"
            placeholder="Email address"
            value={regisInput.regisEmail}
            onChange={handleRegisInputChange}
            onInput={onInput}
          />
        </div>
        <div className="form-floating">
          <label htmlFor="regisPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="regisPassword"
            placeholder="Password"
            value={regisInput.regisPassword}
            onChange={handleRegisInputChange}
            onInput={onInput}
          />
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary"
            disabled={!disBtn}
            onClick={handleRegisClick}
          >
            Register
          </button>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="regisBiz"
            checked={regisInput.regisBiz}
            onChange={handleRegisBizCheckBox}
          />
          <label
            className="form-check-label fst-italic"
            htmlFor="flexCheckDefault"
          >
            Bussiness?
          </label>
        </div>
      </form>
    </Fragment>
  );
};

export default RegisterPage;
