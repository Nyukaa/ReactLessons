import { useNavigate } from "react-router-dom";

const Button = ({ buttonText, setString, string, ariaLabel, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (setString) setString(string); // обновляем текст, если есть setString
    if (navigateTo) navigate(navigateTo); // переходим, если есть navigateTo
  };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "16px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
