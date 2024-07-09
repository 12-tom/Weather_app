import HomePage from "./pages/homePage";
import CityDetails from "./pages/cityDetails";
import Layout from "./components/layout";
import { createBrowserRouter } from "react-router-dom";
// import React from 'react';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout children/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cities", element: <CityDetails /> }
    ],
  },
]);

export default appRouter;
