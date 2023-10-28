import { TbDownload } from "react-icons/tb";

export default function ChooseFileDialog() {
  return (
    <div
      className={`
          flex flex-col justify-center items-center w-full w-80 h-40
          rounded-md border-dashed border-2 border-md3-ref-primary-primary70
          bg-md3-sys-light-primary-container
          text-md3-sys-light-on-primary-container
        `}
    >
      <TbDownload className={` w-20 h-20 `} />
      <div className="pt-4">
        <span className={`underline decoration-1 cursor-pointer`}>Choose file</span>
        <span>&nbsp;or drop one.</span>
      </div>
    </div>
  );
}
