import { Fragment, useState } from "react";

const ShowSomething = () => {
  const [showSome, setShowSome] = useState(true);
  const handleShowBtn = () => {
    setShowSome(!showSome);
  };
  return (
    <Fragment>
      {" "}
      {showSome && <h1> Holi!</h1>}
      <button onClick={handleShowBtn}> Click me! </button>
    </Fragment>
  );
};

export default ShowSomething;
