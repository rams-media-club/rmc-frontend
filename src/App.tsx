import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Resources from "./Pages/Resources"
// import Extracurriculars from "./Pages/Extracurriculars"
import Announcements from "./Pages/Announcements"
import Contact from "./Pages/Contact"
import { Analytics } from '@vercel/analytics/react'
// import Showreel from "./Pages/Showreel"
// import SmoothScroll from "./Components/SmoothScroll"
// import Form from "./Pages/Form"
import PitchProposal from "./Pages/PitchProposal"

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      {/* <SmoothScroll /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          {/* extracurriculars; temporarily hidden for updating
            <Route path="/extracurriculars" element={<Extracurriculars />} />
            */}
          <Route path="/announcements" element={<Announcements />} />
          {/* showreel; temporarily hidden for updating
            <Route path="/showreel" element={<Showreel />} />
            */}
          {/* old in-house pitch proposal form; indefinitely disabled, replaced by Google Form
          <Route path="/form" element={<Form />} /> 
          */}
          <Route path="/form" element={<PitchProposal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
