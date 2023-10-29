import { useState } from "react";
import { HelpModalDialog } from "./HelpModalDialog";

export function HelpBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        key="help"
        onClick={() => {
          setIsOpen(true);
        }}
        className={`
        text-md3-sys-light-on-primary bg-md3-ref-primary-primary40
        flex flex-row items-center justify-center
        rounded-full h-6 w-6 text-sm font-medium cursor-pointer`}
      >
        ?
      </div>
      <HelpModalDialog setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
