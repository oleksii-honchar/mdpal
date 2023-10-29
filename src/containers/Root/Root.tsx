import { lazy, Suspense, ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BigSpinner } from "src/components/BigSpinner.tsx";
import { Layout } from "./components/Layout.tsx";
import { ErrorBoundary } from "src/components/ErrorBoundary.tsx";

const ConvertorPage = lazy(() => import("src/pages/Convertor/ConvertorPage.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <ConvertorPage />,
      },
    ],
  },
]);

export function Root(): ReactElement {
  return (
    <Suspense fallback={<BigSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
