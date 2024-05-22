import { StyledMain } from "../Main/Main.styled";
import { StyledContainer } from "../Container/Container.styled";
import { StyledLoaderContainer, StyledLoader, StyledLoaderError } from "./Loader.styled";

const Loader = ({ errorMessage }) => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledLoaderContainer>
          {!errorMessage ? (
            <>
              <StyledLoader />
              <h1>Данные загружаются...</h1>
            </>
          ) : (
            <>
              <StyledLoaderError />
              <h1>{errorMessage}</h1>
            </>
          )}
        </StyledLoaderContainer>
      </StyledContainer>
    </StyledMain>
  );
};

export default Loader;
