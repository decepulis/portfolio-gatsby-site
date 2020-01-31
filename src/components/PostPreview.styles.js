import styled, { css } from "styled-components"

export const StyledPostPreview = styled.article`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          header {
            p:not(:last-of-type) {
              margin: 0;
            }
          }
        `
      default:
        return
    }
  }};
`
