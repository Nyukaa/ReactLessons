const CustomButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
