import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NewEvent from "./pages/NewProject"

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    element: <Home />,
  },
  {
    path: "/new_event",
    element: <NewEvent />,
  },
])

export default router
