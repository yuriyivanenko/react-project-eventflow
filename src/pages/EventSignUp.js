import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

const EventSignUp = () => {
  const { id } = useParams()
  const [eventDate, setEventData] = useState(null)

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

  const handleSignup = (e) => {
    e.preventDefault()
  }

  if (!eventDate)
    return (
      <div className="px-4 py-1 my-3 text-center">
        <h1>Loading...</h1>
      </div>
    )

  return (
    <>
      <div className="px-4 py-1 my-3 text-center">
        <h1 className="display-5 fw-bold">{eventDate.eventName}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{eventDate.description}</p>
          <p className="lead mb-4">{`Join us on ${eventDate.date} at ${eventDate.time}`}</p>
          <h5 className=" mb-0">Location</h5>
          <p className="lead mb-0">{eventDate.address}</p>
          <p className="lead mb-0">{eventDate.address2}</p>
          <p className="lead mb-5">{`${eventDate.state}, ${eventDate.zip}`}</p>
          <form onSubmit={handleSignup}>
            <h1 class="h3 mb-3 fw-normal">Sign up for this event</h1>
            <div class="form-floating mb-4">
              <input type="text" class="form-control" id="firstName" placeholder="John" />
              <label for="firstName">First name</label>
            </div>
            <div class="form-floating mb-4">
              <input type="text" class="form-control" id="floatingPassword" placeholder="Smith" />
              <label for="floatingPassword">Last name</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EventSignUp
