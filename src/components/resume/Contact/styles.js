import styled, { css } from "styled-components"

export const StyledContactSection = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          &:before {
            content: "";
            position: absolute;
            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);
            height: 100%;
            top: 0;
            z-index: -1;

            background: #eee;
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
            box-shadow: ${props => props.theme.boxShadow};
            &:hover {
              transform: translateY(-0.1em);
              box-shadow: ${props => props.theme.boxShadowLg};
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
          & a:hover {
            background-color: #d14836;
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
