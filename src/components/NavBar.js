import React from "react"

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/Images/logo192.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            EventFlow
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
