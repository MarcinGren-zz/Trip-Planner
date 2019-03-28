import React from 'react'
import styled from 'styled-components'

const StyledExpensesRow = styled.div`
  background: purple;
`

const ExpensesRow = ({ expense }) => {
  return (
    <StyledExpensesRow>
      {expense}
    </StyledExpensesRow>
  )
}


export default ExpensesRow