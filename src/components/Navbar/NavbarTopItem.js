import React, { useState } from "react"

import "./NavbarTopItem.css"
import SquareButton from "./SquareButton"

function NavbarTopItem({ title }) {
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
      <div className={`NavbarTopItem-innercontent ${open ? "__open" : ""}`}>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit
          nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
          minim nulla est proident. Nostrud officia pariatur ut officia. Sit
          irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
          officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
          proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
        <div>
          <iframe
            src="https://player.vimeo.com/video/498078764?autoplay=1&loop=1&autopause=0$muted=1"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default NavbarTopItem
