import React from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 1

type FormValues = {
  username: string
  email: string
  channel: string
}

const Form: React.FC = () => {
  const form = useForm<FormValues>()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState

  renderCount++

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data)
  }

  return(
    <div className="container">
      <div className="row justify-content-center">
        <p>Render Count: {renderCount / 2}</p>
        <div className="col-md-6">
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)} noValidate>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" {...register("username", {
                required: "Username is required"
              })} />
              <p>{errors.username?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid Email format"
                }
              })} />
              <p>{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="channel" className="form-label">Channel</label>
              <input type="text" className="form-control" id="channel" {...register("channel", {
                required: "Channel is required"
              })} />
              <p>{errors.channel?.message}</p>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <DevTool control={control}/>
        </div>
      </div>
    </div>
  )
}

export default Form
