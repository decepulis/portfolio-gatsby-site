import React, { useContext } from "react"

import { ThemeIdContext } from "./contexts/ThemeIdContext"

import { StyledLayout, StyledHeader, StyledSelect } from "./layout.styles"

import { Link } from "gatsby"

export default ({ children, path }) => {
  const [themeId, setThemeId, themeOptions] = useContext(ThemeIdContext)

  return (
    <StyledLayout path={path}>
      <StyledHeader path={path}>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
        {/* eslint-disable-next-line */}
        <StyledSelect
          aria-label="Pick a Theme"
          value={themeId}
          onChange={e => setThemeId(e.target.value)}
        >
          {themeOptions.map(([id, label, disabled]) => (
            <option key={id} value={id} disabled={disabled}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </StyledHeader>
      {children}
    </StyledLayout>
  )
}
