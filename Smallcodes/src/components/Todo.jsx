import { useState } from "react";

export default function CountText() {
  const products = ["Buy milk", "Walk dog", "Study React"];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((pro) => (
          <li
            key={pro}
            onClick={
              <li key={pro} onClick={() => console.log(pro)}>
                {pro}
              </li>
            }
          >
            {pro}
          </li>
        ))}
      </ul>
    </div>
  );
}
