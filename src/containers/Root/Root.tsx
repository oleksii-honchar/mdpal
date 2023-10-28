import { lazy, Suspense, ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { Layout } from "./components/Layout.tsx";
import { ErrorBoundary } from "src/components/ErrorBoundary.tsx";
import { NavContextProvider } from "src/contexts/NavigationContext.tsx";

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
      <NavContextProvider>
        <RouterProvider router={router} />
      </NavContextProvider>
    </Suspense>
  );
}
