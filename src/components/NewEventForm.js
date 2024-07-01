import React, { useEffect, useRef } from "react"
import { TempusDominus } from "@eonasdan/tempus-dominus"

const NewEventForm = ({ formData, handleFormChange, handleFormSubmit }) => {
  const { eventName, address, address2, state, zip, description, availableSeats } = formData
  const eventNameRef = useRef()
  const addressRef = useRef()
  const address2Ref = useRef()
  const stateRef = useRef()
  const zipRef = useRef()
  const descriptionRef = useRef()
  const availableSeatsRef = useRef()

  useEffect(() => {
    const inputElement = document.getElementById("datetimepicker1")
    const picker = new TempusDominus(inputElement, {
      display: {
        icons: {
          type: "icons",
          time: "fa fa-clock",
          date: "fa fa-calendar",
          up: "fa fa-chevron-up",
          down: "fa fa-chevron-down",
          previous: "fa fa-chevron-left",
          next: "fa fa-chevron-right",
          today: "fa fa-calendar-check-o",
          clear: "fa fa-trash",
          close: "fa fa-times",
        },
      },
    })

    document.getElementById("datetimepicker1").addEventListener("change.td", (e) => {
      handleFormChange({
        ...e.detail,
        name: "dateTime",
        value: `${e.detail.date.toLocaleDateString()} ${e.detail.date.toLocaleTimeString()}`,
      })
    })

    return () => {
      inputElement.removeEventListener("change.td", (e) => {})
    }
  }, [])

  const handleChange = (_e, ref) => handleFormChange(ref.current)
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
        <input type="date" id="birthday" name="birthday"></input>
        <input type="time" id="appt" name="appt"></input>
        <div className="row g-5 justify-content-center">
          <div className="col-md-12 col-lg-7">
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12">
                  <h5>Event name</h5>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      // value={eventName}
                      ref={eventNameRef}
                      onChange={(e) => handleChange(e, eventNameRef)}
                      name="eventName"
                      className="form-control"
                      placeholder="Jimmy Eat World Concert"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                {/* EVENT LOCATION */}
                <div className="col-12">
                  <h5>Event Location</h5>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    ref={addressRef}
                    onChange={(e) => handleChange(e, addressRef)}
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
                    ref={address2Ref}
                    onChange={(e) => handleChange(e, address2Ref)}
                    name="address2"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    ref={stateRef}
                    onChange={(e) => handleChange(e, stateRef)}
                    name="state"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Please provide a valid state.</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    ref={zipRef}
                    onChange={(e) => handleChange(e, zipRef)}
                    name="zip"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="mb-3">Description</h5>
              <div className="col-12">
                <textarea
                  ref={descriptionRef}
                  onChange={(e) => handleChange(e, descriptionRef)}
                  name="description"
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="What is your event about?"
                ></textarea>
              </div>
              <hr className="my-4" />
              {/* INFORMATION */}
              <h5 className="mb-3">Information</h5>
              <div className="col-12 mb-5">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label htmlFor="datetimepicker1">Select Date and Time</label>
                        <div
                          className="input-group date"
                          id="datetimepicker1"
                          data-td-target-input="nearest"
                          data-td-target-toggle="nearest"
                        >
                          <span
                            data-td-target="#datetimepicker1"
                            data-td-toggle="datetimepicker"
                            className="input-group-text"
                            id="basic-addon1"
                          >
                            <i className="fa fa-calendar"></i>
                          </span>
                          <input
                            type="text"
                            readOnly
                            name="dateTime"
                            className="form-control datetimepicker-input"
                            data-td-target="#datetimepicker1"
                          />
                          <div
                            className="input-group-append"
                            data-td-target="#datetimepicker1"
                            data-td-toggle="datetimepicker"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-5">
                <label htmlFor="seats" className="form-label">
                  Availble Seats
                </label>
                <input
                  type="number"
                  ref={availableSeatsRef}
                  onChange={(e) => handleChange(e, availableSeatsRef)}
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
