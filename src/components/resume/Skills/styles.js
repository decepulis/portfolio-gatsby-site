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
            margin-bottom: var(--rhythm);
            position: relative;

            /** not the last article? you get a straight line under you! */
            &:not(:last-child) {
              margin-bottom: calc(5 * var(--rhythm));

              &:after {
                content: "";
                background-image: url(${lineV});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;

                display: block;
                position: absolute;
                height: calc(5 * var(--rhythm));
                bottom: calc(-1 * calc(5 * var(--rhythm)));

                width: var(--rhythm);
                left: 50%;
              }
            }
          }

          /** tablet or desktop layout */
          @media (min-width: 40em) {
            article {
              display: grid;
              grid-template-columns: 1fr 3fr;
              grid-template-areas: "header dl" "arrow arrow";
              grid-gap: var(--rhythm);

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
                margin-bottom: var(--rhythm);

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

                &:not(:last-child) {
                  margin-bottom: var(--rhythm);
                }

                dd {
                  display: inline;
                  &:not(:last-child):after {
                    content: ", ";
                    white-space: pre-line;
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
              background-image: url(${blob1}), url(${blob2});
              background-position: 25% 33%, 75% 66%;
              background-size: 66% 66%, 75% 75%;

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob1}), url(${blob2});
                  background-position: 25% 33%, 75% 66%;
                  background-size: 66% 66%, 75% 75%;
                }
              }
            }
            &:nth-of-type(2) {
              background-image: url(${blob2}), url(${blob3});
              background-position: 33% 33%, 66% 66%;
              background-size: 75% 75%, 66% 66%;

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob2}), url(${blob3});
                  background-position: 33% 33%, 66% 66%;
                  background-size: 75% 75%, 66% 66%;
                }
              }
            }
            &:nth-of-type(3) {
              background-image: url(${blob3}), url(${blob1});
              background-position: 25% 33%, 75% 66%;
              background-size: 66% 66%, 75% 75%;

              @media (min-width: 40em) {
                background-image: none;
                header {
                  background-image: url(${blob3}), url(${blob1});
                  background-position: 25% 33%, 75% 66%;
                  background-size: 66% 66%, 75% 75%;
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
