import styled, { css } from "styled-components"

export const StyledSection = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          color: ${props => props.theme.white3};
          position: relative;

          // wave padding
          padding-bottom: 2.618rem;
          @media (min-width: 32em) {
            padding-bottom: 4.236em;
          }
          @media (min-width: 60em) {
            padding-bottom: 6.854em;
          }

          // background
          &:before {
            content: "";
            position: absolute;

            top: -10rem;
            left: -${props => props.theme.containerPadding};
            right: -${props => props.theme.containerPadding};
            @media (min-width: ${props => props.theme.containerWidth}) {
              left: calc(
                -50vw + ${props => props.theme.containerHalfWidthMinusPadding}
              );
              right: calc(
                -50vw + ${props => props.theme.containerHalfWidthMinusPadding}
              );
            }
            bottom: 0;
            z-index: -1;
            background: linear-gradient(
              155.89deg,
              ${props => props.theme.primaryDark} 12.21%,
              ${props => props.theme.primary} 99.84%
            );
          }
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
          display: grid;
          grid-template-columns: 1fr 3fr;
          grid-gap: 3rem;
          align-items: center;

          padding: 2em 0;
          @media (min-width: 32em) {
            padding: 3.5em 0;
          }
          @media (min-width: 60em) {
            padding: 5em 0;
          }
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

export const StyledProfile = styled.img`
  width: 300px;
  height: 300px;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          border-radius: ${props => props.theme.cardRadius};
          border: 0.5rem solid white;
          width: 100%;
          height: auto;
          box-shadow: ${props => props.theme.boxShadowLg};
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
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;

          background-color: white;

          img {
            padding: 1rem;
            height: 100px;
          }
        `
      default:
        return
    }
  }}
`

export const StyledWave = styled.svg`
  display: none;

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: initial;
          position: absolute;
          left: -${props => props.theme.containerPadding};
          right: -${props => props.theme.containerPadding};
          @media (min-width: ${props => props.theme.containerWidth}) {
            left: calc(
              -50vw + ${props => props.theme.containerHalfWidthMinusPadding}
            );
            right: calc(
              -50vw + ${props => props.theme.containerHalfWidthMinusPadding}
            );
          }
          bottom: -1em;
        `
      default:
        return
    }
  }};
`
