import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: 0;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          padding-left: calc(50vw - calc(50% + var(--rhythm)));
          padding-right: calc(50vw - calc(50% + var(--rhythm)));

          z-index: 5;

          overflow-x: scroll;

          background-color: rgba(255, 255, 255, 0.95);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
          }

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
            padding: calc(0.5 * var(--rhythm)) var(--rhythm);
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
            box-shadow: none;
            color: ${props => props.theme.typography.options.bodyColor};

            &[aria-current="section"] {
              color: ${props => props.theme.primaryDark};
            }
            &:hover {
              color: ${props => props.theme.primary};
            }
          }
        `
      default:
        return
    }
  }};
`
