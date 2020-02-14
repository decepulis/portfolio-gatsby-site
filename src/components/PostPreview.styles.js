import styled, { css } from "styled-components"
import Img from "gatsby-image"

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

export const StyledImg = styled(Img)`
  width: 200px;
  height: 200px;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css``
      default:
        return
    }
  }};
`
