import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";
import PersonsPage from "./PersonsPage.jsx";
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
        { path: "/personsPage", element: <PersonsPage /> },
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

//My version
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Person from "./components/Person";
// import Counter from "./components/Counter";
// import CardForm from "./components/CardForm";
// import "./App.css";
// import useCounter from "./hooks/useCounter";
// import { useState } from "react";
// import data from "./data";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Home";
//import About from "./About";

// function App() {
//   const [persons, setPersons] = useState(data);
//   const { count, increment, decrement, reset, color } = useCounter();

//   const addPerson = (newPerson) => {
//     setPersons([...persons, newPerson]);
//   };
//  <BrowserRouter>
//    <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/about" element={<About />} />
//    </Routes>
//  </BrowserRouter>;
//   const handleClick = () => {
//     setPersons([
//       ...persons,
//       {
//         id: persons.length + 1,
//         name: "Mari",
//         title: "Queen",
//         age: 37,
//         isFavorite: true,
//       },
//     ]);
//   };

//   const toggleFavorite = (id) => {
//     const updatedPersons = persons.map((person) =>
//       person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
//     );

//     setPersons(updatedPersons);
//   };

//   return (
//     <div className="app">
//       <Header />

//       <CardForm addPerson={addPerson} />

//       <main className="main-content">
//         {persons.map((person) => (
//           <Person key={person.id} {...person} onClickHandler={toggleFavorite} />
//         ))}

//         <button onClick={handleClick}>Add Person</button>

//         <Counter
//           count={count}
//           increment={increment}
//           decrement={decrement}
//           reset={reset}
//           color={color}
//         />
//       </main>

//       <Footer
//         count={count}
//         increment={increment}
//         decrement={decrement}
//         reset={reset}
//         color={color}
//       />
//     </div>
//   );
// }

// export default App;
