import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'




import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

function renderMarkers(map, maps, locations) {

  locations.map((location)=>{
    new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.address
    })

  })
 
}

const Map = ({ locations, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Pothole Locations</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDhyEj3tv8G7rsKB7bkBYA57u7AZ4qlXM8' }}
        defaultCenter={locations[0]}
        defaultZoom={zoomLevel}

        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, locations)} 
      >
             
      </GoogleMapReact>
    </div>
  </div>
)


export default Map
