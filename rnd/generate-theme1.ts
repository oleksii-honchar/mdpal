import { MDTailwindTheme } from "MDTailwindTheme.ts";
import { blablo } from "blablo";
import colors from "colors";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

colors.enable();
const __filename = fileURLToPath(import.meta.url); // eslint-disable-line
const __dirname = dirname(__filename); // eslint-disable-line
const themeFilePath = join(__dirname, "theme1.json");
const schemeFilePath = join(__dirname, "scheme1.json");

const logHeader = "[theme-gen]";

blablo.cleanLog(logHeader, "------");
blablo.cleanLog(logHeader, "composing custom theme colors");

const themeCoreColors = {
  "primary": "#878601",
  "secondary": "#018786",
  "error": "#B00020",
  "neutral": "#A8A29E",
  "neutral-variant": "#E5E7EB",
};

const theme = new MDTailwindTheme(themeCoreColors);

const themeContent = JSON.stringify(theme.toJson(), null, 2);
fs.writeFileSync(themeFilePath, themeContent, "utf-8");
// fs.writeFileSync(schemeFilePath, JSON.stringify(schemeJson, null, 2), "utf-8");

blablo.cleanLog(logHeader, "files saved");
