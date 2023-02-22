import { useEffect, useState } from "react";

const SideEffect = () => {
  const [time, setTime] = useState(Date.now());
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      setTime(Date.now());
      console.log("time", time);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return time;
};
export default SideEffect;
