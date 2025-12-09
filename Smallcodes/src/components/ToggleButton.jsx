import { useState } from "react";
export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((prev) => !prev);
  }

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}
