import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main-layout">
        <Outlet /> {/* <-- This renders the child routes */}
      </main>
      <Footer />
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
