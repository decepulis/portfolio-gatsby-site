import styled, { css } from "styled-components"

export const StyledContactSection = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          background-color: white;
          padding-top: var(--section-rhythm);
          padding-bottom: var(--section-rhythm);
          border-radius: ${props => props.theme.cardRadius};
          box-shadow: ${props => props.theme.boxShadow};

          &:before {
            content: "";
            position: absolute;
            height: 5px;
            width: 100%;
            top: 0;
            left: 0;
            border-top-left-radius: ${props => props.theme.cardRadius};
            border-top-right-radius: ${props => props.theme.cardRadius};

            background-image: linear-gradient(
              155.89deg,
              ${props => props.theme.tertiary} 12.21%,
              ${props => props.theme.primary} 99.84%
            );
          }
          &:after {
            content: "";
            position: absolute;
            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);

            --bg-height: calc(100% - var(--section-rhythm));

            height: calc(var(--bg-height) + var(--section-rhythm));
            /* 102 kills rounding errors */
            top: calc(102% - var(--bg-height));
            z-index: -1;

            background-image: linear-gradient(
              155.89deg,
              ${props => props.theme.tertiary} 12.21%,
              ${props => props.theme.primary} 99.84%
            );
          }
        `
      default:
        return
    }
  }};
`

export const StyledContactList = styled.ul`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          list-style-type: none;
          display: flex;
          justify-content: center;
          margin: 0;
        `
      default:
        return
    }
  }};
`

const StyledContactListItem = styled.li`
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          margin-bottom: 0;
          &:not(:last-child) {
            margin-right: 1em;
          }

          a {
            height: 3em;
            width: 3em;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: transform 0.2s ease-in-out,
              background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

            background-color: gray;
            box-shadow: ${props => props.theme.boxShadowXs};
            &:hover {
              transform: translateY(-0.1em);
              box-shadow: ${props => props.theme.boxShadowSm};
            }
          }
          svg {
            height: 1.5em;
            fill: white;
          }
        `
      default:
        return
    }
  }};
`
export const StyledEmailItem = styled(StyledContactListItem)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & a {
            box-shadow: none;
            &:hover {
              box-shadow: none;
              background-color: #d14836;
            }
          }
        `
      default:
        return
    }
  }};
`
export const StyledLinkedinItem = styled(StyledContactListItem)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & a:hover {
            background-color: #0077b5;
          }
        `
      default:
        return
    }
  }};
`
export const StyledFacebookItem = styled(StyledContactListItem)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & a:hover {
            background-color: #1877f2;
          }
        `
      default:
        return
    }
  }};
`
export const StyledInstagramItem = styled(StyledContactListItem)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          & a:hover {
            background-color: #e4405f;
          }
        `
      default:
        return
    }
  }};
`
