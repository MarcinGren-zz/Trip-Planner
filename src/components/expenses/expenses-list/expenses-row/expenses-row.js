import React from 'react'
import styled from 'styled-components'

const StyledExpensesRow = styled.tr`
  background: purple;

  & td {
    word-wrap: break-word;
  }
  
  & .expense-name {
    background: brown;
  }
`

const ExpensesRow = ({ expense }) => {
  return (
    <StyledExpensesRow>
      {/* I might map these instead of listing if they're going to end up similar */}
      <td className='expense-name'>{expense.name}</td>
      <td>{expense.cost}</td>
      <td>{expense.category}</td>
    </StyledExpensesRow>
  )
}


export default ExpensesRow