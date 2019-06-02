import { ADD_PLACE } from '../actions/index'

const mockedState =[{
  name: 'Belvedere',
  day: 1,
  category: 'Sightseeing',
  placeId: 'ChIJpZ4LAn0HbUcRB3aToFL8ZUo',
  long: 16.38095469999996,
  lat: 48.1915585
}, {
  name: 'Albertina',
  day: 1,
  category: 'Sightseeing',
  placeId: 'ChIJwVp-8psHbUcRuN43n5iK72Y',
  long: 16.368182400000023,
  lat: 48.2046992
}, {
  name: 'Rathaus',
  day: 1,
  category: 'Eating Out',
  placeId: 'ChIJ_WDSuJUHbUcR2QUpvg7vqR4',
  long: 16.357248600000048,
  lat: 48.21086849999999
}]

const places = (state = mockedState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return [
        ...state,
        {
          name: action.name,
          day: action.day,
          category: action.category,
          placeId: action.placeId,
          long: action.long,
          lat: action.lat
        }
      ]

      default:
        return state
  }
}

export default places