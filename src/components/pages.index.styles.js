import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: ${props => props.theme.typography.rhythm(1 / 2)};
          z-index: 5;

          margin: 0 -${props.theme.containerPadding};
          padding: 0 ${props.theme.containerPadding};

          border-radius: ${props => props.theme.cardRadius};
          box-shadow: ${props => props.theme.boxShadow};
          overflow-x: scroll;
          background-color: white;
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
          ${props => props.theme.containerCss};
          h2 {
            text-align: center;
            ${props => props.theme.typography.scale(1.25)}
            margin-bottom: ${props => props.theme.typography.rhythm(2.5)};
            line-height: ${props =>
              props.theme.typography.options.headerLineHeight};
          }
          & > section {
            overflow-y: auto;
            margin: ${props => props.theme.typography.rhythm(2.5)} 0;
          }
        `
      default:
        return
    }
  }};
`
