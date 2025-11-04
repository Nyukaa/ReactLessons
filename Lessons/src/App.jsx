import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Counter from "./components/Counter";
import "./App.css";
import useCounter from "./hooks/useCounter";
import { useState } from "react";
import data from "./data";

function App() {
  const [persons, setPersons] = useState(data);
  const { count, increment, decrement, reset, color } = useCounter();

  const handleClick = () => {
    // Use spread operator to create a new array
    setPersons([...persons, { name: "Seo", title: "Queen", animal: "Bird" }]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {persons.map((person) => {
          const animal = person.animal.concat("BBB");

          return (
            <Person
              key={person.name}
              name={person.name}
              title={person.title}
              animal={animal}
            />
          );
        })}
        <button onClick={handleClick}>Add Person</button>
        <Counter
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          color={color}
        />
      </main>
      <Footer
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        color={color}
      />
    </div>
  );
}

export default App;

{
  /* <Person
          name="Anna"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="anna@example.com"
          animal="Cat"
        />
        <Person
          name="Maria"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="maria@example.com"
          animal="Cat"
        />
        <Person
          name="Elja"
          title="Specialist"
          salary="50000"
          phone="+7 999 123 45 67"
          email="elja@example.com"
          animal="Cat"
        /> */
}
