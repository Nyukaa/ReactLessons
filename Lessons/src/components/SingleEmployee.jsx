import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

const SingleEmployee = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: person?.name || "",
    title: person?.title || "",
    age: person?.age || "",
  });

  const url = `http://localhost:3001/persons/`;

  const { data, loading, error: fetchError } = useAxios(url);

  useEffect(() => {
    if (data) {
      setFormData({
        name: data?.name,
        title: data?.title,
        age: data?.age,
      });
    }
  }, [id, data]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchPerson = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:3001/persons/${id}`);
        setPerson(response.data);
      } catch (err) {
        console.error("Error fetching person:", err);
        setError("Failed to fetch person");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  const handleSave = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/persons/${id}`,
        formData
      );
      setPerson(response.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating person:", err);
    }
  };
  if (loading || isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!person) return <div>No person found</div>;
  if (isEditing) {
    return (
      <div>
        <h1>Edit Employee: {id}</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
        </form>

        <button onClick={toggleEditing}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Single Employee: {id}</h1>
      <p>
        <b>Name:</b> {person?.name}
      </p>
      <p>
        <b>Title:</b> {person?.title}
      </p>
      <p>
        <b>Age:</b> {person?.age}
      </p>
      <p>
        <b>Is favorite:</b> {person?.isFavorite ? "Yes" : "No"}
      </p>
      <button onClick={toggleEditing}>Edit</button>
    </div>
  );
};

export default SingleEmployee;
