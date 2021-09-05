import React from "react"
import "../components/main.css"
import Navbar from "../components/Navbar"
import Entry from "../components/Entry"
import Intro from "../components/Intro"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro
        miniWindows={80}
        images={[
          "https://picsum.photos/800/500?random=1",
          "https://picsum.photos/800/500?random=2",
          "https://picsum.photos/800/500?random=3",
        ]}
        titles={[
          "Do electric sheeps exists?",
          "Play it code",
          "Some virtual world exists",
        ]}
      />
      <div style={{ maxWidth: `1000px`, margin: `0 auto` }}>
        <Entry
          title="Abnormal ebsula"
          subtitle="Live installation view"
          date="12.02.2021, Live peninsula"
        />

        <Entry
          title="Reliefs and others"
          subtitle="Another coding sessione"
          date="12—24.02.2021, Madison Square"
        />
      </div>
    </div>
  )
}
