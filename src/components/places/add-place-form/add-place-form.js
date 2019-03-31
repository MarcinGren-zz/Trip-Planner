import React, { Component } from 'react'
import styled from 'styled-components'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MapComponent from './map'
import MapWithSearchBox from './map-with-search-box'

const StyledAddPlaceForm = styled.form`
  background: pink;
  height: 1000px;
  width: 1000px;
`

class AddPlaceForm extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <StyledAddPlaceForm>
        <MapWithSearchBox 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledAddPlaceForm>
    )
  }
}

export default AddPlaceForm