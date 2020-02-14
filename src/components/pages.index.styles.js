import styled, { css } from "styled-components"
export const StyledMain = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          --section-rhythm: ${props => props.theme.typography.rhythm(2)};

          h2 {
            text-align: center;
            margin-bottom: var(--section-rhythm);
          }
          /* Each section has its own context, and its own big margins */
          & > section,
          & > nav {
            margin-bottom: var(--section-rhythm);
          }
          & > section {
            margin-top: var(--section-rhythm);

            /* Each section's header acts as an anchor target */
            /* We add an offset to ensure that the navbar has room atop the header */
            header[id] {
              margin-top: calc(
                -1 * ${props => props.theme.typography.rhythm(3)}
              );
              padding-top: calc(
                1 * ${props => props.theme.typography.rhythm(3)}
              );
            }
          }
        `
      default:
        return
    }
  }};
`
