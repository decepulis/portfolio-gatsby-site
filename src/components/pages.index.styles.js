import styled, { css } from "styled-components"
export const StyledMain = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          h2 {
            text-align: center;
            ${props => props.theme.typography.scale(1.25)}
            margin-bottom: ${props => props.theme.typography.rhythm(2)};
            line-height: ${props =>
              props.theme.typography.options.headerLineHeight};
          }
          /* Each section has its own context, and its own big margins */
          & > nav {
            margin-top: ${props => props.theme.typography.rhythm(1)};
            margin-bottom: ${props => props.theme.typography.rhythm(1)};
          }
          & > section {
            padding-top: ${props => props.theme.typography.rhythm(2)};
            padding-bottom: ${props => props.theme.typography.rhythm(2)};
          }
        `
      default:
        return
    }
  }};
`
