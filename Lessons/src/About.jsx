import { useNavigate } from "react-router-dom";

import CustomKideImage from "./components/CustomKideImage";
function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="about-page">
      <h1>About Our HR App</h1>
      <p>Hello</p>
      <div style={{ width: "100%", height: "500px" }}>
        <CustomKideImage />
      </div>

      <button onClick={handleNavigate}>Return to Home</button>
    </div>
  );
}

export default About;
