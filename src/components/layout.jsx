import React, { useState } from "react"

import { ThemeProvider } from "styled-components"
import themes from "./themes"

import { StyledLayout, StyledHeader, StyledMain } from "./layout.styles"

import { Link } from "gatsby"

const initialThemeId = localStorage.getItem("themeId") ?? "mono"

export default ({ children }) => {
  const [selectedThemeId, setSelectedThemeId] = useState(initialThemeId)
  const changeThemeId = e => {
    localStorage.setItem("themeId", e.target.value)
    setSelectedThemeId(e.target.value)
  }

  return (
    <ThemeProvider theme={{ id: selectedThemeId, ...themes[selectedThemeId] }}>
      <StyledLayout>
        <StyledHeader>
          <h1>
            <Link to="/">Darius Cepulis</Link>
          </h1>
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
        </StyledHeader>
        <StyledMain>{children}</StyledMain>
      </StyledLayout>
    </ThemeProvider>
  )
}
