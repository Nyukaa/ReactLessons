import React, { useState } from "react";
import Button from "./components/Button";

export default function Home() {
  const [string, setString] = useState("something");

  return (
    <>
      <div>
        <button onClick={() => setString("something different")}>
          Change str
        </button>
        <Button
          buttonText="Contact me"
          setString={setString}
          string="Navigate to contact page"
          ariaLabel="Navigate the user from the current page to the contact page"
          navigateTo="/contact"
        />
        <Button
          buttonText="Home page"
          setString={setString}
          string="Navigate to home page"
          ariaLabel="Navigate the user from the current page to the home page"
          navigateTo="/"
        />
        <Button
          buttonText="About me"
          setString={setString}
          string="Navigate to About page"
          ariaLabel="Navigate the user from the current page to the about page"
          navigateTo="/about"
        />
      </div>
      <p>{string}</p>
    </>
  );
}
