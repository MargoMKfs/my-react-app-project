import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
import { useState } from "react";

const TwoBtns = () => {
  const [numInput, setNumInput] = useState("0");
  const dispatch = useDispatch();
  const handleAddOne = () => {
    dispatch(counterActions.addOne());
  };
  const handleSubOne = () => {
    dispatch(counterActions.subOne());
  };
  const handleNumInput = (ev) => {
    setNumInput(ev.target.value);
  };
  const handleNumInputClick = () => {
    dispatch(counterActions.addNum(numInput));
  };
  const handleNumInputClickSub = () => {
    dispatch(counterActions.subNum(numInput));
  };
  const handleClearClick = () => {
    dispatch(counterActions.clearToCero(numInput));
  };
  return (
    <div className="d-flex justify-content-sm-around">
      <button type="button" className="btn btn-success" onClick={handleAddOne}>
        Add 1
      </button>

      <button type="button" className="btn btn-danger" onClick={handleSubOne}>
        Sub 1
      </button>

      <input type="text" value={numInput} onChange={handleNumInput} />
      <button
        type="button"
        className="btn btn-success"
        onClick={handleNumInputClick}
      >
        Add number
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleNumInputClickSub}
      >
        Sub number
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};
export default TwoBtns;
