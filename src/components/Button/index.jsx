export function Button({ text, action, type = "submit", className }) {
  return (
    <button
      aria-label={text}
      type={type}
      onClick={action}
      className={className}
    >
      {text}
    </button>
  );
}
