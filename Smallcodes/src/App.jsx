import ToggleButton from "./components/ToggleButton";
import CountText from "./components/CountText";
import Todo from "./components/Todo";
import Count from "./components/Count";
import Loading from "./components/Loading";
import Filter from "./components/Filter";
import NameValidation from "./components/NameValidation";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="frame">
        <Loading />
      </div>

      <div className="frame">
        <ToggleButton />
      </div>

      <div className="frame">
        <CountText />
      </div>

      <div className="frame">
        <Todo />
      </div>

      <div className="frame">
        <Count />
      </div>

      <div className="frame">
        <Filter />
      </div>

      <div className="frame">
        <NameValidation />
      </div>
    </div>
  );
}

export default App;
