import React, { Component } from 'react'
import styled from 'styled-components'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { SearchBox }  from 'react-google-maps/lib/components/places/SearchBox'
import { DEFAULT_MAP_OPTIONS } from '../../../../constants/constants'

const StyledInput = styled.input`
  /* temp values for now */
  border: 1px solid transparent;
  width: 240px;
  height: 32px;
  margin-top: 27px;
  padding: 0 12px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`

class MapWithSearchBox extends Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
    this.searchBoxRef = React.createRef()

    this.state = {
      bounds: null,
      center: {
        lat: 48.2081743, lng: 16.37381890000006
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

      this.props.onPlaceUpdate(foundPlace)
    }

  render() {
    return (
      <GoogleMap
        ref={this.mapRef}
        defaultZoom={13}
        center={this.state.center}
        onBoundsChanged={this.onBoundsChanged}
        options={DEFAULT_MAP_OPTIONS}
      >
        <SearchBox
          ref={this.searchBoxRef}
          bounds={this.state.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={this.onPlacesChanged}
        >
          <StyledInput type="text" placeholder="First find what you want to visit here!" />
        </SearchBox>
        {this.state.marker ? <Marker position={this.state.marker} /> : null}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapWithSearchBox))