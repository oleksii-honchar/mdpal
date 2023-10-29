import { toast } from "react-toastify";
import joi from "joi";
import moment from "moment";
import { LoggerService } from "@ciklum/logan";

import { nl } from "src/utils/native-lodash.ts";

import { md3ThemeSchema } from "./md3-theme-schema";

class ThemeConvertor {
  themeFile: string = "";
  resFileName = "mdpal-theme";
  logger: LoggerService;

  constructor() {
    this.logger = new LoggerService();
    this.logger.setTitle("ThemeConvertor");
  }

  getFullName() {
    const timestamp = moment().format("YYYYMMDDhhmm");
    return `${this.resFileName}_${timestamp}.json`;
  }
  prepareAndDownloadDesignTokensFile(contentJson: object) {
    const filename = this.getFullName();
    const element = document.createElement("a");
    const content = JSON.stringify(contentJson, null, 2);

    element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(content));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  public processThemeFile(themeFile: File) {
    const logHeader = "(processFile)";
    this.logger.debug(logHeader, "themeFile", themeFile);

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result as string;
      this.logger.debug(logHeader, "Loaded content size:", fileContent.length);
      let mdThemeJson = {};
      try {
        mdThemeJson = JSON.parse(fileContent);
        mdThemeJson = joi.attempt(mdThemeJson, md3ThemeSchema);
        const msg = "File schema validation successful";
        this.logger.debug(logHeader, msg);
        toast.success(msg);
      } catch (err) {
        this.logger.error(logHeader, err);
        toast.error(`File schema validation failed: ${(err as Error).message}`);
      }

      const tailwindTokensJson = this.convertTheme(mdThemeJson);
      this.prepareAndDownloadDesignTokensFile(tailwindTokensJson);
    };

    reader.onerror = (event) => {
      const logTitle = "Error occurred while reading the file.";
      this.logger.error(logHeader, logTitle, event.target?.error);
      toast.error(logTitle);
    };

    reader.readAsText(themeFile);
  }

  convertTheme(mdThemeJson: object) {
    const logHeader = "(convertTheme)";

    function camelToKebab(camelCaseString: string): string {
      return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }

    const tailwindTokensJson = {};

    const themeColors = {};
    Object.entries(nl.get(mdThemeJson, "coreColors")).forEach(([key, value]) => {
      nl.set(themeColors, camelToKebab(key), value);
    });
    nl.set(tailwindTokensJson, "theme", themeColors);

    const sysLightColors = {};
    Object.entries(nl.get(mdThemeJson, "schemes.light")).forEach(([key, value]) => {
      nl.set(sysLightColors, camelToKebab(key), value);
    });
    nl.set(tailwindTokensJson, "sys.light", sysLightColors);

    const sysDarkColors = {};
    Object.entries(nl.get(mdThemeJson, "schemes.dark")).forEach(([key, value]) => {
      nl.set(sysDarkColors, camelToKebab(key), value);
    });
    nl.set(tailwindTokensJson, "sys.dark", sysDarkColors);

    const refThemeKeys = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99];
    const refList = ["primary", "secondary", "tertiary", "error", "neutral", "neutralVariant"];
    refList.forEach((ref) => {
      const tokenRef = camelToKebab(ref);
      nl.set(tailwindTokensJson, `ref.${tokenRef}`, {}); // set object for type infer

      refThemeKeys.forEach((key) => {
        const tokenKey = 1000 - key * 10;
        nl.set(tailwindTokensJson, `ref.${tokenRef}.${tokenKey}`, nl.get(mdThemeJson, `palettes.${ref}.${key}`));
      });
    });

    const msg = "MD3 theme converted to TailWind design tokens";
    this.logger.debug(logHeader, msg, tailwindTokensJson);
    toast.success(msg);

    return {
      colors: {
        md3: tailwindTokensJson,
      },
    };
  }
}

export const themeConvertor = new ThemeConvertor();
