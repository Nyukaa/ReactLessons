import { useState } from "react";

export default function CountText() {
  const products = ["Buy milk", "Walk dog", "Study React"];
  const handleClick = (pro) => () => {
    console.log(pro);
  };
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((pro) => (
          <li key={pro} onClick={handleClick(pro)}>
            {pro}
          </li>
        ))}
      </ul>
    </div>
  );
}
