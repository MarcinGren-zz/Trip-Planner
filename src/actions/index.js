export const ADD_EXPENSE = 'ADD_EXPENSE'
export const ADD_PLACE = 'ADD_PLACE'

export const addExpense = (name, cost, category) => ({
  type: ADD_EXPENSE,
  name,
  cost,
  category
})

export const addPlace = (name, day, category, placeId, long, lat) => ({
  type: ADD_PLACE,
  name,
  day,
  category,
  placeId,
  long,
  lat
})