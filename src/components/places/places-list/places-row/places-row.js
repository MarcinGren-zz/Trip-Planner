import React from 'react'
import styled from 'styled-components'

const StyledPlacesRow = styled.tr`
  background: blue;

  & td {
    word-wrap: break-word;
  }
`

const PlacesRow = ({ place }) => {
  return (
    <StyledPlacesRow>
      <td>{place.name}</td>
      <td>{place.day}</td>
      <td>{place.category}</td>
    </StyledPlacesRow>
  )
}

export default PlacesRow