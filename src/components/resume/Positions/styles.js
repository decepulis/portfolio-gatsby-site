import styled, { css } from "styled-components"

export const StyledPositions = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css``
      default:
        return
    }
  }}
`

export const StyledPosts = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          article {
            flex: 0 1 300px;
            margin-bottom: ${props => props.theme.typography.rhythm(1)};
          }
        `
      default:
        return
    }
  }}
`
