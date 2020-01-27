import React, {
  useState,
  useEffect,
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

const initThemeId =
  typeof window !== "undefined"
    ? // theme should be retrieved from localstorage or default to 1989
      localStorage.getItem("themeId") ?? "1989"
    : // ssr should generate 1989 pages
      "1989"

export const ThemeIdContext = createContext()

export const ThemeIdProvider = ({ children }) => {
  const [themeId, setThemeId] = useState()

  // Keep local state and localstorage in sync
  const setAndStoreThemeId = useCallback(
    newThemeId => {
      localStorage.setItem("themeId", newThemeId)
      setThemeId(newThemeId)
    },
    [setThemeId]
  )
  // set themeId after load to work around
  // https://github.com/styled-components/styled-components/issues/2629
  useEffect(() => {
    setAndStoreThemeId(initThemeId)
  }, [setThemeId])

  // memoize the provider values.
  // just for fun.
  const themeIdProviderValue = useMemo(
    () => [themeId, setAndStoreThemeId, themeOptions],
    [themeId, setAndStoreThemeId]
  )
  const themeProviderValue = useMemo(
    () => ({
      id: themeId,
      ...themes[themeId],
    }),
    [themeId]
  )

  // Wrap the page in the providers!
  return (
    <ThemeIdContext.Provider value={themeIdProviderValue}>
      <ThemeProvider theme={themeProviderValue}>{children}</ThemeProvider>
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
