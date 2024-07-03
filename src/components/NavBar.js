import React from "react"

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="/Images/logo1x.png" alt="Logo" width="50" className="d-inline-block align-text-top" />
            <span className="mx-3 fs-4">EventFlow</span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
