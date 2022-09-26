import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    font-family: ${(props) => props.theme.font.family};
    font-size: 0.73rem;
    @media screen and (max-width: 400px){
        font-size: 2.6vw;
    }
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  transition: background-color 140ms ease-in;
  transition: color 140ms ease-in;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
    background-color: ${(props) => props.theme.colors.bg600};
}

body {
    display: grid;
    place-items: center;
}

`;

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg400};
  max-width: 45rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  @media screen and (max-width: 500px) {
    min-height: 100vh;
  }
`;

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0 2.5rem;
  padding-top: 2.5rem;
`;

const HeaderTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.wrd800};
`;

const HeaderCount = styled.div`
  margin-right: auto;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.1rem 0.6rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.acc900};
  color: ${(props) => props.theme.colors.bg400};
`;

const HeaderButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-weight: 600;
  color: ${(props) => props.theme.colors.wrd600};
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.acc900};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 3rem;
  overflow: hidden;
  padding: 2rem;
`;

const ThemeButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-left: auto;

  cursor: pointer;

  font-weight: 800;
  color: ${(props) => props.theme.colors.bg400};
  background-color: ${(props) => props.theme.colors.acc900};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
    background-color: ${(props) => props.theme.colors.bg400};
  }
`;

const AppFooter = styled.footer`
  padding: 2rem;
  padding-top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export {
  AppFooter,
  ThemeButton,
  HeaderCount,
  AppWrapper,
  AppHeader,
  HeaderTitle,
  HeaderButton,
  AppMain,
};

export default GlobalStyle;
