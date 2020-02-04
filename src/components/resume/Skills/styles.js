import styled, { css } from "styled-components"

import blob1 from "./2019-blob-1.svg"
import blob2 from "./2019-blob-2.svg"
import blob3 from "./2019-blob-3.svg"

export const StyledPosts = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          article {
            dl {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              grid-gap: ${({ theme }) => theme.typography.rhythm(1)};

              dd {
                display: inline-block;
                margin-bottom: 0;
                &:not(:last-of-type):after {
                  content: ", ";
                  white-space: pre;
                }
              }
            }

            /* background-repeat: no-repeat;
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
            } */
          }
        `
      default:
        return
    }
  }}
`
