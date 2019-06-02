import React from 'react'
import styled from 'styled-components'
import AddPlaceForm from './add-place-form/add-place-form'
import MapWithAllPlaces from './map-with-all-places/map-with-all-places'
import PlacesList from './places-list/places-list'
import StyledInsideMapDivBig from '../common/inside-map-div-big'
import { DEFAULT_MAP_PROPS } from '../../constants/constants'

const StyledPlaces = styled.div`
  display: flex;
  flex-direction: column;
`

const Places = ({ places, addPlace }) => {
  return (

    <StyledPlaces>
      <AddPlaceForm onAddPlace={addPlace} places={places}/>
      <MapWithAllPlaces 
        places={places}
        containerElement={<StyledInsideMapDivBig />}
        {...DEFAULT_MAP_PROPS}
      />
      <PlacesList places={places} />
    </StyledPlaces>
  )
}

export default Places