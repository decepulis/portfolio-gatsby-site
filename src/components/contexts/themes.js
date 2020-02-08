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
    // A pleasant take on web brutalistm:
    // strong colors and serif fonts, pastel colors,
    // you'll see, it'l be great
    label: "Rad",
    disabled: true,
  },
  mono: {
    // That great monospace font look that developer-facing websites have.
    // I'mthinking uses.tech, alligator.io, even sentry.io somewhat
    label: "Geek Chic",
    disabled: true,
  },
  paper: {
    // How close to the look of an kinko's-printed resume can we get?
    label: "⌘+P",
    disabled: true,
  },
  notes: {
    // The web is very grid-friendly. How much can we break out of that?
    // Taking on that question with a cool kinda bulletin-board look
    label: "Note To Self",
    disabled: true,
  },
  editor: {
    // I think I remember seeing a demo online of some website which
    // actually showed the HTML tags and was editable.
    // If I can find that, I'll try to replicate that here.
    label: "Vim",
    disabled: true,
  },
  snes: {
    // 16 bit mario-overworld-inspired kinda thing
    label: "Let's-a-Go!",
    disabled: true,
  },
  firewatch: {
    // I want a chance to flex my parallax.
    // Inspirations, firewatch, gardenestudio, nationalparktypeface.com
    label: "Firetower",
    disabled: true,
  },
  ios6: {
    // the title says it all
    label: "Scott Forstall",
    disabled: true,
  },
  ios7: {
    // the title says it all
    // obnoxiously thin fonts, fade effects, maybe some parallax
    label: "Jony Ive",
    disabled: true,
  },
}
