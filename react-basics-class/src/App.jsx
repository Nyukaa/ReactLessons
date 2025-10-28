import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // const [string, setString] = useState("something");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
