import { Fragment } from "react";
import { useSelector } from "react-redux";
const TwoBtnsPage = () => {
  const counterDisplay = useSelector((state) => state.counter.counter);
  const randomNumDisplay = useSelector((state) => state.randomNum.randomNum);
  return (
    <Fragment>
      <div className="ms-5">{counterDisplay}</div>
      <div className="ms-5">{randomNumDisplay}</div>
    </Fragment>
  );
};
export default TwoBtnsPage;
