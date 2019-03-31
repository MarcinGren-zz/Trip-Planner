import React from 'react'
import styled from 'styled-components'
import PlacesList from './places-list/places-list'
import AddPlaceForm from './add-place-form/add-place-form'

const StyledPlaces = styled.div`
  background: blue;
  display: flex;
`

const Places = ({ places, addPlace }) => {
  return (

    <StyledPlaces>
      <PlacesList places={places} />
      <AddPlaceForm places={places}/>
    </StyledPlaces>
  )
}

export default Places