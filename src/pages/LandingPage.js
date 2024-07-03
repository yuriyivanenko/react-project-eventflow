import React from "react"
import { useLocation } from "react-router-dom"
import html2pdf from "html2pdf.js"
import QRCode from "qrcode.react"
import NavBar from "../components/NavBar"
import BackButton from "../components/BackButton"

const LandingPage = () => {
  const location = useLocation()
  const { id, eventName, address, address2, city, state, zip, description, date, time } = location.state

  const generatePDF = () => {
    const element = document.getElementById("pdf-content")
    const opt = {
      margin: 0,
      filename: `${eventName}-flyer.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }
    html2pdf().from(element).set(opt).save()
  }

  return (
    <>
      <NavBar />
      <div className="container mt-4 mb-0 text-start">
        <BackButton />
        <button className="btn btn-primary" onClick={generatePDF}>
          Generate PDF
        </button>
      </div>
      <div className="px-4 py-1 my-3 text-center" id="pdf-content">
        <h1 className="display-5 fw-bold">{eventName}</h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">{description}</p>
          <p className="lead mb-4">{`Join us on ${date} at ${time}`}</p>
          <h5 className=" mb-0">Location</h5>
          <p className="lead mb-0">{address}</p>
          <p className="lead mb-0">{address2}</p>
          <p className="lead mb-5">{`${city} ${state}, ${zip}`}</p>
          <p className="lead mb-3">Scan QR code to sign up</p>
          <QRCode
            value={JSON.stringify(`https://react-project-eventflow.vercel.app/event_signup/${id}`)}
            className="mb-5"
            size={150}
            fgColor="#000000"
            bgColor="#ffffff"
            level="H"
          />
        </div>
      </div>
    </>
  )
}

export default LandingPage
