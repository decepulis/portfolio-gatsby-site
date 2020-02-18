import styled, { css } from "styled-components"
import Img from "gatsby-image"

export const StyledPostPreview = styled.article`
  ul.tag-list {
    list-style-type: none;
    padding-left: 0;

    &:before {
      content: "Tags: ";
    }

    li {
      display: inline;

      text-transform: capitalize;

      &:not(:last-of-type):after {
        content: ", ";
        white-space: pre-line;
      }
    }
  }
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
  width: 320px;
  height: 240px;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css``
      default:
        return
    }
  }};
`
