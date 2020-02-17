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
          padding: var(--section-rhythm) var(--rhythm);

          margin: 0 calc(-50vw + 50%);

          /* Place cards above backdrop */
          & > * {
            position: relative;
            z-index: 1;
          }

          /* background color */
          &:before {
            content: "";

            position: absolute;
            left: 0;
            right: 0;

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
            left: 0;
            right: 0;
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
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          margin: 0 calc(-1 * var(--rhythm)) var(--rhythm);
          padding-top: 0.2rem; /* some room for cards to hover into */

          display: grid;
          column-gap: var(--rhythm);

          --card-width: calc(90vw - calc(2 * var(--rhythm)));
          @media (min-width: 560px) {
            --card-width: calc(504px - calc(2 * var(--rhythm)));
          }
          grid-template-columns:
            1px
            repeat(9, var(--card-width))
            1px;

          &:before,
          &:after {
            /* 
            * these are 1px columns: a little trick
            * to get padding in an x-scroll container
            */
            content: "";
            width: 1px;
          }

          /* each article is a card */
          article {
            color: ${props => props.theme.typography.options.bodyColor};
            border-radius: ${props => props.theme.cardRadius};
            box-shadow: ${props => props.theme.boxShadowLg};
            background-color: white;
            padding: 0 var(--rhythm);

            transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
            &:hover {
              box-shadow: ${props => props.theme.boxShadowXl};
              transform: translateY(-0.2rem);
            }

            /* expand link to cover card */
            position: relative;
            a {
              &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: auto;
                z-index: 2;
              }
            }
            &:hover {
            }

            /* make article snapping card*/
            scroll-snap-align: center;

            /* make image neat*/
            .gatsby-image-wrapper {
              background-color: rgba(7, 96, 115, 0.07);
              background-clip: padding-box;
              margin: 0 calc(-1 * var(--rhythm)) var(--rhythm);
              width: var(--card-width);
              height: calc(var(--card-width) / 1.33);
              border-bottom: 2px solid rgba(7, 96, 115, 0.07);
              border-top-left-radius: ${props => props.theme.cardRadius};
              border-top-right-radius: ${props => props.theme.cardRadius};

              * img {
                object-position: center 0 !important;
                transform: scale(1.01); /* fix some rounding errors */
              }
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
