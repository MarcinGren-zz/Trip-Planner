import React from 'react'
import styled from 'styled-components'

const StyledExpensesRow = styled.div`
  background: purple;
`

const ExpensesRow = ({ expense }) => {
  return (
    <StyledExpensesRow>
      <span>{expense.name}</span>
      <span>{expense.cost}</span>
    </StyledExpensesRow>
  )
}


export default ExpensesRow