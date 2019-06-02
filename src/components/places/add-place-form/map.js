import React, { Component } from 'react'
import styled from 'styled-components'
import { withGoogleMap, GoogleMap, Marker, withScriptjs, DirectionsRenderer  } from 'react-google-maps'
import SearchBox from "react-google-maps/lib/components/places/SearchBox"

const pathCoordinates = [
  { lat: 50.0910966, lng: 14.401616500000046 },
  { lat: 50.0894377, lng: 14.419407399999955 }
];

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 50.0910966, lng: 14.401616500000046 }}
  >
              {/* <DirectionsRenderer
                strokeColor='#f68f54'
                from={{ lat: 50.0910966, lng: 14.401616500000046 }}
                to={{ lat: 50.0894377, lng: 14.419407399999955 }}

            /> */}
  </GoogleMap>

))

export default MapComponent