import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold mb-5">Oh no this is a 404!</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Looks like the page you are looking for does not exist!</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onClick={handleClick} className="btn btn-primary btn-lg px-4 gap-3">
                  Back Home!
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
