import { useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutesList } from "../../AppRoutesList.js";

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

const Header = ({ user }) => {
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
            <Link to={`${AppRoutesList.Card}`}>
              <StyledAddTaskButton text="Создать новую задачу" id="btnMainNew" $width={"178px"} />
            </Link>
            <StyledHeaderUser onClick={toggleUserCard}>{user.name}</StyledHeaderUser>
            {displayUserCard ? (
              <StyledPopUpUser id="user-set-target">
                <StyledPopUpUserName>{user.name}</StyledPopUpUserName>
                <StyledPopUpUserMail>{user.login}</StyledPopUpUserMail>
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
