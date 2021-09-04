import React, { useState } from "react"

import "./Intro.css"
import SquareButton from "./Navbar/SquareButton"

function Intro({ miniWindows, images, titles }) {
  const [close, setClose] = useState(false)

  const [windows, setWindows] = useState(miniWindows)

  let x = 0
  let y = 0

  const [ax, setAX] = useState(0)
  const [ay, setAY] = useState(0)

  const [img, setImg] = useState(0)
  const [title, setTitle] = useState(0)

  const handleSlide = () => {
    setClose(true)
    setTimeout(() => {
      console.log("changing")
      if (img < images.length - 1) {
        setImg(img + 1)
        setTitle(title + 1)
      } else {
        setImg(0)
        setTitle(0)
      }
      setTimeout(() => {
        setClose(false)
      }, 500)
    }, 1000)
  }
  const handleScroll = e => {
    //console.log("scroll")
    //setX(e.pageX)
    //setY(e.pageY)
    x = e.pageX
    y = e.pageY
    //console.log(x,y)
  }
  const handle3D = e => {
    let tmp_ax = -(300 / 2 - e.nativeEvent.layerX) / 10
    let tmp_ay = (200 / 2 - e.nativeEvent.layerY) / 5
    setAX(tmp_ax)
    setAY(tmp_ay)
    //console.log(e)
  }

  return (
    <div
      className="miniwindow-container"
      onClick={handleSlide}
      onMouseMove={e => {
        handleScroll(e)
      }}
    >
      <div className="opacizer"></div>
      {[...Array(windows).keys()].map((key, idx) => {
        return (
          <div
            className={`miniwindow ${close ? "__close" : ""}`}
            style={{
              height: `${Math.floor(Math.random() * 75) + 15}vh`,
              backgroundImage: `url(${images[img]})`,
              animationDelay: `-${Math.floor(Math.random() * 10) + 1}s`,
            }}
          ></div>
        )
      })}
      <div
        className={`info ${close ? "__close" : ""}`}

      >
              <div>
              <SquareButton/>
                  <h1>{titles[title]}</h1>
                  <p>
                      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                      animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                      aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                      pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                      commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                      proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                      eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                      Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                      culpa duis.
                  </p>
                  
        </div>
      </div>
    </div>
  )
}

export default Intro
