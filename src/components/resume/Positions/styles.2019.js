import styled, { css } from "styled-components"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw-mask.svg"
import midwest from "./logo-midwest.svg"
import { Link } from "gatsby"

export const StyledCompanies = styled.div`
  display: none;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: initial;
          text-align: center;
          max-width: 100%;

          grid-area: companies;
        `
      default:
        return
    }
  }}
`
export const StyledLogos = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `
      default:
        return
    }
  }}
`

export const StyledLogoContainerLink = styled(Link)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          /* Size In Grid */
          position: relative;

          margin: 0 ${props => props.theme.typography.rhythm(0.25)}
            ${props => props.theme.typography.rhythm(1)};
          width: 7em;
          height: 2.5em;
          flex: 0 0 7em;

          /* Position of Children */
          .mask,
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            margin-bottom: 0;
          }

          /* Establishing Masks */
          @supports (mask-size: contain) {
            .mask {
              mask-repeat: no-repeat;
              mask-position: center center;
              mask-size: contain;

              background-color: rgba(14, 30, 37, 0.66);
              &.microsensor {
                mask-image: url(${microsensor});
              }
              &.uc {
                mask-image: url(${uc});
              }
              &.bosch {
                mask-image: url(${bosch});
              }
              &.bmw {
                mask-image: url(${bmw});
              }
              &.midwest {
                mask-image: url(${midwest});
              }
            }

            // Hover Animation
            img,
            .mask {
              transition: opacity 0.2s ease-in-out;
            }

            img {
              opacity: 0;
            }

            &:hover {
              img {
                opacity: 1;
              }
              .mask {
                opacity: 0;
              }
            }
          }
        `
      default:
        return
    }
  }}
`
