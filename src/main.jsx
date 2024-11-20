import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs.jsx";
import OnicApp from "./components/pages/OnicApp.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Plans from "./components/pages/Plans.jsx";
import Faqs from "./components/pages/Faqs.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Home from "./components/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/onicapp",
        element: <OnicApp />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*   THIS REFERS TO THE UPPER ROUTER---- WHERE I WILL DEFINE ALL THE ROUTES FOR MY PAGES. */}
    <RouterProvider router={router} />
  </StrictMode>,
);
