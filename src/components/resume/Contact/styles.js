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
          svg {
            fill: white;
            padding: ${props => props.theme.typography.rhythm(1)};
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
          background-color: #d14836;
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
          background-color: #0077b5;
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
          background-color: #1877f2;
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
          background-color: #e4405f;
        `
      default:
        return
    }
  }};
`
