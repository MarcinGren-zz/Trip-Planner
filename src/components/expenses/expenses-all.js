import React from 'react'
import styled from 'styled-components'
import ExpensesList from './expenses-list/expenses-list'
import AddExpenseForm from './add-expense-form/add-expense-form'


const StyledExpensesAll = styled.div`
  background: red;
`

const ExpensesAll = ({ expenses, addExpense }) => {
  return (

    
    <StyledExpensesAll>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpensesList expenses={expenses} />
    </StyledExpensesAll>
  )
}

export default ExpensesAll