// @ts-nocheck
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes, { InferProps } from "prop-types";
import { BsArrowRightShort } from "react-icons/bs";

HelpModalDialog.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export function HelpModalDialog(props: InferProps<typeof HelpModalDialog.propTypes>) {
  return (
    // @ts-ignore
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog onClose={props.setIsOpen} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-md3-sys-light-scrim bg-opacity-25 transition-opacity" />
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
            <Dialog.Panel
              className={`
                relative transform overflow-hidden rounded-lg 
                bg-md3-sys-light-surface text-left shadow-xl transition-all
                text-md3-sys-light-on-surface
                w-full max-w-2xl
              `}
            >
              <div className={`p-5`}>
                <Dialog.Title
                  as="h2"
                  className={`
                    font-semibold leading-6 text-md3-sys-light-on-surface 
                    text-center
                  `}
                >
                  How to use
                </Dialog.Title>
                <div className="px-4 py-3 text-base">
                  <ul className="list-decimal">
                    <li>
                      Open M3D Palette Kit in Figma (
                      <a
                        target="_blank"
                        href="https://www.figma.com/file/pCsQgzpNTStWeXqVNNzdjE/Material-3-Design-Kit-But-Better-(Community)?type=design&t=SSzGaw2y7xMAE8Ub-6"
                        rel="noreferrer"
                      >
                        link
                      </a>
                      )
                    </li>
                    <li>
                      Open or install &quot;Material Theme Builder&quot; plugin (
                      <a
                        target="_blank"
                        href="https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder"
                        rel="noreferrer"
                      >
                        link
                      </a>
                      )
                    </li>
                    <li>
                      In plugin select your colors for the theme &quot;M3&quot;. Click &quot;Apply&quot; for every
                      selected color.
                    </li>
                    <li>
                      When theme update completed, click &quot;Export&quot; <BsArrowRightShort className="inline" />{" "}
                      &quot;Theme.json&quot;. Save &quot;material-theme.zip&quot;. Unzip it.
                    </li>
                    <li>Drop theme.json to mdpal browser window.</li>
                    <li>Generated design tokens file will be downloaded for local use.</li>
                  </ul>
                  <br />
                  <p>
                    Please visit MDPAL github page for more details{" "}
                    <a target="_blank" href="https://github.com/oleksii-honchar/mdpal" rel="noreferrer">
                      link
                    </a>
                  </p>
                </div>
                <div
                  className={`
                      px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6
                      rounded-b-lg
                      bg-md3-sys-light-surface-container-lowest 
                  `}
                >
                  <button
                    type="button"
                    className={`
                      inline-flex w-full justify-center rounded-md px-3 py-2 sm:ml-3 sm:w-auto
                      text-sm font-semibold text-md3-sys-light-on-primary-container
                      bg-md3-sys-light-primary-container
                      shadow-sm
                      transition-colors duration-200 ease-in-out
                      hover:bg-md3-sys-light-primary/80
                      hover:text-md3-sys-light-on-primary/80
                    `}
                    onClick={() => props.setIsOpen!(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
