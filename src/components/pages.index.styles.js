import styled, { css } from "styled-components"

export const StyledNavbar = styled.nav`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: sticky;
          top: 0;
          z-index: 5;

          margin: 0 -1rem;
          padding: 0 1rem;

          border-radius: ${props => props.theme.cardRadius};
          background-color: ${props => props.theme.white1};
          box-shadow: ${props => props.theme.boxShadow};
          overflow-x: scroll;
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
          padding: 0;

          li {
            padding: 0 1em;
          }

          a {
            text-decoration: none;
            color: black;
          }
        `
      default:
        return
    }
  }};
`