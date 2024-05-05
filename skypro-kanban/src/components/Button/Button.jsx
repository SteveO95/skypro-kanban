const Button = ({ link, text, id, className, onClick }) => {
  return (
    <button id={id || ""} className={className || ""} onClick={onClick}>
      <a href={link || "#"}>{text}</a>
    </button>
  );
};

export default Button;
