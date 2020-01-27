const React = require("react")

const {
  ThemeIdProvider,
  GlobalThemeWrapper,
} = require("./src/components/contexts/ThemeIdContext")

const Layout = require("./src/components/layout").default

// Wrap root element in theme providers
exports.wrapRootElement = ({ element }) => {
  return <ThemeIdProvider>{element}</ThemeIdProvider>
}

// Wrap pages in theme management accessories
exports.wrapPageElement = ({ element, props }) => {
  return (
    <GlobalThemeWrapper>
      <Layout {...props}>{element}</Layout>
    </GlobalThemeWrapper>
  )
}
