import React from "react"

import "./Entry.css"
//import MovingSlider from "./MovingSlider/MovingSlider"

import MovingSlider from "react-moving-slider"

function Entry() {
  return (
    <>
      <div className="EntryContainer">
        <h1>How to use it</h1>
      </div>
      <div className="EntryContainer">
        <div className="slider-container">
          <MovingSlider
            numColumns={50}
            images={[
              "https://picsum.photos/800/500?random=10",
              "https://picsum.photos/800/500?random=11",
              "https://picsum.photos/800/500?random=12",
            ]}
            minHeight={30}
            smartphoneWindows={15}
            speed={2}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="right-part">
            <p>
              The options for the slider are:
              <ul>
                <li>
                  <code>minHeight</code>: <i>number</i> : the minimal height that one
                  column can reach (in percentage and relative to the parent
                  container)
                </li>
                <li>
                  <code>maxHeight</code>: <i>number</i> : the maximal height that one column can
                  reach (in percentage and relative to the parent container)
                </li>
                <li>
                  <code>images</code>: <i>Array</i> : the array of images to be passed as
                  "background-image" value, if more than 1 is provided, the
                  handleSlide method will handle the transition between images
                  on click
                </li>
                <li>
                  <code>numColumns</code>: <i>number</i> : the number of columns to be displayed as
                  div with the background fixed image
                </li>
                <li>
                  <code>smartphoneNumColumns</code>: <i>number</i> : the number of columns to be
                  displayed as div with the background fixed image on a
                  smartphone screen
                </li>
                <li>
                  <code>fixedHeight</code>: <i>number</i> : if provided, the fixed height in pixel
                  that the slider will have
                </li>
                <li>
                  <code>fixedWidth</code>: <i>number</i> : if provided, the fixed width in pixel
                  that the slider will have
                </li>
                <li>speed: <i>number</i> : the animation speed in second </li>
              </ul>
            </p>

            <section>
              <h4 className="prop-title">minHeight</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  numColumns={30}
                  images={[
                    "https://picsum.photos/1200/1500?random=10",
                    "https://picsum.photos/1200/1500?random=12",
                  ]}
                  minHeight={50}
                  smartphoneNumColumns={15}
                  speed={3}
                />
              </div>
              <p>
                An example with a minimun height of 50% given a parent container
                with an height of 300px.
               
              </p>
              <span className="default">Default value : <code>20</code></span>
            </section>

            <section>
              <h4 className="prop-title">maxHeight</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  numColumns={30}
                  images={[
                    "https://picsum.photos/1200/1500?random=10",
                    "https://picsum.photos/1200/1500?random=12",
                  ]}
                  maxHeight={50}
                  smartphoneNumColumns={15}
                  speed={3}
                />
              </div>
              <p>
                An example with a maximum height of 50% given a parent container
                with an height of 300px.
              </p>
              <span className="default">Default value : <code>100</code></span>
            </section>

            <section>
              <h4 className="prop-title">numColumns</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  numColumns={5}
                  images={[
                    "https://picsum.photos/1200/1500?random=150",
                    "https://picsum.photos/1200/1500?random=152",
                  ]}
                  maxHeight={50}
                  smartphoneNumColumns={15}
                  speed={3}
                />
              </div>
              <p>
                The number of columns that should be created for visualizing the images (on desktop).
                In this example, the <code>numColumns</code> value is set to 5
              </p>
              <span className="default">Default value : <code>30</code></span>
            </section>

            <section>
              <h4 className="prop-title">images</h4>
              <span className="prop-type">Array</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  images={[
                    "https://picsum.photos/1200/1500?random=150",
                    "https://picsum.photos/1200/1500?random=612",
                  ]}
                />
              </div>
              <p>
                They array or URLs for the image source to be displayed as background image for each slide.
                In this documentation, all of the images are taken from <a href="https://picsum.photos/">Picusm Photos</a>.<br />
                If more than 1 image is provided, the slider will automatically include the <code>onClick</code> event to slide between those values.
              </p>
              <span className="default">Default value : <code>null</code></span>
            </section>

            <section>
              <h4 className="prop-title">smartphoneNumColumns</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  images={[
                    "https://picsum.photos/1200/1500?random=0",
                    "https://picsum.photos/1200/1500?random=2",
                  ]}
                  smartphoneNumColumns={5}
                />
              </div>
              <p>
                The number of columns that should be created for visualizing the images (on smartphone).
                In this example, the <code>smartphoneNumColumns</code> value is set to 5
              </p>
              <span className="default">Default value : <code>15</code></span>
            </section>


            <section>
              <h4 className="prop-title">fixedHeight</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  images={[
                    "https://picsum.photos/1200/1500?random=0",
                    "https://picsum.photos/1200/1500?random=2",
                  ]}
                  fixedHeight={100}
                />
              </div>
              <p>
               If provided, the slider will ignore it's parent height and will use this value in pixels insted.
                In this example, the <code>fixedHeight</code> value is set to 100px.
              </p>
              <span className="default">Default value : <code>null</code></span>
            </section>

            <section>
              <h4 className="prop-title">fixedWidth</h4>
              <span className="prop-type">number</span>
              <div style={{ height: `300px` }} className="moving-container">
                <MovingSlider
                  images={[
                    "https://picsum.photos/1200/1500?random=0",
                    "https://picsum.photos/1200/1500?random=2",
                  ]}
                  fixedWidth={200}
                />
              </div>
              <p>
               If provided, the slider will ignore it's parent height and will use this value in pixels insted.
                In this example, the <code>fixedWidth</code> value is set to 200px.
              </p>
              <span className="default">Default value : <code>null</code></span>
            </section>

          </div>
        </div>
      </div>
    </>
  )
}

export default Entry
