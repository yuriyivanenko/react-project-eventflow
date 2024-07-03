import React from "react"
import { useNavigate } from "react-router-dom"

const EventLink = ({ eventInfo: { id, eventName, date } }) => {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate(`/event/${id}`)
  }

  return (
    <li id={id} onClick={navigateTo}>
      <a href="" className="icon-link mb-1">
        <i class="bi bi-arrow-right-circle-fill mx-2"></i>
        {eventName} on {date}
      </a>
    </li>
  )
}

export default EventLink
