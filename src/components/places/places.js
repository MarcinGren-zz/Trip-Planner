import React from 'react'
import styled from 'styled-components'
import PlacesList from './places-list/places-list'

const StyledPlaces = styled.div`
  background: blue;
  width: 50%;
`

const Places = ({ places, addPlace }) => {
  return (

    <StyledPlaces>
      <PlacesList places={places} />
    </StyledPlaces>
  )
}

export default Places