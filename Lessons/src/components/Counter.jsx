//import { useState } from "react";
//import useCounter from "../hooks/useCounter";
// const Counter = ({ count, setCount }) => {
//   const handleColor = () => {
//     if (count === 0) {
//       return "gray";
//     } else if (count > 0) {
//       return "green";
//     } else {
//       return "red";
//     }
//   };
//   const handleColor = () => {
//     switch (true) {
//       case count < 0:
//         return "red";
//       case count > 0:
//         return "green";
//       default:
//         return "gray";
//     }
//   };

//   //const [count, setCount] = useCounter();
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       {/* <div style={{ color: count >= 0 ? "green" : "red" }}>{count}</div> */}
//       <div style={{ color: handleColor() }}>{count}</div>
//     </div>
//   );
// };
// export default Counter;
export default function Counter({ count, increment, decrement, reset, color }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <div style={{ color }}>{count}</div>
    </div>
  );
}
