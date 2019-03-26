import { ADD_EXPENSE } from '../actions/index'

const expenses = (state = ['asd', 'qwe', 'zxc'], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
          action.text
      ]

    default:
      return state
  }
}

export default expenses