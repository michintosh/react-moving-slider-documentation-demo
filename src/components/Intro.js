import React, { useState } from "react"

import "./Intro.css"
import MovingSlider from "./MovingSlider/MovingSlider"
import SquareButton from "./Navbar/SquareButton"

function Intro({images }) {
  return (
    <div className="miniwindow-container">
      <MovingSlider
        numColumns={80}
        images={images}
        minHeight={40}
      />
      <div className={`info`}>
        <div>
          <SquareButton />
          <h1>React Moving Slider</h1>
          <p>
            A simple <bold>React</bold> component that displays your images using CSS animations and transitions.<br/>
            It supports click events for sliding and moving through an array of images.
            Scroll down to learn more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
