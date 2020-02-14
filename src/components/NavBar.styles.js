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
          padding-left: calc(
            50vw - calc(50% + ${props => props.theme.typography.rhythm(1)})
          );
          padding-right: calc(
            50vw - calc(50% + ${props => props.theme.typography.rhythm(1)})
          );

          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            opacity: 0.08;
            background-image: linear-gradient(
              -90deg,
              rgba(0, 0, 0, 0) 0,
              #000 5%,
              #000 90%,
              rgba(0, 0, 0, 0) 100%
            );
          }

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
            box-shadow: none;
            color: ${props => props.theme.typography.options.bodyColor};

            &[aria-current="section"],
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
