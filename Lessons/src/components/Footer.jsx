//import useCounter from "..hooks/useCounter";
import Counter from "./Counter";
import Typography from "@mui/material/Typography";
function Footer({ count, increment, decrement, reset, color }) {
  return (
    <footer className="footer">
      <Typography variant="body3" color="textSecondary" align="center">
        <p> © 2025 WP25K</p>
      </Typography>

      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        color="white"
      />
    </footer>
  );
}
export default Footer;
