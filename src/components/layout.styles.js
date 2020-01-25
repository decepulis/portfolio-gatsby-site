import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

html, body {
  min-width: 300px;
}
${props => {
  switch (props.theme.id) {
    case "1989":
      return css`
        html,
        body {
          margin-left: 8px;
          margin-right: 8px;
        }
      `
    case "2019":
      return css`
        html,
        body {
          font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          color: ${props => props.theme.black1};
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 800;
            letter-spacing: -0.015em;
          }
          scroll-behavior: smooth;
          a:not(.ignore-global-style) {
            color: ${props => props.theme.secondary};
          }
        }
      `
    default:
      return
  }
}};
`

export const StyledHeader = styled.header`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;

          z-index: 5;

          ${props => props.theme.containerCss};

          color: ${props =>
            props.path === "/" ? props.theme.white2 : props.theme.black1};
          && a {
            // using the ol ampersand trick to increase specificity
            color: ${props =>
              props.path === "/" ? props.theme.white1 : props.theme.black1};
            text-decoration: none;
            text-transform: lowercase;
          }

          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            opacity: 0.08;
            background-image: linear-gradient(
              -90deg,
              rgba(255, 255, 255, 0) 0,
              #fff 5%,
              #fff 90%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        `
      default:
        return
    }
  }};
`

export const StyledMain = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css``
      default:
        return
    }
  }};
`
