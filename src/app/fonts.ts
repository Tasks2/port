import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

// next/font downloads these at BUILD time and serves them from this site,
// so visitors never wait on a request to fonts.googleapis.com. It also
// generates a size-matched fallback font, so text doesn't jump when the
// real font finishes loading.
//
// Each font exposes a CSS variable (e.g. --font-inter). globals.css plugs
// those variables into the Tailwind theme (font-sans, font-display, font-mono).

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Instrument Serif only exists at weight 400. Asking Tailwind for
// font-semibold on it would make the browser fake a bold version.
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/** All three variables, ready to put on <html className>. */
export const fontVariables = [inter.variable, instrumentSerif.variable, jetbrainsMono.variable].join(" ");
