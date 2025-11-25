import { Link } from "react-router-dom";
import "./Header.module.css";
import App from "../App";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function Header() {
  // return (
  //   <header className="header">
  //     <h1>Lessons</h1>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/todos">Todos</Link>
  //     </nav>
  //   </header>
  // );
  // MUI version
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/todos">
            Todos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
