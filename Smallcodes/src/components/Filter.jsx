import { useState } from "react";

export default function Filer() {
  const [text, setText] = useState("");
  const names = ["Alice", "Bob", "Charlie", "David"];
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type to filter..."
        onChange={(e) => setText(e.target.value)}
      />
      <h1>names</h1>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
