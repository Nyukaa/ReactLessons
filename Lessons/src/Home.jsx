//Martin's version
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Counter from "./components/Counter";
import CardForm_M from "./components/CardForm_M.jsx";
import "./App.css";
import useCounter from "./hooks/useCounter";
import { useEffect, useState } from "react";
import axios from "axios";
//import data from "./data";
function Home() {
  const [persons, setPersons] = useState([]);
  const { count, increment, decrement, reset, color } = useCounter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    age: "",
  });
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  const handleClick = () => {
    const newPerson = {
      id: String(persons.length + 1),
      name: formData.firstName + " " + formData.lastName,
      title: formData.title,
      age: formData.age,
      isFavorite: true,
    };

    axios
      .post("http://localhost:3001/persons", newPerson)
      .then((response) => {
        setPersons([...persons, response.data]);
      })
      .catch((error) => {
        console.error("Error adding person:", error);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      })
      .catch((error) => {
        console.error("Error deleting person:", error);
      });
  };

  const toggleFavorite = (id) => {
    const updatedPersons = persons.map((person) =>
      person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
    );

    setPersons(updatedPersons);
  };

  return (
    <div className="app">
      <div className="counter-container">
        <Counter
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          color={color}
        />
      </div>
      <CardForm_M
        formData={formData}
        setFormData={setFormData}
        handleClick={handleClick}
      />

      <main className="main-content">
        {persons.map((person) => (
          <Person
            key={person.id}
            {...person}
            onClickHandler={toggleFavorite}
            onDeleteHandler={handleDelete}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
