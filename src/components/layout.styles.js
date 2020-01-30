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
    case "2019":
      return css`
        html,
        body {
          ${"" /* scroll-behavior: smooth; */}
          --scroll-behavior: smooth;
          @media (prefers-reduced-motion: reduce) {
            html {
              --scroll-behavior: auto;
            }
          }

          a:not(.ignore-global-style) {
            color: ${props => props.theme.secondary};
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
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
            props.path === "/"
              ? "rgba(255, 255, 255, 0.9)"
              : props.theme.typography.options.bodyColor};

          && h1 {
            /* using the ol ampersand trick to increase specificity */
            margin: ${props.theme.typography.rhythm(1)} 0;
            margin-right: ${props.theme.typography.rhythm(1)};
            a {
              color: ${props =>
                props.path === "/"
                  ? "white"
                  : props.theme.typography.options.headerColor};
              text-decoration: none;
              text-transform: lowercase;
            }
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

export const StyledSelect = styled.select`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          text-align: right;
          max-width: 33%;
        `
      default:
        return
    }
  }};
`

export const JustAStyledContainer = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          ${props => props.theme.containerCss}
        `
      default:
        return
    }
  }};
`
