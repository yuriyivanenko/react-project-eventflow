import React from "react"
import { useNavigate } from "react-router-dom"

const BackButton: React.FC = () => {
  const navigate = useNavigate()
  const navigateBack = () => navigate(-1)

  return (
    <div className="mb-2 mt-1">
      <a className="btn btn-outline-dark btn px-2" onClick={navigateBack}>
        <i className="bi bi-box-arrow-in-left px-2"></i>Back
      </a>
    </div>
  )
}

export default BackButton
