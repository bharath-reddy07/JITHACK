import React from 'react'
import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import MapSection from './components/map/Map' // import the map here
import HeatMap from './components/map/HeatMap'


function App({locations}) {

  return (
    <div className="App">
      <IntroSection />
      <MapSection locations={locations} zoomLevel={17}/>
      <HeatMap locations={locations} zoomLevel={17}/> 
      {/* <ContactSection /> */}
      {/* <DisclaimerSection /> */}
      {/* <FooterSection /> */}
      
    </div>
  )}

export default App


