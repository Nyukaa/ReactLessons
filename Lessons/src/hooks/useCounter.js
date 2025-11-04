import { useState, useEffect } from "react";

export default function useCounter(min = -10, max = 10) {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const increment = () => setCount((prev) => (prev < max ? prev + 1 : prev));

  const decrement = () => setCount((prev) => (prev > min ? prev - 1 : prev));

  const reset = () => setCount(0);

  const color = count > 0 ? "green" : count < 0 ? "red" : "gray";

  return { count, increment, decrement, reset, color };
}
