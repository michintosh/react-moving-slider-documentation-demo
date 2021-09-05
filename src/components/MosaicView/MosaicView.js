import React , { useState }from 'react'

import './MosaicView.css'

function MosaicView({ miniWindows, images }) {

    const [close, setClose] = useState(false)
    const [windows, setWindows] = useState(miniWindows)
    const [img, setImg] = useState(0)
    const [title, setTitle] = useState(0)
    
  const handleSlide = () => {
    if (!close) {        
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
      }

    return (
        <div
        className="mosaicview-container"
        onClick={handleSlide}
      >
        {[...Array(windows).keys()].map((key, idx) => {
          return (
            <div
              key={idx}
              className={`mosaicview ${close ? "__close" : ""}`}
              style={{
                height: `${Math.floor(Math.random() * 80) + 5}%`,
                backgroundImage: `url(${images[img]})`,
                animationDelay: `-${Math.floor(Math.random() * 10) + 1}s`,
              }}
            ></div>
          )
        })}

      </div>
    )
}

export default MosaicView
