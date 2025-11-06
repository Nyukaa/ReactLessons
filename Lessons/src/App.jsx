//Martin's version
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Counter from "./components/Counter";
import CardForm_M from "./components/CardForm_M.jsx";
import "./App.css";
import useCounter from "./hooks/useCounter";
import { useState } from "react";
import data from "./data";

function App() {
  const [persons, setPersons] = useState(data);
  const { count, increment, decrement, reset, color } = useCounter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    age: "",
  });

  //   const addPerson = (newPerson) => {
  //     setPersons([...persons, newPerson]);
  //   };

  const handleClick = () => {
    setPersons([
      ...persons,
      {
        id: persons.length + 1,
        name: formData.firstName + " " + formData.lastName,
        title: formData.title,
        age: formData.age,
        isFavorite: true,
      },
    ]);
  };

  const toggleFavorite = (id) => {
    const updatedPersons = persons.map((person) =>
      person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
    );

    setPersons(updatedPersons);
  };

  return (
    <div className="app">
      <Header />

      <CardForm_M
        formData={formData}
        setFormData={setFormData}
        handleClick={handleClick}
      />

      <main className="main-content">
        {persons.map((person) => (
          <Person key={person.id} {...person} onClickHandler={toggleFavorite} />
        ))}

        {/* <button onClick={handleClick}>Add Person</button> */}

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
//My version
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Person from "./components/Person";
// import Counter from "./components/Counter";
// import CardForm from "./components/CardForm";
// import "./App.css";
// import useCounter from "./hooks/useCounter";
// import { useState } from "react";
// import data from "./data";

// function App() {
//   const [persons, setPersons] = useState(data);
//   const { count, increment, decrement, reset, color } = useCounter();

//   const addPerson = (newPerson) => {
//     setPersons([...persons, newPerson]);
//   };

//   const handleClick = () => {
//     setPersons([
//       ...persons,
//       {
//         id: persons.length + 1,
//         name: "Mari",
//         title: "Queen",
//         age: 37,
//         isFavorite: true,
//       },
//     ]);
//   };

//   const toggleFavorite = (id) => {
//     const updatedPersons = persons.map((person) =>
//       person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
//     );

//     setPersons(updatedPersons);
//   };

//   return (
//     <div className="app">
//       <Header />

//       <CardForm addPerson={addPerson} />

//       <main className="main-content">
//         {persons.map((person) => (
//           <Person key={person.id} {...person} onClickHandler={toggleFavorite} />
//         ))}

//         <button onClick={handleClick}>Add Person</button>

//         <Counter
//           count={count}
//           increment={increment}
//           decrement={decrement}
//           reset={reset}
//           color={color}
//         />
//       </main>

//       <Footer
//         count={count}
//         increment={increment}
//         decrement={decrement}
//         reset={reset}
//         color={color}
//       />
//     </div>
//   );
// }

// export default App;
