import { LoggerService } from "@ciklum/logan";

class ThemeConvertor {
  themeFile: string = "";
  logger: LoggerService;

  constructor() {
    this.logger = new LoggerService();
    this.logger.setTitle("ThemeConvertor");
  }

  public processFile(themeFile: File) {
    const logHeader = "(processFile)";
    this.logger.debug(logHeader, "themeFile", themeFile);

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result as string;
      this.logger.info(logHeader, "File Content", fileContent);
      // Process the file content here
    };

    reader.onerror = (event) => {
      this.logger.error(logHeader, "Error occurred while reading the file.", event.target?.error);
    };

    reader.readAsText(themeFile);
  }
}

export const themeConvertor = new ThemeConvertor();
