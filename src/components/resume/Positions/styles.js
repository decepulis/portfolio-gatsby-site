import styled, { css } from "styled-components"

import blob1 from "./2019-blob-1.svg"
import blob2 from "./2019-blob-2.svg"
import blob3 from "./2019-blob-3.svg"

export const StyledPositions = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & > section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            section {
              flex: 1;
              min-width: 300px;
              max-width: 300px;

              background-repeat: no-repeat;
              background-position: center center;
              background-size: contain;

              &:nth-of-type(1) {
                background-image: url(${blob1});
              }
              &:nth-of-type(2) {
                background-image: url(${blob2});
              }
              &:nth-of-type(3) {
                background-image: url(${blob3});
              }
            }
          }
        `
      default:
        return
    }
  }}
`
