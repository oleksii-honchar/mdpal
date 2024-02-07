import { Color, TonalPalette, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import { blablo } from "blablo";
import colors from "colors";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

colors.enable();
const __filename = fileURLToPath(import.meta.url); // eslint-disable-line
const __dirname = dirname(__filename); // eslint-disable-line

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex("#f82506"), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Print out the theme as JSON
const themeContent = JSON.stringify(theme, null, 2);
fs.writeFileSync(join(__dirname, "theme.json"), themeContent, "utf-8");

const logHeader = "[main]";
blablo.cleanLog(logHeader, __dirname);

// Define a color in ARGB format (e.g., #ff6f61 for a shade of red)
// const color = 0xff6f61;
const color = argbFromHex("#ff6f61");
const tonalPalette = TonalPalette.fromInt(color);

// You can loop through the entire tonal palette if needed, for example:
for (let toneValue = 0; toneValue <= 100; toneValue += 10) {
  blablo.cleanLog("[tonal palette]", `Tone ${toneValue}: `, tonalPalette.tone(toneValue));
}

// Define colors using HEX values
const secondaryColor = Color.fromHex("#018786"); // Replace with your secondary color
const errorColor = Color.fromHex("#B00020"); // Replace with your error color
const neutralColor = Color.fromHex("#121212"); // Replace with your neutral color
