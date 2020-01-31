import React, { useContext } from "react"

import { ThemeIdContext } from "./contexts/ThemeIdContext"

import { StyledHeader, StyledSelect } from "./layout.styles"

import { Link } from "gatsby"

export default ({ children, path }) => {
  const [themeId, setThemeId, themeOptions] = useContext(ThemeIdContext)

  return (
    <>
      <StyledHeader path={path}>
        <h1>
          <Link to="/">Darius Cepulis</Link>
        </h1>
        {/* for reasons I don't understand, the select box doesn't open 
        unless there's text in front of it.  Or something. So here's some text.
        It's a cross-browser bug, so probably my fault. */}
        &thinsp;
        {/* eslint-disable-next-line */}
        <StyledSelect
          aria-label="Pick a Theme"
          value={themeId}
          onChange={e => setThemeId(e.target.value)}
        >
          {themeOptions.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </StyledSelect>
      </StyledHeader>
      {children}
    </>
  )
}
