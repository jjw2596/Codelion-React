import { createGlobalStyle } from "styled-components";//전역에 일관성 있는 스타일 적용

//yarn add styled-reset
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "white",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
