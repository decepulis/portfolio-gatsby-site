import styled, { css } from "styled-components"

import pattern from "./circuit-board.svg"

export const StyledProjects = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          overflow: hidden;

          /* background color */
          && {
            --x-padding: ${props => props.theme.containerPadding};
            --y-padding: ${props => props.theme.typography.rhythm(2)};
            --x-margin: calc(-1 * var(--x-padding));
            --y-margin: calc(-1 * var(--y-padding));

            @media (min-width: ${props => props.theme.containerWidth}) {
              --x-padding: calc(
                50vw - ${props => props.theme.containerHalfWidthMinusPadding}
              );
            }

            padding: var(--y-padding) var(--x-padding);
            margin: var(--y-margin) var(--x-margin);

            & > header {
              padding-top: var(--y-padding);
            }
            & > header,
            & > p a {
              color: white;
            }

            &:after {
              content: "";
              position: absolute;
              top: 3em;
              left: 0;
              right: 0;
              bottom: 3em;
              transform: skewY(-1deg);
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
          }

          /* Cards */
          & > section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 2em;
            margin-bottom: ${props => props.theme.typography.rhythm(1)};
            section {
              border-radius: ${props => props.theme.cardRadius};
              box-shadow: ${props => props.theme.boxShadowLg};
              background-color: white;
              padding: ${props => props.theme.typography.rhythm(1)};
            }
          }
        `
      default:
        return
    }
  }}
`
