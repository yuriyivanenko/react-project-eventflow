import React, { useState } from "react"
import NavBar from "../components/NavBar"
import NewEventForm from "../components/NewEventForm"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

const NewEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    address: "",
    address2: "",
    state: "",
    zip: "",
    description: "",
    dateTime: "",
    availableSeats: "",
  })

  const handleFormChange = (ref) => {
    console.log(ref)
    setFormData({
      ...formData,
      [ref.name]: ref.name === "availableSeats" ? Number(ref.value) : ref.value,
    })
    console.log(formData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    // return
    try {
      await addDoc(collection(db, "events"), formData)
      alert("User added successfully!")
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
