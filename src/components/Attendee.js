import React from "react"

const Attendee = ({ person: { firstName, lastName } }) => {
  return (
    <li>
      <p className="mb-0">{`${firstName} ${lastName}`}</p>
    </li>
  )
}

export default Attendee
