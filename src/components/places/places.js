import React from 'react'
import styled from 'styled-components'
import PlacesList from './places-list/places-list'
import AddPlaceForm from './add-place-form/add-place-form'

const StyledPlaces = styled.div`
  display: flex;
  flex-direction: column;
`

const Places = ({ places, addPlace }) => {
  return (

    <StyledPlaces>
      <AddPlaceForm onAddPlace={addPlace} places={places}/>
      <PlacesList places={places} />
    </StyledPlaces>
  )
}

export default Places