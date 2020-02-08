import styled, { css } from "styled-components"

import wave from "./wave.svg"

export const StyledAbout = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          color: rgba(255, 255, 255, 0.9);

          /* the about section should virtually extend behind the header
           * so that the background goes back there, and
           * so that anchor scrolling takes us all the way to the top */
          margin-top: -10em;
          padding-top: 10em;

          /* background! */
          &:before {
            content: "";
            position: absolute;

            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);
            height: 100%;
            top: 0;
            z-index: -1;

            background-image: linear-gradient(
              155.89deg,
              ${props => props.theme.primaryDark} 12.21%,
              ${props => props.theme.primary} 99.84%
            );
          }

          /* wave */
          padding-bottom: 70px;
          @media (min-width: 48em) {
            padding-bottom: 140px;
          }
          &:after {
            content: "";

            position: absolute;

            bottom: 0;
            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);

            background-image: url(${wave});
            background-repeat: no-repeat;
            background-position: center;

            background-size: 1000px 100%;
            height: 70px;
            @media (min-width: 48em) {
              background-size: 1920px 100%;
              height: 140px;
            }
            @media (min-width: 1920px) {
              background-size: 100% 100%;
              height: 140px;
            }
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

export const StyledContainer = styled.div`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: grid;

          grid-template-columns: 3fr 1fr;
          grid-template-rows: auto;
          grid-auto-flow: row dense;
          align-items: center;

          grid-template-areas:
            "profile profile"
            "text text";

          --grid-space: ${props => props.theme.typography.rhythm(1)};
          padding: var(--grid-space) 0;
          grid-gap: var(--grid-space);

          @media (min-width: 28em) {
            padding: var(--grid-space);
          }
          @media (min-width: 34em) {
            --grid-space: ${props => props.theme.typography.rhythm(2)};
            grid-template-areas: "text profile";
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
          max-width: 125px;
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

          && a {
            display: block;
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: ${props => props.theme.typography.rhythm(8 / 5)};
            text-decoration: none;
            color: white;
          }
        `
      default:
        return
    }
  }}
`
