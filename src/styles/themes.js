const isChrome =
  typeof window !== "undefined" &&
  navigator?.userAgent.toLowerCase().indexOf("chrome") > -1

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
    highlightNavOnScroll: true,
    variables: `html {--scroll-behavior: ${isChrome ? "auto" : "smooth"};}`,
    fontHref:
      "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap",
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
