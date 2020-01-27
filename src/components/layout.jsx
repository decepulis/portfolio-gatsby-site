import React, { useContext } from "react"

import { ThemeIdContext } from "./contexts/ThemeIdContext"

import { StyledHeader, StyledMain } from "./layout.styles"

import { Link } from "gatsby"

export default ({ children, path }) => {
  const [themeId, setThemeId, themeOptions] = useContext(ThemeIdContext)

  return (
    <>
      <StyledHeader path={path}>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
        <label>
          Theme&ensp;
          {/* eslint-disable-next-line */}
          <select value={themeId} onChange={e => setThemeId(e.target.value)}>
            {themeOptions.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
