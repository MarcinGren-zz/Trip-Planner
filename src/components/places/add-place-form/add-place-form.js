import React, { Component } from 'react'
import styled from 'styled-components'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MapComponent from './map'
import MapWithSearchBox from './map-with-search-box/map-with-search-box'
import StyledInsideMapDivSmall from '../../common/inside-map-div-small'
import { SIGHTSEEING, LIST_OF_PLACES_CATEGORIES } from '../../../constants/constants'

const StyledAddPlaceForm = styled.form`
  display: flex;
  flex-direction: row;

  & .left-side {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

`

class AddPlaceForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      day: null,
      category: SIGHTSEEING,
      placeId: '',
      long: null,
      lat: null
    }

    this.itemRef = React.createRef()
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handlePlaceUpdate = this.handlePlaceUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handlePlaceUpdate(place) {
    this.setState({
      placeId: place.place_id,
      long: place.geometry.location.lng(),
      lat: place.geometry.location.lat()
    })
  }

  handleSubmit() {
    const { item, day, category, placeId, long, lat } = this.state

    event.preventDefault()
    this.props.onAddPlace(item, day, category, placeId, long, lat)
    this.setState({
      item: '',
      day: null,
      category: SIGHTSEEING,
      placeId: '',
      long: null,
      lat: null
    })
    this.itemRef.current.focus()
  }

  render() {
    const {item, day, category } = this.state

    return (
      <StyledAddPlaceForm onSubmit={this.handleSubmit}>
        <div className='left-side'>
          <input name='item' class='item' type='text' ref={this.itemRef} value={item} onChange={this.handleFieldChange} />
          <input name='day' class='day' type='number' value={day} onChange={this.handleFieldChange} />
          <select name='category' class='category' value={category} required={true} onChange={this.handleFieldChange} >
            {LIST_OF_PLACES_CATEGORIES.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <button class='submit' type='submit'>Add</button>
        </div>
        <MapWithSearchBox 
          onPlaceUpdate={this.handlePlaceUpdate}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<StyledInsideMapDivSmall />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledAddPlaceForm>
    )
  }
}

export default AddPlaceForm