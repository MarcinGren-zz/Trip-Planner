import { ADD_PLACE } from '../actions/index'

const mockedState =[{
  name: 'Prague Castle',
  day: 1,
  category: 'Sightseeing',
  placeId: 'ChIJw7ckbB6VC0cRnyUSr4g8zyo',
  long: 14.401616500000046,
  lat: 50.0910966
}, {
  name: 'Prague Old Town',
  day: 1,
  category: 'Sightseeing',
  placeId: 'ChIJ6dXlGemUC0cRUfsgXBCvACY',
  long: 14.419407399999955,
  lat: 50.0894377
}, {
  name: 'Pizza Nuova',
  day: 1,
  category: 'Eating Out',
  placeId: 'ChIJCZlGiuqUC0cRbI2NYf9dwzo',
  long: 14.427775600000018,
  lat: 50.08944389999999
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