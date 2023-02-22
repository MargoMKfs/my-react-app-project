import "./App.scss";
import { ToastContainer } from "react-toastify";
import HelloWorld from "./components/HelloWorld";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar.component";
import ConditionPage from "./MMKGitHub/ConditionPage";
import SideEffect from "./MMKGitHub/SideEffect";
import MortyAndRickPage from "./MMKGitHub/MortyAndRickPage";
import DisplayRickAndMorty from "./MMKGitHub/RickMortyDisplayPage";
import DisplayCardsServerPage from "./pages/DisplayCardsServerPage";
import HomePage from "./pages/HomePage";
import TwoBtnsPage from "./MMKGitHub/TwoBtnsPage";
import TwoBtns from "./MMKGitHub/components/TwoBtnsComponent";
import MoreInfoMyCards from "./pages/MoreInfoMyCardsPage";
import { useState, useEffect } from "react";
import autoLogin from "./service/autoLogin";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import jwt_decode from "jwt-decode";
import { Route, Switch } from "react-router-dom";
import EditMyBizCards from "./pages/EditMyCardsPage";

const App = () => {
  /*AUTOLOGIN*/
  // const [btn, setBtn] = useState(true);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let { data } = await autoLogin();
  //       let dataFromTokenAL = jwt_decode(localStorage.getItem("token"));
  //       dispatch(authActions.login(dataFromTokenAL));
  //       if (data) {
  //         dispatch(authActions.updateUserInfo(data));
  //       }
  //     } catch (error) {
  //       console.log("You are not logged in", error);
  //     }
  //   })();
  // }, []);
  return (
    <div className="container">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/panelpage" component={DisplayCardsServerPage}></Route>
        <Route path="/tk1" component={TwoBtnsPage}></Route>
        <Route path="/tk2" component={TwoBtns}></Route>
        <Route path="/moreinfo/:id" component={MoreInfoMyCards}></Route>
        <Route path="/editcards/:id" component={EditMyBizCards}></Route>
      </Switch>
      {/* <button onClick={(ev) => setBtn(!btn)}> click me </button>
      {btn && <SideEffect />} */}
      {/* <ConditionPage /> */}
      {/* <HelloWorld /> */}
      {/* <DisplayRickAndMorty /> */}
      {/* <MortyAndRickPage /> */}
      {/* <DisplayCardsServerPage /> */}
      {/* <HomePage /> */}
      {/* <TwoBtns />
      <TwoBtnsPage /> */}
    </div>
  );
};

export default App;
