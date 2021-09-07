import React from "react"
import "../components/main.css"
import Navbar from "../components/Navbar"
import Entry from "../components/Entry"
import Intro from "../components/Intro"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <div>
      <Seo/>
      <Navbar />
      <Intro
        images={[
          "https://picsum.photos/800/500?random=1",
          "https://picsum.photos/800/500?random=2",
          "https://picsum.photos/800/500?random=3",
        ]}
      />
      <div style={{ maxWidth: `1000px`, margin: `0 auto` }}>
        <Entry/>

      </div>
    </div>
  )
}
