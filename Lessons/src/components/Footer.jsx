//import useCounter from "..hooks/useCounter";
import Counter from "./Counter";
function Footer({ count, increment, decrement, reset, color }) {
  return (
    <footer className="footer">
      <p>© 2025 WP25K</p>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        color={color}
      />
    </footer>
  );
}
export default Footer;
