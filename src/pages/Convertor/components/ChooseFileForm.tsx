import { ChangeEvent } from "react";
import { TbDownload } from "react-icons/tb";
import { toast } from "react-toastify";

import { LoggerService } from "@ciklum/logan";

const logger = new LoggerService();
logger.setTitle("ChooseFileForm");

/**
 * Support two scenarios: 1 - drag & drop file; 2 - choose file using file dialog
 * @returns ReactNode
 */
export default function ChooseFileForm() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (!file) {
      toast.error("No file selected");
      return;
    }
    // Process the file here without uploading
    logger.log("File:", file);
  };

  return (
    <div
      className={`
          flex flex-col justify-center items-center w-80 h-40
          rounded-md border-dashed border-2 border-md3-ref-primary-primary70
          bg-md3-sys-light-primary-container
          text-md3-sys-light-on-primary-container
        `}
    >
      <TbDownload className={` w-20 h-20 `} />
      <div className="pt-4">
        <label htmlFor="fileInput" className={`underline decoration-1 cursor-pointer`}>
          Choose file
        </label>
        <span>&nbsp;or drop one.</span>
        <input id="fileInput" type="file" accept=".json" style={{ display: "none" }} onChange={handleFileChange} />
      </div>
    </div>
  );
}
