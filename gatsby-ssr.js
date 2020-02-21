const React = require("react")

const {
  WindowThemeProvider,
} = require("./src/components/contexts/WindowThemeContext")

const Layout = require("./src/components/layout").default

// Wrap root element in theme providers
exports.wrapRootElement = ({ element }) => {
  return <WindowThemeProvider>{element}</WindowThemeProvider>
}

// Wrap pages in theme management accessories
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
