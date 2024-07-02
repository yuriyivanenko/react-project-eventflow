import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../components/NavBar"

const LandingPage = () => {
  const location = useLocation()
  const { eventName, address, address2, state, zip, description, date, time } = location.state

  return (
    <>
      <NavBar />
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">{eventName}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{description}</p>
          <p className="lead mb-4">{`Join us on ${date} at ${time}`}</p>
          <h5 className=" mb-0">Location</h5>
          <p className="lead mb-0">{address}</p>
          <p className="lead mb-0">{address2}</p>
          <p className="lead mb-5">{`${state}, ${zip}`}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
