import React, { Component } from 'react'
import styled from 'styled-components'
import PlaceRow from './places-row/places-row'

const StyledPlacesList = styled.table`
  background: orange;
  width: 100%;
  table-layout: fixed;
`

const tableHeaders = ['Item', 'Day', 'Category']

const PlacesList = ({ places }) => {
  return (
    <StyledPlacesList>
      <tr>
        {tableHeaders.map(header => (
          <th>{header}</th>
        ))}
      </tr>
      {places.map(place => (
        <PlaceRow place={place} />
      ))}
    </StyledPlacesList>
  )
}

export default PlacesList