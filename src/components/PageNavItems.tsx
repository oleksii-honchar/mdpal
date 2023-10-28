import { classNames } from "src/utils/classNames.ts";
import { HelpNavItem } from "./HelpNavItem";

export function PageNavItems() {
  return (
    <div className="block absolute right-0">
      <div className="flex space-x-4">
        <HelpNavItem />
      </div>
    </div>
  );
}
