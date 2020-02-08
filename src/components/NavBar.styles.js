import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: ${props => props.theme.typography.rhythm(1 / 2)};
          z-index: 5;

          margin: 0 calc(-1 * ${props => props.theme.typography.rhythm(1)});

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
        `
      default:
        return
    }
  }};
`
export const StyledNavLink = styled.a`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          font-size: 1.1em;
          text-decoration: none;
          && {
            transition: color 0.2s ease;
            color: ${props =>
              props.active
                ? props.theme.primary
                : props.theme.typography.options.bodyColor};
          }
        `
      default:
        return
    }
  }};
`
