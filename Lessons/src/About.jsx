import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="about-page">
      <h1>About Our HR App</h1>
      <p>Hello</p>
      <button onClick={handleNavigate}>Return to Home</button>
    </div>
  );
}

export default About;
