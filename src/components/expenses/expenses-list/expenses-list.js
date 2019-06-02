import React, { Component } from 'react'
import styled from 'styled-components'
import ExpensesRow from './expenses-row/expenses-row'

const StyledExpensesList = styled.table`
  background: pink;
  width: 100%;
  table-layout: fixed;
`

// not sure if that's the right place, might move it to consts
const tableHeaders = ['Item', 'Cost', 'Category']

const ExpensesList = ({ expenses }) => {
  return (
    <StyledExpensesList>
      <tr>
        {tableHeaders.map(header => (
          <th>{header}</th>
        ))}
      </tr>
      {expenses.map(expense => (
        <ExpensesRow expense={expense} />
      ))}
    </StyledExpensesList>
  )
}

export default ExpensesList