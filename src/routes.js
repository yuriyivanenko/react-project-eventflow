import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import NewEvent from "./pages/NewProject"
import Error404 from "./pages/Error404"
import Project from "./pages/Project"

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
    path: "/project/:id",
    element: <Project />,
  },
])

export default router
