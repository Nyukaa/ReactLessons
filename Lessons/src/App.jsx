import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";
import useCounter from "./hooks/useCounter";
import Todos from "./components/Todos.jsx";
import SingleEmployee from "./components/SingleEmployee.jsx";
function App() {
  const { count, increment, decrement, reset, color } = useCounter();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          color={color}
        />
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/todos", element: <Todos /> },
        { path: "/employee/:id", element: <SingleEmployee /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />

    // {/* //   <BrowserRouter>
    // //     <Routes>
    // //       <Route path="/" element={<Home />} />
    // //       <Route path="/about" element={<About />} />
    // //     </Routes>
    // //   </BrowserRouter>
    // // ); */}
  );
}
export default App;
