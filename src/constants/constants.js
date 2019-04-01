import React from 'react'

export const TRANSPORTATION = 'Transportation'
export const FOOD = 'Food'
export const LODGING = 'Lodging'
export const SIGHTSEEING = 'Sightseeing'
export const OTHER = 'Other'
export const ENTERTAINMENT = 'Entertainment'
export const FUN_ACTIVITIES = 'Fun Activities'
export const LIST_OF_EXPENSE_CATEGORIES = [TRANSPORTATION, FOOD, LODGING, SIGHTSEEING, OTHER]
export const LIST_OF_PLACES_CATEGORIES = [SIGHTSEEING, FOOD, ENTERTAINMENT, FUN_ACTIVITIES, OTHER]

export const DEFAULT_MAP_OPTIONS = {
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false
}

export const DEFAULT_MAP_PROPS = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  mapElement: <div style={{ height: `100%` }} />
}