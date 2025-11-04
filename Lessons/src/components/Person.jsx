function Person({ id, name, title, age, isFavorite, onClickHandler }) {
  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <button onClick={() => onClickHandler(id)}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
      {isFavorite && (
        <p>
          <span>❤️</span> Favourite
        </p>
      )}
    </div>
  );
}
export default Person;
