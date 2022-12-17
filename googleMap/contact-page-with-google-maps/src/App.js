import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import MapSection from './components/map/Map' // import the map here

const locations = [{
  address: 'JYOTIIIII',
  lat: 12.42216,
  lng: 77.08427,
},
{
  address: 'afa',
  lat: 12.42216,
  lng: 77.08627}]


// import './App.css'

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <DisclaimerSection />
      <FooterSection />
      <MapSection locations={locations} zoomLevel={17}/>

    </div>
  )
}

export default App

