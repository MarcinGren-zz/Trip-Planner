import React, { Component } from 'react'
import styled from 'styled-components'
import ExpensesRow from './expenses-row/expenses-row'

const StyledExpensesList = styled.div`
  background: pink;
`

const ExpensesList = ({ expenses }) => {

  return (
    <StyledExpensesList>
      {expenses.map(expense => (
        <ExpensesRow expense={expense} />
      ))}
    </StyledExpensesList>
  )
}

export default ExpensesList