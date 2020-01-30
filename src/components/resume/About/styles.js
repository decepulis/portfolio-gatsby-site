import styled, { css } from "styled-components"

import microsensor from "./logo-microsensor.svg"
import bosch from "./logo-bosch.svg"
import uc from "./logo-uc.svg"
import bmw from "./logo-bmw-mask.svg"
import midwest from "./logo-midwest.svg"
import { Link } from "gatsby"

export const StyledSection = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;

          overflow-x: hidden;

          margin-top: -10rem;
          padding-top: 10rem;

          color: rgba(255, 255, 255, 0.9);

          background-image: linear-gradient(
            155.89deg,
            ${props => props.theme.primaryDark} 12.21%,
            ${props => props.theme.primary} 99.84%
          );
        `
      default:
        return
    }
  }};
`

export const StyledHeader = styled.header`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: none;
        `
      default:
        return
    }
  }};
`

export const StyledContainer = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          ${props => props.theme.containerCss};

          display: grid;

          grid-template-columns: 3fr 1fr;
          grid-template-rows: auto;
          grid-auto-flow: row dense;
          align-items: center;

          grid-template-areas:
            "text text"
            "profile profile"
            "companies companies";

          --grid-space: ${props => props.theme.typography.rhythm(2)};
          padding: var(--grid-space) ${props => props.theme.containerPadding};
          grid-gap: var(--grid-space);

          @media (min-width: 34em) {
            padding: var(--grid-space);
            grid-template-areas:
              "text profile"
              "companies companies";
          }
          @media (min-width: 48em) {
            --grid-space: ${props => props.theme.typography.rhythm(3)};
          }
        `
      default:
        return
    }
  }};
`

export const StyledProfile = styled.img`
  width: 200px;
  height: 200px;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          grid-area: profile;

          border-radius: 50%;
          border: 0.5rem solid white;
          width: 100%;
          max-width: 150px;
          height: auto;
          margin: 0 auto;
          box-shadow: ${props => props.theme.boxShadowLg};

          @media (min-width: 34em) {
            max-width: initial;
          }
        `
      default:
        return
    }
  }};
`

export const StyledHeroText = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          grid-area: text;
          text-align: center;
          @media (min-width: 34em) {
            text-align: left;
          }
        `
      default:
        return
    }
  }};
`

export const StyledLead = styled.p`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          ${props => props.theme.typography.scale(1)}
          @media (min-width: 48em) {
            ${props => props.theme.typography.scale(7 / 5)}
          }
          line-height: ${props =>
            props.theme.typography.options.headerLineHeight};
          font-weight: ${props => props.theme.typography.options.headerWeight};
          color: white;
        `
      default:
        return
    }
  }};
`

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

          p {
            color: white;
            ${props => props.theme.typography.scale(2 / 5)}
            line-height: ${props =>
              props.theme.typography.options.headerLineHeight};
            font-weight: ${props =>
              props.theme.typography.options.headerWeight};
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
          display: flex;
          justify-content: space-around;
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

          width: 8em;
          height: 3em;
          flex: 0 0 8em;
          margin: 0 ${props => props.theme.typography.rhythm(0.25)}
            ${props => props.theme.typography.rhythm(0.5)};

          /* Position of Children */
          .mask,
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          }

          /* Establishing Masks */
          @supports (mask-size: contain) {
            .mask {
              mask-repeat: no-repeat;
              mask-position: center center;
              mask-size: contain;

              background-color: rgba(255, 255, 255, 0.8);

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

export const StyledActionButton = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          width: 12em;

          border-radius: ${props => props.theme.cardRadius};
          background-color: ${props => props.theme.primary};
          transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
          box-shadow: ${props => props.theme.boxShadowSm};

          &:hover {
            box-shadow: ${props => props.theme.boxShadow};
            transform: translateY(-0.1em);
          }

          margin: 0 auto;
          @media (min-width: 34em) {
            margin: 0;
          }

          a {
            display: block;
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: ${props => props.theme.typography.rhythm(8 / 5)};
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
          }
        `
      default:
        return
    }
  }}
`

export const StyledWave = styled.div`
  display: none;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: block;

          position: relative;
          width: 102vw;
          left: 50%;
          transform: translateX(-51%);
          overflow: hidden;
          user-select: none;
          height: 70px;
          min-width: 1000px;
          @media (min-width: 48em) {
            height: 140px;
            min-width: 1920px;
          }

          svg {
            position: absolute;
            width: 100%;
            height: 105%;
          }
        `
      default:
        return
    }
  }};
`
