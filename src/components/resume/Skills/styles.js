import styled, { css } from "styled-components"

import blob1 from "./2019-blob-1.svg"
import blob2 from "./2019-blob-2.svg"
import blob3 from "./2019-blob-3.svg"

import lineH from "./connecting-line-horz.svg"
import lineV from "./connecting-line-vert.svg"

export const StyledPosts = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          /** mobile layout of articles */
          article {
            margin-bottom: ${props => props.theme.typography.rhythm(1)};
            position: relative;

            /** not the last article? you get a straight line under you! */
            &:not(:last-child) {
              margin-bottom: ${props => props.theme.typography.rhythm(7)};

              &:after {
                content: "";
                background-image: url(${lineV});
                background-repeat: no-repeat;
                background-size: contain;

                display: block;
                position: absolute;
                height: ${props => props.theme.typography.rhythm(5)};
                bottom: calc(-1 * ${props => props.theme.typography.rhythm(6)});

                width: ${props => props.theme.typography.rhythm(1)};
                left: 50%;
              }
            }
          }

          /** tablet or desktop layout */
          @media (min-width: 40em) {
            /*** equal-height sections */
            display: grid;
            grid-auto-rows: 1fr;
            article {
              display: grid;
              grid-template-columns: 1fr 3fr;
              grid-template-areas: "header dl" "arrow arrow";
              grid-gap: ${props => props.theme.typography.rhythm(1)};

              header {
                grid-area: header;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
              }
              dl {
                grid-area: dl;
              }

              /** ...arrows for big */
              &:not(:last-child) {
                margin-bottom: ${props => props.theme.typography.rhythm(1)};

                &:after {
                  background-image: url(${lineH});
                  background-size: 100% 100%;
                  grid-area: arrow;

                  position: static;
                  width: 85%;
                  max-width: 700px;
                  margin: 0 auto;
                }
              }
              &:nth-child(even) {
                grid-template-columns: 3fr 1fr;
                grid-template-areas: "dl header" "arrow arrow";

                &:after {
                  transform: scale(-1, 1);
                }
              }
            }
          }

          /** dl layout within article */
          article {
            dl {
              column-width: 10em;
              column-gap: ${({ theme }) => theme.typography.rhythm(1)};
              margin-bottom: 0;
              div {
                break-inside: avoid;

                dd {
                  display: inline-block;
                  &:not(:last-of-type) {
                    margin-bottom: 0;
                    &:after {
                      content: ", ";
                      white-space: pre;
                    }
                  }
                }
              }
            }
          }

          /** blobs */
          article {
            &,
            header {
              background-repeat: no-repeat;
              background-position: center center;
              background-size: contain;
            }

            &:nth-of-type(1) {
              background-image: url(${blob1});

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob1});
                }
              }
            }
            &:nth-of-type(2) {
              background-image: url(${blob2});

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob2});
                }
              }
            }
            &:nth-of-type(3) {
              background-image: url(${blob3});

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob3});
                }
              }
            }
          }
        `
      default:
        return
    }
  }}
`
