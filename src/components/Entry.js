import React from "react"

import "./Entry.css"
import Intro from "./Intro"
import MosaicView from "./MosaicView/MosaicView"
import SquareButton from "./Navbar/SquareButton"

function Entry({ title, subtitle, date }) {
  return (
    <>
      <div className="EntryContainer">
        <h1>{title}</h1>
      </div>
      <div className="EntryContainer">
        <MosaicView
          miniWindows={50}
          images={[
            "https://picsum.photos/800/500?random=10",
            "https://picsum.photos/800/500?random=11",
            "https://picsum.photos/800/500?random=12",
          ]}
        />
        <div style={{ display: "flex" }}>
          <div className="left-part">
            <div className="metadata-container">
              <div className="title-container">{subtitle}</div>
              <div className="metadata-item">{date}</div>
              <div className="metadata-item">
                <SquareButton size="small" />
              </div>
            </div>
          </div>
          <div className="right-part">
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <h2>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Entry
