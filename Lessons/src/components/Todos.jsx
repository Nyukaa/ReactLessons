import axios from "axios";
import { useEffect, useState } from "react";
function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      //or we can use 2 useeffect one for todos one for users
      //or we can use axios.all
      try {
        const [todosRes, usersRes] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/todos"),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);

        setTodos(todosRes.data);
        setUsers(usersRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> — User{" "}
            {users.find((user) => user.id === todo.userId)?.name}
            {todo.completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
