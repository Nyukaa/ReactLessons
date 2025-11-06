//Martins version

import styles from "./CardForm_M.module.css";

function CardForm_M({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();

    setFormData({
      firstName: "",
      lastName: "",
      title: "",
      age: "",
    });
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="firstName" className={styles.label}>
          First Name:
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label htmlFor="lastName" className={styles.label}>
          Last Name:
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="title" className={styles.label}>
          Title:
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="age" className={styles.label}>
          Age:
          <input
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <button className={styles.btn} type="submit">
          Add new person{" "}
        </button>
      </form>

      <div className={styles.output}>
        <p>Your first name is: {formData.firstName || "—"}</p>
        <p>Your last name is: {formData.lastName || "—"}</p>
        <p>Your title is: {formData.title || "—"}</p>
        <p>Your age is: {formData.age || "—"}</p>
      </div>
    </div>
  );
}

export default CardForm_M;
