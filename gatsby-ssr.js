const React = require("react")

const {
  ThemeIdProvider,
  GlobalThemeWrapper,
} = require("./src/components/contexts/ThemeIdContext")

// Wrap root element in theme providers
exports.wrapRootElement = ({ element }) => {
  return <ThemeIdProvider>{element}</ThemeIdProvider>
}

// Wrap pages in theme management accessories
exports.wrapPageElement = ({ element, props }) => {
  return <GlobalThemeWrapper>{element}</GlobalThemeWrapper>
}
