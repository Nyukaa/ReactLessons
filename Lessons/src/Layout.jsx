import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function Layout({ count, increment, decrement, reset, color }) {
  return (
    <div>
      <Header />
      <main className="main-layout">
        <Outlet /> {/* <-- This renders the child routes */}
      </main>
      <Footer
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        color={color}
      />
    </div>
  );
}

export default Layout;

//if we have import { BrowserRouter, Routes, Route } from "react-router-dom";
// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }
