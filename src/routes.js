import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NewEvent from "./pages/NewEvent"
import Error404 from "./pages/Error404"
import Event from "./pages/Event"
import LandingPage from "./pages/LandingPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/new_event",
    element: <NewEvent />,
  },
  {
    path: "/event/:id",
    element: <Event />,
    children: [
      {
        path: "landing_page",
        element: <LandingPage />,
      },
    ],
  },
])

export default router
