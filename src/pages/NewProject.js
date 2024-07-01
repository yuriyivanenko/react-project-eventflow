import React from "react"
import NavBar from "../components/NavBar"

const NewEvent = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="py-5 text-center">
          <h2>New Event Form</h2>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-md-12 col-lg-7">
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                {/* <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                  <div className="invalid-feedback">Valid first name is required.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                  <div className="invalid-feedback">Valid last name is required.</div>
                </div> */}

                <div className="col-12">
                  <h5>Event name</h5>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="eventName"
                      placeholder="Jimmy Eat World Concert"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />

                {/* <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">Please enter a valid email address htmlFor shipping updates.</div>
                </div> */}
                <div className="col-12">
                  <h5>Event Location</h5>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">Please select a valid country.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">Please provide a valid state.</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="zip" placeholder="" required />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="mb-3">Description</h5>
              <div className="col-12">
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  placeholder="What is your event about?"
                ></textarea>
              </div>
              <hr className="my-4" />

              <h5 className="mb-3">Information</h5>
              <div className="col-12"></div>

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default NewEvent
