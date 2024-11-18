import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App"
import Home from "./components/Home";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/:countryDetails",
                element: <CountryDetails />
            }
        ],
    },
], {
    future: {
        v7_fetcherPersist: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_skipActionErrorRevalidation: true,
        // v7_skipActionStatusRevalidation: true,
    },
});

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        />
    </>
);