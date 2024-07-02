import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import NavBar from "../components/NavBar"

const Event = () => {
  const { id } = useParams()
  const [eventData, setEventData] = useState(null)
  const location = useLocation()
  const isLandingPage = location.pathname.includes("landing_page")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const docRef = doc(db, "events", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setEventData(docSnap.data())
        } else {
          console.log("No such document!")
        }
      } catch (error) {
        console.error("Error fetching event data:", error)
      }
    }
    fetchEventData()
  }, [id])

  const convert24HourToLocale = (time24) => {
    const [hours, minutes] = time24.split(":").map(Number)
    const date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes)
    const timeLocale = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    return timeLocale
  }

  const handleNavigateToLandingPage = () => {
    navigate(`/event/${id}/landing_page`, { state: { ...eventData, id } })
  }

  if (!eventData)
    return (
      <>
        <NavBar />
        <div className="col-lg-8 mx-auto p-3 py-md-5">
          <main>
            <h1>Event</h1>
            <p>{id}</p>
          </main>
        </div>
      </>
    )

  return (
    <>
      {isLandingPage ? (
        <Outlet />
      ) : (
        <>
          <NavBar />
          <div className="col-lg-8 mx-auto p-3 py-md-5">
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
              <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">{eventData.eventName}</span>
              </a>
            </header>

            <main>
              <div className="col-md-8">
                <p className="fs-5 mb-0">{eventData.address}</p>
                <p className="fs-5 mb-0">Suite 204</p>
                <p className="fs-5 mb-0">{`${eventData.state}, ${eventData.zip}`}</p>
              </div>

              <div className="mb-5 mt-5">
                <a onClick={handleNavigateToLandingPage} className="btn btn-primary btn-lg px-4">
                  View Landing Page
                </a>
              </div>

              <hr className="col-3 col-md-2 mb-5" />
              <div className="row g-5">
                <div className="col-md-6">
                  <h2>Event Info</h2>
                  <br />
                  <h5>Date</h5>
                  <p>{eventData.date}</p>
                  <h5>Time</h5>
                  <p>{convert24HourToLocale(eventData.time)}</p>
                </div>

                <div className="col-md-6">
                  <h2>Seating</h2>
                  <p className="mb-0">Available Seats: {eventData.availableSeats}</p>
                  <p className="mb-0">Seats Reserved: {eventData.availableSeats}</p>
                  <p className="mb-0">Available Seats: {eventData.availableSeats}</p>
                  <ul className="icon-list">
                    <li>
                      <a href="../getting-started/introduction/">Bootstrap quick start guide</a>
                    </li>
                    <li>
                      <a href="../getting-started/webpack/">Bootstrap Webpack guide</a>
                    </li>
                    <li>
                      <a href="../getting-started/parcel/">Bootstrap Parcel guide</a>
                    </li>
                    <li>
                      <a href="../getting-started/build-tools/">Contributing to Bootstrap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  )
}

export default Event
