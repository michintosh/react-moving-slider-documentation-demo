import React, { useState } from "react"

import NavbarTopItem from "./Navbar/NavbarTopItem"

import "./Navbar.css"

import SquareButton from "./Navbar/SquareButton"

function Navbar() {
  /* 
        The Navbar requires NavbarTopItem, which
        is the part with the border on top
    */

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="Navbar-Container">
        <div
          className={`logo-container ${open ? "__open" : ""}`}
          onMouseEnter={() => {
            setOpen(true)
          }}
        >
          <img src="logo.png" />
        </div>
        <NavbarTopItem title="temporanea" />
        <NavbarTopItem title="aquiesce" />
        <NavbarTopItem title="remoret ips" />
        <div
          onMouseLeave={() => {
            setOpen(false)
          }}
          className={`verticalline ${open ? "__open" : ""}`}
        >
          <ul className={`left-menu ${open ? "__open" : ""}`}>
            <li className="menu-item">
              <span>Temporanea</span>
               <span style={{textAlign: `right`}}><SquareButton size="small"/></span>
            </li>

            <li className="menu-item"> 
              <span>Sit Quivi</span>
               <span style={{textAlign: `right`}}><SquareButton size="small"/></span>
            </li>
            <li className="menu-item">
            <span>Etnernamre</span>
               <span style={{textAlign: `right`}}><SquareButton size="small"/></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

/* We evenutaly will put a Graphql query to render the items of the menu */
/* REQUIRED — Navbar top items */
