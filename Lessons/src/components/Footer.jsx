//import useCounter from "..hooks/useCounter";
import Counter from "./Counter";
function Footer({ count, setCount }) {
  return (
    <footer className="footer">
      <p>© 2025 WP25K</p>
      <Counter count={count} setCount={setCount} />
    </footer>
  );
}
export default Footer;
