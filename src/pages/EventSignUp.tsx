import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, addDoc, collection } from "firebase/firestore"
import MoonLoader from "react-spinners/ClipLoader"
import { db } from "../firebase"

interface FormData {
  firstName: string;
  lastName: string
}

const EventSignUp: React.FC = () => {
  const { id } = useParams()
  const [eventDate, setEventData] = useState<any>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  })

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const fetchEventData = async () => {
    try {
      const docRef = doc(db, "events", id as string)
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

  const handleSignup = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await addDoc(collection(db, `events/${id}/attendees`), formData)
      setFormData({
        firstName: "",
        lastName: "",
      })
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  useEffect(() => {
    fetchEventData()
  }, [])

  if (!eventDate)
    return (
      <div className="container text-center">
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
      <div className="px-4 py-1 my-3 text-center">
        <h1 className="display-5 fw-bold">{eventDate.eventName}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{eventDate.description}</p>
          <p className="lead mb-4">{`Join us on ${eventDate.date} at ${eventDate.time}`}</p>
          <h5 className=" mb-0">Location</h5>
          <p className="lead mb-0">{eventDate.address}</p>
          <p className="lead mb-0">{eventDate.address2}</p>
          <p className="lead mb-5">{`${eventDate.city} ${eventDate.state}, ${eventDate.zip}`}</p>
          <form onSubmit={handleSignup}>
            <h1 className="h3 mb-3 fw-normal">Sign up for this event</h1>
            <div className="form-floating mb-4">
              <input
                value={formData.firstName}
                onChange={handleFormChange}
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                placeholder="John"
                required
              />
              <label htmlFor="firstName">First name</label>
            </div>
            <div className="form-floating mb-4">
              <input
                value={formData.lastName}
                onChange={handleFormChange}
                name="lastName"
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Smith"
                required
              />
              <label htmlFor="floatingPassword">Last name</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EventSignUp
