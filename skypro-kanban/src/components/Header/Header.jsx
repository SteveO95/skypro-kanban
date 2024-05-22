import { useState } from "react";
import {
  StyledHeader,
  StyledHeaderBlock,
  StyledHeaderLogo,
  StyledNav,
  StyledAddTaskButton,
  StyledHeaderUser,
  StyledPopUpUser,
  StyledPopUpUserName,
  StyledPopUpUserMail,
  StyledHeaderTheme,
} from "./Header.styled.js";
import { StyledContainer } from "../Container/Container.styled.js";
import { StyledButton } from "../Button/Button.styled.js";
import { Link } from "react-router-dom";

const Header = ({ addCard }) => {
  const [displayUserCard, setDisplayUserCard] = useState(false);

  const toggleUserCard = () => {
    setDisplayUserCard((previousState) => !previousState);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledHeaderBlock>
          <StyledHeaderLogo>
            <a>
              <img src="/logo.png" alt="logo" />
              {/* "/logo_dark.png" */}
            </a>
          </StyledHeaderLogo>
          <StyledNav>
            <StyledAddTaskButton onClick={addCard} text="Создать новую задачу" id="btnMainNew" $width={"178px"} />
            <StyledHeaderUser onClick={toggleUserCard}>Ivan Ivanov</StyledHeaderUser>
            {displayUserCard ? (
              <StyledPopUpUser id="user-set-target">
                {/* <!-- <a href="">x</a> --> */}
                <StyledPopUpUserName>Ivan Ivanov</StyledPopUpUserName>
                <StyledPopUpUserMail>ivan.ivanov@gmail.com</StyledPopUpUserMail>
                <StyledHeaderTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </StyledHeaderTheme>
                <Link to={"/exit"}>
                  <StyledButton $inverted $width={"72px"}>
                    Выйти
                  </StyledButton>
                </Link>
              </StyledPopUpUser>
            ) : (
              ""
            )}
          </StyledNav>
        </StyledHeaderBlock>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
