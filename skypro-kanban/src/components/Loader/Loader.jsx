import { StyledMain } from "../Main/Main.styled";
import { StyledContainer } from "../Container/Container.styled";
import { StyledLoaderContainer, StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledLoaderContainer>
          <StyledLoader />
          <h1>Данные загружаются...</h1>
        </StyledLoaderContainer>
      </StyledContainer>
    </StyledMain>
  );
};

export default Loader;
