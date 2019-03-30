import React, { Component } from 'react'
import styled from 'styled-components'
import ExpensesRow from './expenses-row/expenses-row'

const StyledExpensesList = styled.div`
  background: pink;
  width: 100%;

  & table {
    width: 100%;
    table-layout: fixed;
  }
`

const tableHeaders = ['Item', 'Cost', 'Category']

const ExpensesList = ({ expenses }) => {

  return (
    <StyledExpensesList>
      <table>
        <tr>
          {tableHeaders.map(header => (
            <th>{header}</th>
          ))}
        </tr>
      {expenses.map(expense => (
        <ExpensesRow expense={expense} />
      ))}
      </table>
    </StyledExpensesList>
  )
}

export default ExpensesList