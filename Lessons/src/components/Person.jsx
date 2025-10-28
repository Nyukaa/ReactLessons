function Person({ name, title, animal, salary, phone, email }) {
  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Animal:</b> {animal}
      </p>
      {/* <p>
        <b>Salary:</b> ${salary}
      </p>
      <p>
        <b>Phone:</b> {phone}
      </p>
      <p>
        <b>Email:</b> {email}
      </p> */}
    </div>
  );
}
export default Person;
