import styled, { css } from "styled-components"

export const StyledLayout = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ${props => {
    switch (props.theme.id) {
      case "1989":
        return css`
          margin-left: 8px;
          margin-right: 8px;
        `
      case "2019":
        return css`
          font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          color: ${props => props.theme.black1};
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 800;
          }
        `
      default:
        return
    }
  }};
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

          ${props => props.theme.containerCss};

          color: ${props => props.theme.white2};
          a {
            color: ${props => props.theme.white1};
            text-decoration: none;
            text-transform: lowercase;
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

export const StyledMain = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css``
      default:
        return
    }
  }};
`
