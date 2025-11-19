import "../App.css";
import { useNavigate } from "react-router-dom";
function Person({
  id,
  name,
  title,
  age,
  isFavorite,
  onClickHandler,
  onDeleteHandler,
}) {
  const navigate = useNavigate();
  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <button onClick={() => onDeleteHandler(id)}>Delete Person</button>
      <button onClick={() => onClickHandler(id)}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
      {isFavorite && (
        <p>
          <span>❤️</span> Favourite
        </p>
      )}
      <button onClick={() => navigate(`/employee/${id}`)}>nav</button>
    </div>
  );
}
export default Person;
