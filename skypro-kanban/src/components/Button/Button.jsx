import { StyledButton } from "./Button.styled";

const Button = ({ link, text, id, className, onClick, ...props }) => {
  return (
    <StyledButton id={id || ""} className={className || ""} onClick={onClick} {...props}>
      {link ? <a href={link}>{text}</a> : text}
    </StyledButton>
  );
};

export default Button;
