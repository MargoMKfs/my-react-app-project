import axios from "axios";
const autoLogin = async () => {
  // try {
  //   const { data } = await axios.get("/users/userInfo");
  //   if (data) {
  // it needs custom hooks
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
  return axios.get("/users/userInfo");
};
export default autoLogin;
