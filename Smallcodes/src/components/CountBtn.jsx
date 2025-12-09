export default function CountBtn({ onClick, text, counter }) {
  return (
    <div>
      <div> {counter} </div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
}
