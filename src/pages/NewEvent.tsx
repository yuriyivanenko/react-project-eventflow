import React, { useState } from "react"
import NavBar from "../components/NavBar"
import NewEventForm from "../components/NewEventForm"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import { useNavigate } from "react-router-dom"
import convertDateTime from "../components/NewEventForm/convertDateTime.helper"

const NewEvent = () => {
  const navigate = useNavigate()

  const handleFormSubmit = async (data: object) => {
    console.log(data)
    try {
      const docRef = await addDoc(collection(db, "events"), convertDateTime(data))
      navigate(`/event/${docRef.id}`)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <>
      <NavBar />
      <NewEventForm onFormSubmit={handleFormSubmit} />
    </>
  )
}

export default NewEvent
