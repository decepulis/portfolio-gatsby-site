---
templateKey: post
title: Portfolio Theming
date: 2020-01-16T20:24:09.204Z
description: >-
  Do existing CSS Theme patterns work for such radically different themes?
featuredpost: false
---

## Requirements

- Avoid monolithic CSS files (difficult considering how many themes and how many components I want to support)
- Not hate myself (Good DX)

## styled-components

```js
import styled from "styled-components"

const styledSectionTheme = {
  "2019": `
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 3rem;
    align-items: center;

    padding: 5rem 0;

    color: hsla(0,100%,100%,90%);
    position: relative;

    &:before {
      content: '';
      position: absolute;

      top: -10rem;
      left: -1rem;
      right: -1rem;
      @media (min-width: 60rem) {
        left: calc(-50vw + 29rem);
        right: calc(-50vw + 29rem);
      }
      bottom: 0;
      background: linear-gradient(155.89deg,#000758 12.21%,#109b9b 99.84%);
    }
  `,
}
const StyledSection = styled.section`
  ${props => styledSectionTheme[props.theme.id]}};
`

const styledHeaderTheme = {
  "2019": `
    display: none;
  `,
}
const StyledHeader = styled.header`
  ${props => styledHeaderTheme[props.theme.id]}};
`
const styledProfileTheme = {
  "2019": `
    border-radius: 50%;
    border: 0.5rem solid white;
    width: 100%;
    height: auto;
  `,
}
const StyledProfile = styled.img`
  width: 300px;
  height: 300px;
  ${props => styledProfileTheme[props.theme.id]}};
`

const styledLeadTheme = {
  "2019": `
    font-weight: bolder;
    font-size: 2rem;
  `,
}
const StyledLead = styled.p`
  ${props => styledLeadTheme[props.theme.id]}};
`
```
