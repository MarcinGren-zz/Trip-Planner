export const ADD_EXPENSE = 'ADD_EXPENSE'

export const addExpense = (name, cost, category) => ({
  type: ADD_EXPENSE,
  name,
  cost,
  category
})