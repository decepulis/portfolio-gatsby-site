import React, { useState, createContext } from "react"

import themes from "../../styles/themes"

export const WindowThemeContext = createContext()

const isWindow = typeof window !== "undefined"
// I wish I were this clever. Thanks, Dan Abramov.
export const WindowThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    isWindow ? window.__theme : "nineteen-eighty-nine"
  )

  const currentTheme = { ...themes[theme], id: theme }

  if (isWindow) {
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }

  const setWindowTheme = theme => isWindow && window.__setPreferredTheme(theme)

  return (
    <WindowThemeContext.Provider value={[theme, setWindowTheme, currentTheme]}>
      {children}
    </WindowThemeContext.Provider>
  )
}
