import styled, { css } from "styled-components"

export const StyledArticle = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          ${props => props.theme.containerCss}
        `
      default:
        return
    }
  }};
`
