import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import NavBar from "../components/NavBar"
import { db } from "../firebase"
import EventLink from "../components/EventLink"

const Home = () => {
  const navigate = useNavigate()
  const [eventsList, setEventsList] = useState(null)
  const handleNewProjectClick = () => navigate("/new_event")

  const fetchFiveEarliestEvents = async () => {
    try {
      const collectionRef = collection(db, "events")
      const q = query(collectionRef, orderBy("date", "asc"), where("eventOpen", "==", true))
      const querySnapShot = await getDocs(q)
      const eventsList = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      eventsList.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
      })
      setEventsList(eventsList)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchFiveEarliestEvents()
  }, [])

  return (
    <>
      <NavBar />
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <h1>Get started with EventFlow</h1>
          <div className="mb-5">
            <button className="btn btn-primary btn-lg px-4" onClick={handleNewProjectClick}>
              Create New Event
            </button>
          </div>
          <hr className="col-3 col-md-2 mb-5" />
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Your events</h2>
              <ul className="list-unstyled">
                {eventsList &&
                  eventsList.map((event) => {
                    return <EventLink key={event.id} eventInfo={event} />
                  })}
              </ul>
            </div>
          </div>
        </main>
        <footer className="pt-5 my-5 text-muted border-top">Created by Yuriy &middot; &copy; 2024</footer>
      </div>
    </>
  )
}

export default Home
