import React, { useContext } from "react"

import { ThemeIdContext } from "./contexts/ThemeIdContext"

import { StyledHeader, StyledMain, StyledLabel } from "./layout.styles"

import { Link } from "gatsby"

export default ({ children, path }) => {
  const [themeId, setThemeId, themeOptions] = useContext(ThemeIdContext)

  return (
    <>
      <StyledHeader path={path}>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
        <StyledLabel>
          Theme&ensp;
          {/* eslint-disable-next-line */}
          <select value={themeId} onChange={e => setThemeId(e.target.value)}>
            {themeOptions.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </StyledLabel>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
