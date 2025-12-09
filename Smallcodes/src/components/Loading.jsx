import { useState, useEffect } from "react";

export default function Lading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return <div>{isLoading ? <h1>Loading...</h1> : <h1>Data loaded!</h1>}</div>;
}
