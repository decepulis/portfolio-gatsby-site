import styled, { css } from "styled-components"

export const StyledProjects = styled.section`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          position: relative;
          overflow: hidden;

          /* background color! */
          && {
            --x-padding: 1em;
            --y-padding: ${props => props.theme.sectionMargin};
            --x-margin: calc(-1 * var(--x-padding));
            --y-margin: calc(-1 * var(--y-padding));

            @media (min-width: ${props => props.theme.containerWidth}) {
              --x-padding: calc(
                50vw - ${props.theme.containerHalfWidthMinusPadding}
              );
            }

            padding: var(--y-padding) var(--x-padding);
            margin: var(--y-margin) var(--x-margin);

            &:after {
              content: "";
              position: absolute;
              top: 3em;
              left: 0;
              right: 0;
              bottom: 3em;
              transform: skewY(-2deg);
              z-index: -1;
              background: #4e025a;
              background-image: linear-gradient(
                155.89deg,
                rgba(3, 6, 36, 0.7) 12.21%,
                rgba(3, 6, 36, 0.4) 50%,
                rgba(3, 6, 36, 0) 99.84%
              );
            }
          }

          /* Cards */
          header,
          && > p a {
            color: ${props => props.theme.white1};
          }
          & > section {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 2em;

            section {
              background: white;
              padding: 1rem;
              border-radius: ${props => props.theme.cardRadius};
              box-shadow: ${props => props.theme.boxShadowLg};
              header {
                p {
                  margin: 0;
                  color: ${props => props.theme.black3};
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
