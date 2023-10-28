import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { HelpModalContext } from "src/contexts/useHelpModal.tsx";

export function HelpModalDialog() {
  const { state, setModalState } = useContext(HelpModalContext);
  console.log("HelpModalDialog, state=", state);
  return (
    // @ts-ignore
    <Transition appear show={state} as={Fragment}>
      <Dialog open={state} onClose={() => setModalState(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-sm rounded bg-white">
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

              <p>
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This
                action cannot be undone.
              </p>

              <button onClick={() => setModalState(false)}>Deactivate</button>
              <button onClick={() => setModalState(false)}>Cancel</button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
