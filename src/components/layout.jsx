import React, { useState, useEffect } from "react"

import { ThemeProvider } from "styled-components"
import themes from "./themes"

import { GlobalStyle, StyledHeader, StyledMain } from "./layout.styles"

import { Link } from "gatsby"

const initialThemeId =
  typeof window !== "undefined" && (localStorage.getItem("themeId") ?? "mono")
export default ({ children, path }) => {
  const [selectedThemeId, setSelectedThemeId] = useState(initialThemeId)

  const changeThemeId = e => {
    localStorage.setItem("themeId", e.target.value)
    setSelectedThemeId(e.target.value)
  }

  return (
    <ThemeProvider theme={{ id: selectedThemeId, ...themes[selectedThemeId] }}>
      <GlobalStyle />
      <StyledHeader path={path}>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
        {selectedThemeId && (
          <label>
            Theme&ensp;
            {/* eslint-disable-next-line */}
            <select value={selectedThemeId} onChange={changeThemeId}>
              {Object.entries(themes).map(([themeId, themeAttributes]) => (
                <option key={themeId} value={themeId}>
                  {themeAttributes.label}
                </option>
              ))}
            </select>
          </label>
        )}
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  )
}
