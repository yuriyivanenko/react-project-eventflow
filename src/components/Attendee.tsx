import React from "react"

interface AttendeeProps {
  person: {
    firstName: string;
    lastName: string
  }
}

const Attendee: React.FC<AttendeeProps> = ({ person: { firstName, lastName } }) => {
  return (
    <li>
      <p className="mb-0">{`${firstName} ${lastName}`}</p>
    </li>
  )
}

export default Attendee
