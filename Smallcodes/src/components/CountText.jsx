import { useState } from "react";

export default function CountText() {
  const [text, setText] = useState("");
  const charCount = text.length;
  const isTooLong = charCount > 20;

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p style={{ color: isTooLong ? "red" : "black" }}>
        You typed {charCount} characters
      </p>
    </div>
  );
}
