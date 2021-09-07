import React, { useState } from "react"

import "./NavbarTopItem.css"
import SquareButton from "./SquareButton"

function NavbarTopItem({ title,content }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="NavbarTopItem">
      <div className="NavbarTopItem-header">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <div className="opener" onClick={handleClick}>
            {open && <span>↑</span>}
            {!open && <span>↓</span>}
          </div>
        </div>
      </div>
      <div  className={`NavbarTopItem-innercontent ${open ? "__open" : ""}`}>
        
        <div dangerouslySetInnerHTML={{__html: content}}>
         
        </div>
      </div>
    </div>
  )
}

export default NavbarTopItem
