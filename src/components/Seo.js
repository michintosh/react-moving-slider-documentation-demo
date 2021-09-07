import React from 'react'
import {Helmet} from 'react-helmet'

function Seo() {
    return (
        <>
        <Helmet>
          {/* General tags */}
          <title>{"React Moving Slider"}</title>
          <meta name="description" content="A simple React component for a different slider visualization" />
          <meta name="image" content="https://i.ibb.co/ykFSsNq/Schermata-2021-09-07-alle-12-21-03.png" />
  
          {/* OpenGraph tags */}
          <meta property="og:url" content={"https://michelangeloalesi.it/react-moving-slider"} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={"React Moving Slider"} />
          <meta property="og:description" content="A simple React component for a different slider visualization" />
          <meta property="og:image" content="https://i.ibb.co/ykFSsNq/Schermata-2021-09-07-alle-12-21-03.png" />
  
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={"Michelangelo Alesi"} />
          <meta name="twitter:title" content={"React Moving Slider"} />
          <meta name="twitter:description" content="A simple React component for a different slider visualization"  />
          <meta name="twitter:image" content="https://i.ibb.co/ykFSsNq/Schermata-2021-09-07-alle-12-21-03.png" />
        </Helmet>
      </>
    )
}

export default Seo
