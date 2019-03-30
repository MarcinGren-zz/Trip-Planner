import { ADD_PLACE } from '../actions/index'

const mockedState =[{
  name: 'Prague Castle',
  day: 1,
  category: 'Sightseeing',
  placeId: 'ChIJ6dXlGemUC0cRUfsgXBCvACY',
  long: 14.401616500000046,
  lat: 50.0910966
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