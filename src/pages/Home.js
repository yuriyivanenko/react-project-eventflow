import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore"
import { db } from "../firebase"
import EventLink from "../components/EventLink"

const Home = () => {
  const navigate = useNavigate()
  const [eventsList, setEventsList] = useState(null)
  const handleNewProjectClick = () => navigate("/new_event")

  useEffect(() => {
    const fetchFiveEarliestEvents = async () => {
      try {
        const collectionRef = collection(db, "events")
        const q = query(collectionRef, orderBy("date", "asc"), limit(5))
        const querySnapShot = await getDocs(q)
        const eventsList = querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setEventsList(eventsList)
      } catch (error) {
        alert(error)
      }
    }
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
              <p>5 earliest events coming up</p>
              <ul className="icon-list">
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
