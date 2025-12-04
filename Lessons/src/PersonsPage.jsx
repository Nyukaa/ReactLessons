import { useEffect, useState } from "react";
import axios from "axios";
import PersonsTable from "./components/PersonsTable";

export default function PersonsPage() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("/persons").then((res) => setPersons(res.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/persons/${id}`).then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    });
  };

  const handleToggleFavorite = (id) => {
    const updated = persons.map((p) =>
      p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
    );
    setPersons(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Employees Table</h1>

      <PersonsTable
        persons={persons}
        onDelete={handleDelete}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
