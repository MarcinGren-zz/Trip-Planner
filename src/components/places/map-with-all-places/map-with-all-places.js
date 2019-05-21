import React, { Component } from 'react'
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps")
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel")

const MapWithAllPlaces = ({ places }) => (
    <GoogleMap
      defaultZoom={13}
      //just some temp value atm in Vienna
      defaultCenter={{ lat: 50.0910966, lng: 14.401616500000046 }}
    >
    {places.map(place =>
      <MarkerWithLabel
        position={{ lat: place.lat, lng: place.long }}
        labelAnchor={new google.maps.Point(6, 40)}
        // styling to be fixed
        labelStyle={{color: "black", borderRadius:"50%", background: "rgba(255,255,255,0.5)", fontSize: "20px"}}
      >
      {/* need to create unique index */}
      <div>1</div>
      </MarkerWithLabel>
    )}
    </GoogleMap>
    )

export default withScriptjs(withGoogleMap(MapWithAllPlaces))