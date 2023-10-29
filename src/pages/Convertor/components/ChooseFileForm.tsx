import { ChangeEvent, useState } from "react";
import { TbDownload } from "react-icons/tb";
import { toast } from "react-toastify";
import PropTypes, { InferProps } from "prop-types";

import { LoggerService } from "@ciklum/logan";
import { classNames } from "src/utils/classNames.ts";

const logger = new LoggerService();
logger.setTitle("ChooseFileForm");

ChooseFileForm.propTypes = {
  setThemeFile: PropTypes.func.isRequired,
};

/**
 * Support two scenarios: 1 - drag & drop file; 2 - choose file using file dialog
 * @returns ReactNode
 */
export default function ChooseFileForm(props: InferProps<typeof ChooseFileForm.propTypes>) {
  const [isDragOver, setDragOver] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    handleSelectedFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    handleSelectedFile(file);
  };

  const handleSelectedFile = (file: File) => {
    if (!file) {
      toast.error("No file selected");
      return;
    }
    // Process the file here without uploading
    logger.debug("File:", file);
    props.setThemeFile(file);
  };

  return (
    <div
      id="ChooseFileFormCntr"
      className={classNames(
        `
        rounded-md 
        bg-md3-sys-light-primary-container
      `,
        isDragOver
          ? `
                bg-md3-sys-light-primary
                text-md3-sys-light-on-primary
          `
          : "",
      )}
    >
      <div
        id="dragFrame"
        className={classNames(
          `flex flex-col justify-center items-center w-80 h-40
          rounded-md border-dashed border-2 border-md3-ref-primary-primary70
          bg-md3-sys-light-primary-container
          m-3 transition-all`,
          isDragOver
            ? `
                bg-md3-sys-light-primary
                text-md3-sys-light-on-primary
          `
            : "text-md3-sys-light-on-primary-container",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
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
    </div>
  );
}
