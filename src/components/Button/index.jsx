export function Button({ text, action, type = "submit" }) {
  return (
    <button type={type} onClick={action}>
      {text}
    </button>
  );
}
