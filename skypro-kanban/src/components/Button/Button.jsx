import { StyledButton } from "./Button.styled";

const Button = ({ link, text, id, className, onClick, ...props }) => {
  return (
    <StyledButton id={id || ""} className={className || ""} onClick={onClick}>
      <a href={link || "#"}>{text}</a>
    </StyledButton>
  );
};

export default Button;
