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
          color: ${props => props.theme.white3};
          position: relative;

          overflow-x: hidden;

          margin-top: -10rem;
          padding-top: 10rem;

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

          grid-template-columns: 1fr 3fr;
          grid-template-rows: auto;
          align-items: center;

          grid-template-areas:
            "profile profile"
            "text text"
            "companies companies";
          grid-gap: 2rem;
          padding: 2em ${props => props.theme.containerPadding};

          @media (min-width: 32em) {
            padding: 3.5em ${props => props.theme.containerPadding};
          }
          @media (min-width: 48em) {
            grid-gap: 3rem;
            grid-template-areas:
              "profile text"
              "companies companies";
          }
          @media (min-width: 60em) {
            padding: 5em ${props => props.theme.containerPadding};
          }
        `
      default:
        return
    }
  }};
`

export const StyledProfile = styled.img`
  width: 300px;
  height: 300px;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          grid-column: profile;

          border-radius: 50%;
          border: 0.5rem solid white;
          width: 100%;
          max-width: 300px;
          height: auto;
          box-shadow: ${props => props.theme.boxShadowLg};
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
          grid-column: text;
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
          font-weight: bolder;
          font-size: 2rem;
          color: ${props => props.theme.white2};
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

          grid-column: companies;

          p {
            font-size: 1.5rem;
            font-weight: bolder;
            color: ${props => props.theme.white1};
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
          // display: grid;
          // grid-template-columns: repeat(auto-fit, minmax(8em, 1fr));
          // grid-row-gap: 1.5em;
          // justify-items: center;
          // align-items: center;

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
          // Size In Gric
          position: relative;

          width: 8em;
          height: 3em;
          flex: 0 0 8em;
          margin: 0 0.75em 1.5em;

          // Position of Children
          .mask,
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            margin-bottom: 1em;
          }

          // Establishing Masks
          @supports (mask-size: contain) {
            .mask {
              mask-repeat: no-repeat;
              mask-position: center center;
              mask-size: contain;

              background-color: ${props => props.theme.white3};

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
            height: 100%;
          }
        `
      default:
        return
    }
  }};
`
