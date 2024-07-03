import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom"
import { doc, getDocs, getDoc, collection, query, limit } from "firebase/firestore"
import MoonLoader from "react-spinners/ClipLoader"
import { db } from "../firebase"
import NavBar from "../components/NavBar"
import Attendee from "../components/Attendee"
import BackButton from "../components/BackButton"

const Event = () => {
  const { id } = useParams()
  const location = useLocation()
  const [eventData, setEventData] = useState(null)
  const [attendees, setAttendees] = useState(null)
  const isLandingPage = location.pathname.includes("landing_page")
  const navigate = useNavigate()

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

  const fetchAttendees = async () => {
    try {
      const collectionRef = collection(db, `events/${id}/attendees`)
      const q = query(collectionRef, limit(5))
      const querySnapShot = await getDocs(q)
      const attendeesList = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setAttendees(attendeesList)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchEventData()
    fetchAttendees()
  }, [id])

  const handleNavigateToLandingPage = () => {
    navigate(`/event/${id}/landing_page`, { state: { ...eventData, id } })
  }

  if (!eventData)
    return (
      <div className="container text-center">
        <NavBar />
        <MoonLoader
          className="mt-5"
          color={"#0d6efd"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )

  return (
    <>
      {isLandingPage ? (
        <Outlet />
      ) : (
        <>
          <NavBar />
          <div className="col-lg-8 mx-auto p-3 py-md-5">
            <BackButton />
            <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
              <span className="fs-4">{eventData.eventName}</span>
            </header>
            <main>
              <div className="col-md-8">
                <p className="fs-5 mb-0">{eventData.address}</p>
                <p className="fs-5 mb-0">Suite 204</p>
                <p className="fs-5 mb-0">{`${eventData.city} ${eventData.state}, ${eventData.zip}`}</p>
              </div>
              <hr className="col-3 col-md-2 mb-5" />
              <div className="col-md-8">
                <h5>Event Description</h5>
                <p className="fs-5 mb-0">{eventData.description}</p>
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
                  <p>{eventData.time}</p>
                </div>
                <div className="col-md-6">
                  <h2>Attendees</h2>
                  <ul className="icon-list">
                    {attendees &&
                      attendees.map((person) => {
                        return <Attendee key={person.id} person={person} />
                      })}
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
