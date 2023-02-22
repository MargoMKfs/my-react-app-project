import "./style/NavBar.style.scss";
import { useSelector, useDispatch } from "react-redux";
import NavBarLinksPartial from "./partial/NavBarLinks.partial";
import { authActions } from "../store/auth";
import { Fragment } from "react";

let links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/aboutus",
  },
  {
    label: "Panel",
    url: "/panelpage",
  },
  {
    label: "TK1",
    url: "/tk1",
  },
  {
    label: "TK2",
    url: "/tk2",
  },
];

let authLinks = {
  isLoggedIn: [
    {
      label: "Welcome",
      url: "/profile",
    },
    {
      label: "Logout",
      url: "/logout",
    },
  ],
  isLoggedOut: [
    {
      label: "Login",
      url: "/login",
    },
    {
      label: "Register",
      url: "/register",
    },
  ],
};

let bizLinks = [
  {
    label: "Create card",
    url: "/createcards",
  },
  {
    label: "My cards",
    url: "/mycards",
  },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dataFromToken = useSelector((state) => state.auth.userData);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const handleLogOutBtnClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((item, idx) => (
              <NavBarLinksPartial
                key={"navbarlinks" + idx}
                url={item.url}
                label={item.label}
              />
            ))}
            {dataFromToken &&
              dataFromToken.biz &&
              bizLinks.map((item, idx) => (
                <NavBarLinksPartial
                  key={"bizLinks" + idx}
                  url={item.url}
                  label={item.label}
                />
              ))}
          </ul>
          <form className="d-flex" role="search">
            {loggedIn ? (
              <Fragment>
                <button type="button" className="btn btn-dark">
                  {`Welcome ${userInfo.name}`}
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleLogOutBtnClick}
                >
                  Logout
                </button>
              </Fragment>
            ) : (
              authLinks.isLoggedOut.map((item, idx) => (
                <button
                  type="button"
                  key={"linksLoggedOut" + idx}
                  className="btn btn-dark"
                >
                  {item.label}
                </button>
              ))
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
