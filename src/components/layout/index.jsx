import React, { useMemo, useContext } from "react"

import { WindowThemeContext } from "../../components/contexts/WindowThemeContext"
import themes from "../../styles/themes"
import "./polyfills.jsx"

import { Link } from "gatsby"
import Helmet from "react-helmet"
import { GoogleFont } from "react-typography"

const themeOptions = Object.entries(themes).map(([themeKey, themeValue]) => [
  themeKey,
  themeValue.label,
  themeValue.disabled,
])

export default ({ children, path }) => {
  const [theme, setTheme, currentTheme] = useContext(WindowThemeContext)

  // We should also manage the typography
  const typography = useMemo(() => {
    return currentTheme?.typography
  }, [currentTheme])

  return (
    <>
      {/* Manage Head */}
      {(currentTheme?.typography || currentTheme?.variables) && (
        <Helmet>
          <style id="typography.js" type="text/css">
            {currentTheme?.typography?.toString()}
          </style>
          <style id="variables" type="text/css">
            {currentTheme?.variables}
          </style>
        </Helmet>
      )}

      {/* Manage Body */}
      <div className="layout" path={path}>
        <header className="page-header" path={path}>
          <h1>
            <Link to="/">Darius Cepulis</Link>
          </h1>
          <select
            aria-label="Pick a Theme"
            value={theme}
            onChange={e => setTheme(e.target.value)}
          >
            {themeOptions.map(([id, label, disabled]) => (
              <option key={id} value={id} disabled={disabled}>
                {label}
              </option>
            ))}
          </select>
        </header>
        {children}
      </div>
      {/* Manage Google Fonts */}
      {typography && <GoogleFont typography={typography} />}
    </>
  )
}
