import { HelpBtn } from "./HelpButtonWithModal/HelpBtn";

export function PageNavItems() {
  return (
    <div className="block absolute right-0">
      <div className="flex space-x-4">
        <HelpBtn />
      </div>
    </div>
  );
}
