import Typography from "typography"

export default {
  "1989": {
    label: "1989",
  },
  "2019": {
    label: "2019",
    typography: new Typography({
      headerFontFamily: ["Roboto", "sans-serif"],
      bodyFontFamily: ["Roboto", "sans-serif"],
      googleFonts: [
        {
          name: "Roboto",
          styles: ["400", "700"],
        },
      ],
    }),
    highlightNavOnScroll: true,

    boxShadowSm: "0 5px 10px rgba(0,0,0,0.12);",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12);",
    boxShadowLg: "0 30px 60px rgba(0,0,0,0.12);",
    cardRadius: "1em",

    primaryDark: "#000758",
    primary: "#109b9b",
    secondary: "#0051C1",
  },
  rad: {
    label: "Rad",
  },
  mono: {
    label: "Geek Chic",
  },
  paper: {
    label: "⌘+P",
  },
  handwriting: {
    label: "Note To Self",
  },
  editor: {
    label: "Better Than Vim",
  },
}
