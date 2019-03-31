import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { SearchBox }  from 'react-google-maps/lib/components/places/SearchBox'

class MapWithSearchBox extends Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
    this.searchBoxRef = React.createRef()

    this.state = {
      bounds: null,
      center: {
        lat: 41.9, lng: -87.624
      },
      marker: '',
    }

    this.onBoundsChanged = this.onBoundsChanged.bind(this)
    this.onPlacesChanged = this.onPlacesChanged.bind(this)
  }
      
    onBoundsChanged() {
      this.setState({
        bounds: this.mapRef.current.getBounds(),
        center: this.mapRef.current.getCenter(),
      })
      }

    onPlacesChanged() {
      const places = this.searchBoxRef.current.getPlaces();
      const bounds = new google.maps.LatLngBounds();

      const foundPlace = places[0]

      console.log(JSON.stringify(places[0]))
    
      
      if (foundPlace.geometry.viewport) {
        bounds.union(foundPlace.geometry.viewport)
      } else {
        bounds.extend(foundPlace.geometry.location)
      }
      
      this.setState({
        center: foundPlace.geometry.location,
        marker: foundPlace.geometry.location,
      })
    }

  render() {
    return (
    <GoogleMap
    ref={this.mapRef}
    defaultZoom={15}
    center={this.state.center}
    onBoundsChanged={this.onBoundsChanged}
  >
    <SearchBox
      ref={this.searchBoxRef}
      bounds={this.state.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={this.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
      {this.state.marker ? <Marker position={this.state.marker} /> : null}
  </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapWithSearchBox))