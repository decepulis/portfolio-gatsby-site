import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  createContext,
} from "react"

import { ThemeProvider, ThemeContext } from "styled-components"

import { GoogleFont } from "react-typography"
import { GlobalStyle } from "../layout.styles"
import Helmet from "react-helmet"

import themes from "./themes"

const themeOptions = Object.entries(themes).map(([themeKey, themeValue]) => [
  themeKey,
  themeValue.label,
])

// const initThemeId =
//   typeof window !== "undefined"
//     ? localStorage.getItem("themeId") ?? "mono"
//     : "1989"

// setting this as constant until I figure out what's going on with hydration
const initThemeId = "1989"

export const ThemeIdContext = createContext()

export const ThemeIdProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(initThemeId)

  const setAndStoreThemeId = useCallback(
    newThemeId => {
      // localStorage.setItem("themeId", newThemeId)
      setThemeId(newThemeId)
    },
    [setThemeId]
  )

  const themeIdProviderValue = useMemo(
    () => [themeId, setAndStoreThemeId, themeOptions],
    [themeId, setAndStoreThemeId]
  )

  return (
    <ThemeIdContext.Provider value={themeIdProviderValue}>
      <ThemeProvider theme={{ id: themeId, ...themes[themeId] }}>
        {children}
      </ThemeProvider>
    </ThemeIdContext.Provider>
  )
}

export const GlobalThemeWrapper = ({ children }) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      {/* Manually insert typography.js into head */}
      {theme?.typography && (
        <>
          <Helmet>
            <style id="typography.js" type="text/css">
              {theme.typography.toString()}
            </style>
          </Helmet>
        </>
      )}
      {/* Allow styled components to do its thing */}
      <GlobalStyle />
      {/* And Add Google Fonts to the end of whatever */}
      {children}
      {theme?.typography && <GoogleFont typography={theme.typography} />}
    </>
  )
}
