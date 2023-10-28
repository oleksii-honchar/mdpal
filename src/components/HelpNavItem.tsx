import { useContext } from "react";
import { HelpModalContext } from "src/contexts/useHelpModal";
import { HelpModalDialog } from "./HelpModalDialog";

export function HelpNavItem() {
  const { state, setModalState } = useContext(HelpModalContext);
  // console.log(state);

  return (
    <>
      <div
        key="help"
        onClick={() => {
          setModalState(true);
        }}
        className={`
        text-md3-sys-light-on-primary bg-md3-ref-primary-primary40
        flex flex-row items-center justify-center
        rounded-full h-6 w-6 text-sm font-medium cursor-pointer`}
      >
        ?
      </div>
      <HelpModalDialog />
    </>
  );
}
