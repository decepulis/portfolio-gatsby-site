import React, { createContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const initialValue = "1989"

  return (
    <ThemeContext.Provider value={useState(initialValue)}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
