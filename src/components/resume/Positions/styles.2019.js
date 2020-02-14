import styled, { css } from "styled-components"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw-mask.svg"
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

          h2 {
            font-size: 1.31951rem;
          }
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: var(--rhythm);
          @media (min-width: 36rem) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          justify-items: center;
          align-items: center;
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

          width: 7em;
          height: 2.5em;

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
            }

            // Hover Animation
            img,
            .mask {
              transition: opacity 0.2s ease-in-out;
            }

            img {
              opacity: 0;
            }

            box-shadow: none;
            &:hover {
              box-shadow: none;
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
