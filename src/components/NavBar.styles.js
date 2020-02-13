import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: 0;
          z-index: 5;

          /* Fill navbar into l/r padding */
          margin: 0 calc(-1 * ${props => props.theme.typography.rhythm(1)});

          overflow-x: scroll;

          border-bottom: 1px solid rgba(7, 96, 115, 0.07);
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);

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
            box-shadow: none;
            transition: color 0.2s ease;
            color: ${props =>
              props.active
                ? props.theme.primary
                : props.theme.typography.options.bodyColor};

            &:hover {
              box-shadow: none;
              color: ${props => props.theme.primaryDark};
            }
          }
        `
      default:
        return
    }
  }};
`
