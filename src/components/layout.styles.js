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
            --scroll-behavior: auto;
          }

          --rhythm: ${props => props.theme.typography.rhythm(1)};

          a {
            text-decoration: none;
            color: inherit;
            box-shadow: inset 0 -0.25em 0 -1px ${props => props.theme.primary}88;

            transition: color 0.1s 0s ease-in-out,
              box-shadow 0.1s 0s ease-in-out;

            &:hover {
              box-shadow: inset 0 calc(-1em - 2px) 0 -1px ${props => props.theme.primary}55;
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
          padding: 0 var(--rhythm);
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
          grid-space: var(--rhythm);
          padding: var(--rhythm) 0;
          margin-bottom: ${props =>
            props.path !== "/" ? "var(--rhythm)" : null};

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
              text-transform: lowercase;

              ${props =>
                props.path === "/" &&
                css`
                  color: white;
                  box-shadow: inset 0 -0.25em 0 -1px
                    ${props => props.theme.primary};
                  &:hover {
                    box-shadow: inset 0 calc(-1em - 2px) 0 -1px ${props => props.theme.primary};
                  }
                `};
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
