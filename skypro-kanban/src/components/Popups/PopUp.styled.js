import { styled } from "styled-components";
import { topicStyles } from "../../data";

export const StyledPopUp = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const StyledPopUpExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const StyledPopUpBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const StyledPopUpContent = styled.div`
  display: block;
  text-align: left;
`;

export const StyledPopUpTitle = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const StyledPopUpClose = styled.div`
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
`;

export const StyledPopUpWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledPopUpForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const StyledPopUpFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPopUpSubtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StyledPopUpInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const StyledPopUpFormInput = styled(StyledPopUpInput)`
  margin: 20px 0;
`;

export const StyledPopUpFormTextarea = styled(StyledPopUpInput).attrs({ as: "textarea" })`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
`;

export const StyledPopUpCategories = styled.div`
  margin-bottom: 20px;
`;

export const StyledPopUpCategoriesSubtitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StyledPopUpCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const StyledCategoriesThemeInput = styled.input`
  display: none;
`;

export const StyledCategoriesTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 0.4;
  cursor: pointer;
  color: ${(props) => topicStyles[props.$colorName]["color"] || topicStyles["gray"]["color"]};
  background-color: ${(props) =>
    topicStyles[props.$colorName]["backgroundColor"] || topicStyles["gray"]["backgroundColor"]};

  ${StyledCategoriesThemeInput}:checked + & {
    opacity: 1 !important;
  }
`;
