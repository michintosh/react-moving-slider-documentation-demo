import React, { useState } from "react"

import NavbarTopItem from "./Navbar/NavbarTopItem"

import "./Navbar.css"


const data = [
  {
    title: "Installation",
    content: `
      <p>
      Run <code>npm install xxxx-xxxxx</code><br/>
      Then, in your component, import at the top with <code>import XXXXX from XXXXX</code>
      </p>
    `
  },
  {
    title: "Basic Setup",
    content: `
      <p>
      The most basic setup is:
      <pre>
        <  MosaicView
            images={[
              "https://picsum.photos/800/500?random=10",
              "https://picsum.photos/800/500?random=11",
              "https://picsum.photos/800/500?random=12",
            ]}
          />
      </pre>
      This will setup the viewer with a basic slider, given a parent with a known width and height
      </p>
    `
  }
]

function Navbar() {
  /* 
        The Navbar requires NavbarTopItem, which
        is the part with the border on top
    */

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="Navbar-Container">
        {data.map(el => {
            return <NavbarTopItem key={el.title} title={el.title} content={el.content} />
        })}
      </div>
    </>
  )
}

export default Navbar

/* We evenutaly will put a Graphql query to render the items of the menu */
/* REQUIRED — Navbar top items */
