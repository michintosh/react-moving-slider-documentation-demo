import React from "react"
import { Link } from "gatsby"

import "./SquareButton.css"

function SquareButton({ link = "" , size = "default"}) {
  return (
    <>
      {link == "" && <div className={`${size == 'default' ? 'SquareButton' : 'SmallSquareButton'}`}>↗</div>}
      {link != "" && (
        <Link to={link}>
          <div className={`${size == 'default' ? 'SquareButton' : 'SmallSquareButton'}`}>↗</div>
        </Link>
      )}
    </>
  )
}

export default SquareButton
