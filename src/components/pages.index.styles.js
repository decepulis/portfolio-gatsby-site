import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: ${props => props.theme.typography.rhythm(1 / 2)};
          z-index: 5;

          max-width: calc(
            ${props => props.theme.containerWidth} +
              calc(2 * ${props => props.theme.containerPadding})
          );
          margin: 0 auto;

          border-radius: ${props => props.theme.cardRadius};
          box-shadow: ${props => props.theme.boxShadow};
          overflow-x: scroll;
          background-color: white;

          scrollbar-width: thin;
        `
      default:
        return
    }
  }};
`

export const StyledNavList = styled.ul`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: flex;
          justify-content: space-between;
          align-items: center;

          list-style-type: none;
          margin: 0;
          li {
            margin: 0;
            padding: ${props => props.theme.typography.rhythm(1 / 2)}
              ${props => props.theme.typography.rhythm(1)};
          }

          && a {
            font-size: 1.1em;
            text-decoration: none;
            color: ${props => props.theme.typography.options.bodyColor};
            &.active {
              color: ${props => props.theme.primary};
            }
          }
        `
      default:
        return
    }
  }};
`

export const StyledArticle = styled.article`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          h2 {
            text-align: center;
            ${props => props.theme.typography.scale(1.25)}
            margin-bottom: ${props => props.theme.typography.rhythm(2.5)};
            line-height: ${props =>
              props.theme.typography.options.headerLineHeight};
          }
          /* Each section has its own context, and its own big margins */
          & > section {
            padding-top: ${props => props.theme.typography.rhythm(2.5)};
            padding-bottom: ${props => props.theme.typography.rhythm(2.5)};
          }
        `
      default:
        return
    }
  }};
`
