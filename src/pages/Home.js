import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore"
import { db } from "../firebase"
import EventLink from "../components/EventLink"

const Home = () => {
  const [eventsList, setEventsList] = useState(null)
  const navigate = useNavigate()

  const handleNewProjectClick = () => {
    navigate("/new_event")
  }

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
          {/* <p className="fs-5 col-md-8">
              Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones
              example featuring some basic HTML and helpful links. Download all our examples to get started.
            </p> */}

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

            <div className="col-md-6">
              <h2>Guides</h2>
              <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
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
        <footer className="pt-5 my-5 text-muted border-top">Created by the Yuriy &middot; &copy; 2024</footer>
      </div>
    </>
  )
}

export default Home
