import { ADD_EXPENSE } from '../actions/index'

const mockedState = [{
  name: 'Plane Tickets',
  cost: 1000,
  category: 'Transportation'
}, {
  name: 'Pizza',
  cost: 200,
  category: 'Food'
}, {
  name: 'Visiting Museum',
  cost: 100,
  category: 'Sightseeing'
}]

const expenses = (state = mockedState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          name: action.name,
          cost: action.cost,
          category: action.category
        }
      ]

    default:
      return state
  }
}

export default expenses