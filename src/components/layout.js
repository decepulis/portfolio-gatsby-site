import React, { useState } from "react"

import styled, { ThemeProvider } from "styled-components"

import { Link } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const styledLayoutThemes = {
  "1989": `
    margin-left: 8px;
    margin-right: 8px;
  `,
  "2019": `
    color: white;
    background-color: blue;
  `,
}

export const StyledLayout = styled.div`
  // global styles
  overflow-y: auto; // new block formatting context

  // themed styles
  ${props => styledLayoutThemes[props.theme.portfolioTheme]}};
`

const themeOptions = [
  { value: "1989", label: "1989" },
  { value: "2019", label: "2019" },
  { value: "rad", label: "Rad" },
  { value: "mono", label: "Geek Chic" },
  { value: "paper", label: "⌘+P" },
  { value: "handwriting", label: "Note To Self" },
  { value: "editor", label: "Better Than Vim" },
]
const initialTheme =
  localStorage.getItem("portfolioTheme") ?? themeOptions[0].value

export default ({ children, pageContext, pageTitle }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const [selectedTheme, setSelectedTheme] = useState(initialTheme)
  const changeTheme = e => {
    localStorage.setItem("portfolioTheme", e.target.value)
    setSelectedTheme(e.target.value)
  }

  return (
    <ThemeProvider theme={{ portfolioTheme: selectedTheme }}>
      <StyledLayout>
        <header>
          <h1>
            <Link to="/">Darius Cepulis</Link>
          </h1>
          <nav>
            <Breadcrumb
              crumbs={crumbs}
              crumbWrapperStyle={{}}
              crumbStyle={{
                textDecoration: "",
                fontSize: "",
                color: "",
                textTransform: "capitalize",
              }}
              crumbActiveStyle={{
                color: "",
              }}
              crumbSeparator=" > "
              crumbLabel={pageTitle}
            />
            <label>
              Theme:&nbsp;
              {/* eslint-disable-next-line */}
              <select value={selectedTheme} onChange={changeTheme}>
                {themeOptions.map(t => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
          </nav>
        </header>
        <main>{children}</main>
      </StyledLayout>
    </ThemeProvider>
  )
}
