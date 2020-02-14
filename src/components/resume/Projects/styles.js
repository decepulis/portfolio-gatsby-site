import styled, { css } from "styled-components"

import pattern from "./circuit-board.svg"
import t1 from "./t1.svg"
import t2 from "./t2.svg"
import { Link } from "gatsby"

export const StyledProjects = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          color: white;

          /* Some padding to maintain vertical section rhythm */
          padding-top: var(--section-rhythm);
          padding-bottom: var(--section-rhythm);

          /* Place cards above backdrop */
          & > * {
            position: relative;
            z-index: 1;
          }

          /* background color */
          &:before {
            content: "";

            position: absolute;
            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);

            height: 100%;
            top: 0;

            z-index: -1;

            background: #4e025a;
            background-image: url(${pattern}),
              linear-gradient(
                155.89deg,
                rgba(3, 6, 36, 0.7) 12.21%,
                rgba(3, 6, 36, 0.4) 50%,
                rgba(3, 6, 36, 0) 99.84%
              );
          }

          /* background diagonals */
          --d-height: 4vw;
          @media (min-width: 60em) {
            --d-height: 2vw;
          }
          &:after {
            content: "";
            background-image: url(${t1}), url(${t2});
            background-position: center top, center bottom;
            background-repeat: no-repeat;
            background-size: 100% var(--d-height);
            position: absolute;

            height: calc(100% + 2px);
            top: -1px;
            left: calc(-50vw + 50%);
            right: calc(-50vw + 50%);
          }
        `

      default:
        return
    }
  }}
`

export const StyledProjectPosts = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 2em;
          margin-bottom: ${props => props.theme.typography.rhythm(1)};

          article {
            color: ${props => props.theme.typography.options.bodyColor};
            border-radius: ${props => props.theme.cardRadius};
            box-shadow: ${props => props.theme.boxShadowLg};
            background-color: white;
            padding: ${props => props.theme.typography.rhythm(1)};

            & > p:last-of-type {
              margin: 0;
            }

            .gatsby-image-wrapper {
              background-color: rgba(7, 96, 115, 0.14);
              background-clip: padding-box;
              margin: 0 calc(-1 * ${props => props.theme.typography.rhythm(1)})
                ${props => props.theme.typography.rhythm(1)};
              width: calc(100% + ${props => props.theme.typography.rhythm(2)});
              height: 250px;
              border-top: 1px solid rgba(7, 96, 115, 0.14);
              border-bottom: 1px solid rgba(7, 96, 115, 0.14);
            }
          }
        `
      default:
        return
    }
  }}
`

export const StyledLink = styled(Link)`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          && {
            color: white;
            box-shadow: inset 0 -0.25em 0 -1px ${props => props.theme.primary};
            &:hover {
              box-shadow: inset 0 calc(-1em - 2px) 0 -1px ${props => props.theme.primary};
            }
          }
        `
      default:
        return
    }
  }}
`
