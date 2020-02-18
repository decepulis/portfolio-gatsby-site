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
          scrollbar-width: thin;
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

            display: flex;
            flex-direction: column;

            transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
            &:hover {
              box-shadow: ${props => props.theme.boxShadowXl};
              transform: translateY(-0.2rem);
            }
            &:active {
              box-shadow: ${props => props.theme.boxShadowLg};
              transform: translateY(-0.1rem);
            }

            /* expand link to cover card */
            position: relative;
            a:not(.tag) {
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

            /* exempt tags, which have their own styling */
            .tag-list {
              /* grow to end of container so tags would be at bottom */
              flex: 1 0 auto;
              font-size: 0.9em;

              display: flex;
              align-items: flex-end;
              overflow-x: scroll;
              scrollbar-width: thin;

              /* 
              * negative margins ensure that the tag's 
              * shadows and transforms are visible
              */
              margin: calc(-1 * var(--rhythm)) calc(-1 * var(--rhythm)) 0;
              padding: var(--rhythm);

              &:after {
                /* 
                * instead of the above-grid trick, we'll add padding at the end like this
                */
                content: " ";
                white-space: pre;
                flex: 0 0 var(--rhythm);
              }
              position: relative;
              &:before {
                content: unset;
              }

              .tag-list-item.tag-list-item {
                &:after {
                  content: "";
                }

                z-index: 3;
                flex: 0 0 auto;

                margin-bottom: 0;
                --tag-right: calc(0.25 * 1em);
                &:not(:last-child) {
                  margin-right: var(--tag-right);
                }
                position: relative;

                transition: background-color 0.2s ease-in-out,
                  box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
                box-shadow: ${props => props.theme.boxShadowXs};
                &:hover {
                  box-shadow: ${props => props.theme.boxShadowSm};
                  transform: translateY(-0.1em);
                }
                &:active {
                  box-shadow: ${props => props.theme.boxShadowXs};
                  transform: translateY(-0.05em);
                  background-color: ${props => props.theme.primaryDark};
                }
              }

              .tag.tag {
                white-space: nowrap;
                padding: calc(0.25 * 1em);
                border-radius: calc(0.25 * 1em);
                background-color: ${props => props.theme.primary};
                color: white;

                &:after {
                  /* increase touch target size */
                  content: "";
                  position: absolute;
                  height: 44px;
                  top: -11px;
                  width: calc(100% + var(--tag-right));
                  left: calc(-0.5 * var(--tag-right));
                }
              }
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
            &:focus {
              outline: 0.25em solid ${props => props.theme.primary};
            }
            &:hover {
              box-shadow: inset 0 calc(-1em - 2px) 0 -1px ${props => props.theme.primary};
            }
            &:active {
              box-shadow: inset 0 -0.9em 0 -1px ${props => props.theme.primary};
            }
          }
        `
      default:
        return
    }
  }}
`
