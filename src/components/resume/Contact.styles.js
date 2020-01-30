import styled, { css } from "styled-components"

export const StyledContactSection = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          background: #eee;
        `
      default:
        return
    }
  }};
`
