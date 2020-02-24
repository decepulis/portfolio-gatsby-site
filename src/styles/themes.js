import Typography from "typography"

const isChrome =
  typeof window !== "undefined" &&
  navigator?.userAgent.toLowerCase().indexOf("chrome") > -1

const typography2019 = new Typography({
  normalize: false, // normalize is included above
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  googleFonts: [
    {
      name: "Roboto",
      styles: ["400", "700"],
    },
  ],
})

export default {
  "nineteen-eighty-nine": {
    label: "1989",
  },
  "nineteen-ninetey-nine": {
    // I'm thinkin... space jam
    label: "1999",
    disabled: true,
  },
  "twenty-nineteen": {
    // netlify, contentful, zeit.
    // blobs, waves, gradients
    label: "2019",
    typography: typography2019,
    highlightNavOnScroll: true,
    variables: `
html {
  --rhythm: ${typography2019.rhythm(1)};
  --scale1size: ${typography2019.scale(1).fontSize};
  --scale1height: ${typography2019.scale(1).lineHeight};
  --scale75size: ${typography2019.scale(7 / 5).fontSize};
  --scale75height: ${typography2019.scale(7 / 5).lineHeight};
  --headerLineHeight: ${typography2019.options.headerLineHeight};
  --headerWeight: ${typography2019.options.headerWeight};
  --bodyColor: ${typography2019.options.bodyColor};

  --scroll-behavior: ${isChrome ? "auto" : "smooth"};

  --boxShadowXs: 0 3px 5px rgba(0,0,0,0.12);
  --boxShadowSm: 0 5px 10px rgba(0,0,0,0.12);
  --boxShadow: 0 8px 30px rgba(0,0,0,0.12);
  --boxShadowLg: 0 30px 60px rgba(0,0,0,0.12);
  --cardRadius: 0.5rem;

  --primary: 16, 155, 155;
  --primaryDark: 7, 131, 131;
  --secondary: 0, 81, 193;
  --tertiary: 0, 7, 88;
}
    `,
  },
  rad: {
    // A pleasant take on web brutalistm:
    // strong colors and serif fonts, pastel colors,
    // you'll see, it'll be great
    label: "Rad",
    disabled: true,
  },
  mono: {
    // That great monospace font look that developer-facing websites have.
    // I'm thinking uses.tech, alligator.io, even sentry.io somewhat
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
