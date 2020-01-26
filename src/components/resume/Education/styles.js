import styled, { css } from "styled-components"

import undergrad from "./undraw_undergrad.svg"
import grad from "./undraw_grad.svg"

export const StyledEducation = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & > section {
            overflow-y: auto;
            section {
              /* SVG Background */
              position: relative;

              padding-top: calc(200px + 1em);
              @media (min-width: 750px) {
                padding-top: 0;
              }

              &:before {
                content: "";
                background-size: contain;
                background-position: center center;
                background-repeat: no-repeat;

                position: absolute;
                left: 50%;
                transform: translateX(-50%);

                width: 100%;
                height: 200px;

                @media (min-width: 750px) {
                  transform: initial;
                  width: 400px;
                  height: 100%;
                }
              }
            }
            section:nth-child(1) {
              @media (min-width: 750px) {
                padding-right: calc(400px + 1em);
              }
              &:before {
                background-image: url(${grad});
                top: 0;
                @media (min-width: 750px) {
                  left: auto;
                  right: 0;
                }
              }
            }
            section:nth-child(2) {
              @media (min-width: 750px) {
                padding-left: calc(400px + 1em);
              }
              &:before {
                background-image: url(${undergrad});
                top: 0;
                @media (min-width: 750px) {
                  left: 0;
                }
              }
            }
          }
        `
      default:
        return
    }
  }}
`
