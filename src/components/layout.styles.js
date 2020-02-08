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
          --scroll-behavior: smooth;
          scroll-behavior: ${props =>
            props.isChrome ? "auto" : "var(--scroll-behavior)"};

          @media (prefers-reduced-motion: reduce) {
            html {
              --scroll-behavior: auto;
            }
          }

          a {
            text-decoration: none;
            color: ${props => props.theme.secondary};
            transition: color 0.1s ease-in-out;
            &:hover {
              color: ${props => props.theme.primaryDark};
            }
          }
        }
      `
    default:
      return
  }
}};
`

export const StyledLayout = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          max-width: ${props => (props.path === "/" ? "60em" : "40em")};
          margin: 0 auto;
          padding: 0 ${props => props.theme.typography.rhythm(1)};
        `
      default:
        return
    }
  }}
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
