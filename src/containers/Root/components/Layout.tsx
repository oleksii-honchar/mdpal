import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { PageNavbar } from "src/components/PageNavbar.tsx";
import { Footer } from "src/components/Footer.tsx";

export function Layout({}) {
  return (
    <div
      className={`
        flex min-h-screen w-full flex-col bg-md3-white 
        bg-[radial-gradient(ellipse_110%_110%_at_50%_10%,_var(--tw-gradient-stops))] 
        from-md3-ref-neutral-neutral99 to-md3-ref-neutral-neutral90
        bg-contain bg-no-repeat bg-top
      `}
    >
      <PageNavbar />
      <main className="w-full flex flex-col flex-1 items-center justify-center">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
