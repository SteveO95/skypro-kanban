import {
  StyledWrapper,
  StyledContainer,
  StyledModal,
  StyledModalBlock,
  StyledModalTitle,
  StyledModalFormLogin,
  StyledModalFormGroup,
} from "./Standalones.styled";
import { Link } from "react-router-dom";
import { AppRoutesList } from "../../AppRoutesList";

const StandaloneNotFound = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h1>404 Не найдено</h1>
            </StyledModalTitle>
            <StyledModalFormGroup>
              <p>Запрошенная страница не найдена</p>
              <Link to={AppRoutesList.Main}>Перейти на главную</Link>
            </StyledModalFormGroup>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default StandaloneNotFound;
