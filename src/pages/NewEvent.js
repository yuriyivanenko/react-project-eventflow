import React, { useState } from "react"
import NavBar from "../components/NavBar"
import NewEventForm from "../components/NewEventForm"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useNavigate } from "react-router-dom"

const NewEvent = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    eventName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    description: "",
    date: "",
    time: "",
    availableSeats: "",
  })

  const handleFormChange = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.name === "availableSeats" ? Number(target.value) : target.value,
    })
  }

  const handleFormSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "events"), formData)
      navigate(`/event/${docRef.id}`)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <>
      <NavBar />
      <NewEventForm formData={formData} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
    </>
  )
}

export default NewEvent
