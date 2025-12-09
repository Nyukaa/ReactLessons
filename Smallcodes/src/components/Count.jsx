import { useState } from "react";
import CountBtn from "./CountBtn";
export default function Count() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const increaseByOne = () => {
    setCounter(counter + 1);
    console.log("increasing, value before", counter);
  };
  return (
    <CountBtn onClick={increaseByOne} text="increment" counter={counter} />
  );
}
