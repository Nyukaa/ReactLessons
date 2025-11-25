import "../App.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Person = ({
  id,
  name,
  title,
  age,
  isFavorite,
  onClickHandler,
  onDeleteHandler,
}) => {
  const navigate = useNavigate();

  console.log("id:", id, "type:", typeof id); // ✅ log id type
  console.log("name:", name, "type:", typeof name); // ✅ log name type

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
};
Person.propTypes = {
  //id: PropTypes.string.isRequired || PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};
export default Person;
