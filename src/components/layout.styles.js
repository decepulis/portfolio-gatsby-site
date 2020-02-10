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
          display: grid;
          grid-template-columns: 2fr 1fr;
          @media (min-width: 30rem) {
            grid-template-columns: 3fr 1fr;
          }
          grid-space: ${props => props.theme.typography.rhythm(1)};
          padding: ${props => props.theme.typography.rhythm(1)} 0;

          z-index: 5;

          color: ${props =>
            props.path === "/"
              ? "rgba(255, 255, 255, 0.9)"
              : props.theme.typography.options.bodyColor};

          && h1 {
            /* using the ol ampersand trick to increase specificity */
            white-space: nowrap;
            margin-bottom: 0;
            @media (max-width: 30rem) {
              font-size: 1.4em;
            }

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
        return css``
      default:
        return
    }
  }};
`
