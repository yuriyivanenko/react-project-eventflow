import React from "react"

const NewEventForm = ({ formData, handleFormChange, handleFormSubmit }) => {
  const { eventName, address, address2, city, state, zip, description, date, time, availableSeats } = formData

  const handleChange = (e) => handleFormChange(e.target)
  const handleSubmit = (e) => {
    e.preventDefault()
    handleFormSubmit(e)
  }

  return (
    <>
      <main className="container mb-5">
        <div className="py-5 text-center">
          <h2>New Event Form</h2>
        </div>
        <div className="row g-5 justify-content-center">
          <div className="col-md-12 col-lg-7">
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <h5>Event name</h5>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      value={eventName}
                      onChange={handleChange}
                      name="eventName"
                      className="form-control"
                      placeholder="Jimmy Eat World Concert"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <div className="col-12">
                  <h5>Event Location</h5>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={handleChange}
                    name="address"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={address2}
                    onChange={handleChange}
                    name="address2"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="state" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={handleChange}
                    name="city"
                    className="form-control"
                    id="city"
                    placeholder="New York"
                    required
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={handleChange}
                    name="state"
                    className="form-control"
                    id="state"
                    placeholder="NY"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    value={zip}
                    onChange={handleChange}
                    name="zip"
                    className="form-control"
                    id="zip"
                    placeholder="19000"
                    required
                  />
                </div>
              </div>
              <hr className="my-4" />
              <h5 className="mb-3">Event description</h5>
              <div className="col-12">
                <textarea
                  value={description}
                  onChange={handleChange}
                  name="description"
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="This will appear on your event page"
                  required
                ></textarea>
              </div>
              <hr className="my-4" />
              <div className="col-md-6 mb-3">
                <h6>Date</h6>
                <input type="date" value={date} onChange={handleChange} id="date" name="date" required />
              </div>
              <div className="col-md-6 mb-3">
                <h6>Time</h6>
                <input type="time" id="time" value={time} onChange={handleChange} name="time" required />
              </div>
              <div className="col-md-5 mb-5">
                <label htmlFor="seats" className="form-label">
                  Available Seats
                </label>
                <input
                  type="number"
                  value={availableSeats}
                  onChange={handleChange}
                  name="availableSeats"
                  className="form-control"
                  id="seats"
                  required
                />
              </div>
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Create New Event
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default NewEventForm
