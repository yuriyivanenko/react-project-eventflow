import React from "react"
import BackButton from "../BackButton"
import { NewEventFormProps } from "../types"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

type FormValues = {
  eventName: string
  address: string
  address2: string
  city: string
  state: string
  zip: string
  description: string
  date: string
  time: string
  eventOpen: boolean
}

const NewEventForm: React.FC <NewEventFormProps> = ({ onFormSubmit }) => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    onFormSubmit(data)
  }

  return (
    <main className="container mb-5">
      <BackButton />
      <div className="py-5 text-center">
        <h2>New Event Form</h2>
      </div>
      <div className="row g- justify-content-center">
        <div className="col-md-12 col-lg-7">
          <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row g-3">
              <div className="col-12">
                <h5>Event name</h5>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    {...register("eventName", {
                      required: "Event name is required"
                    })}
                    className="form-control"
                    placeholder="Jimmy Eat World Concert"
                    required
                  />
                </div>
                  <p>{errors.eventName?.message}</p>
              </div>
              <hr className="my-4" />
              <div className="col-12">
                <h5>Event Location</h5>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", {
                    required: "Event address is required"
                  })}
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
              </div>
              <p>{errors.address?.message}</p>
              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  {...register("address2")}
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
                  {...register("city", {
                    required: "Event city is required"
                  })}
                  className="form-control"
                  id="city"
                  placeholder="New York"
                  required
                />
              </div>
              <p>{errors.address2?.message}</p>
              <div className="col-md-2">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  {...register("state", {
                    required: "Event state is required"
                  })}
                  className="form-control"
                  id="state"
                  placeholder="NY"
                  required
                />
              </div>
              <p>{errors.city?.message}</p>
              <div className="col-md-4">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  {...register("zip", {
                    required: "Event zip code is required"
                  })}
                  className="form-control"
                  id="zip"
                  placeholder="19000"
                  required
                />
              </div>
              <p>{errors.zip?.message}</p>
            </div>
            <hr className="my-4" />
            <h5 className="mb-3">Event description</h5>
            <div className="col-12">
              <textarea
                {...register("description", {
                  required: "Event description is required"
                })}
                className="form-control"
                aria-label="With textarea"
                placeholder="This will appear on your event page"
                required
              ></textarea>
            </div>
            <hr className="my-4" />
            <div className="col-md-6 mb-3">
              <h6>Date</h6>
              <input 
                type="date"
                {...register("date", {
                  required: "Event date is required"
                })}
                id="date"
              />
            </div>
            <div className="col-md-6 mb-3 mb-5">
              <h6>Time</h6>
              <input 
                type="time" 
                id="time" 
                {...register("time", {
                  required: "Event time is required"
                })}
              />
            </div>
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Create New Event
            </button>
          </form>
          <DevTool control={control}/>
        </div>
      </div>
    </main>
  )
}

export default NewEventForm
