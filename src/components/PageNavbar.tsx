import { Disclosure } from "@headlessui/react";
import { PageNavItems } from "./PageNavItems.tsx";
import { Title } from "./Title.tsx";
export function PageNavbar() {
  return (
    <div id="PageNavbar" className="w-full sticky top-0 z-10 mx-auto px-2 max-w-2xl md:max-w-3xl lg:max-w-5xl">
      <div className="w-full relative flex h-16 items-center justify-center">
        <div className="flex items-center justify-center">
          <Title />
          <PageNavItems />
        </div>
      </div>
    </div>
  );
}
