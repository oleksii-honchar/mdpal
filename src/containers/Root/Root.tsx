import { lazy, Suspense, ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { Layout } from "./components/Layout.tsx";
import { ErrorBoundary } from "src/components/ErrorBoundary.tsx";
import { HelpModalContextProvider } from "src/contexts/useHelpModal.tsx";

const MainPage = lazy(() => import("src/pages/Main/MainPage.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export function Root(): ReactElement {
  return (
    <Suspense fallback={<BigSpinner />}>
      <HelpModalContextProvider>
        <RouterProvider router={router} />
      </HelpModalContextProvider>
    </Suspense>
  );
}
