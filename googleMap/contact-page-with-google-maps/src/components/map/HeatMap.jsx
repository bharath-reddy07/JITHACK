import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'



import { BsFillCircleFill } from "react-icons/bs";



const HeatMap = ({ locations, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDhyEj3tv8G7rsKB7bkBYA57u7AZ4qlXM8' }}
        defaultCenter={locations[0]}
        defaultZoom={zoomLevel}
      >
        
        {
          locations.map((location)=> {return(<LocationPin
            lat={location.lat}
            lng={location.lng}                          //////////////USELESSSSSSSSSSSSSSS
            text={""}
          />)})
        }


        

      </GoogleMapReact>
    </div>
  </div>
)

const LocationPin = ({ text }) => (                     ////SHITTY OLD LOCATION PIN USELESS, WASTE
  <div className="pin">
    <BsFillCircleFill className="pin-icon" />           
    <p className="pin-text">{text}</p>
  </div>
)



export default HeatMap
