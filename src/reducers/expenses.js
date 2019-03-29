import { ADD_EXPENSE } from '../actions/index'

const mockedState = [{
  name: 'Plane Tickets',
  cost: 1000
}, {
  name: 'Food',
  cost: 200
}, {
  name: 'Sightseeing',
  cost: 100
}]

const expenses = (state = mockedState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          name: action.name,
          cost: action.cost
        }
      ]

    default:
      return state
  }
}

export default expenses