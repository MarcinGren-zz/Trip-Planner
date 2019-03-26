import React from 'react'
import ExpensesList from './expenses-list/expenses-list'

const ExpensesAll = ({ expenses, addExpense }) => {
  return (

    
    <div>
      {/* <Columns>
        {recipes.map(recipe => (
          <Thumbnail key={recipe['_id']} recipe={recipe} />
        ))}
      </Columns> */}
      <ExpensesList exp={expenses} onAddExpense={addExpense}/>
    </div>
  )
}

export default ExpensesAll