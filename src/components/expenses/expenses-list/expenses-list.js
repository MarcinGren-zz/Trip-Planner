import React, { Component } from 'react'
import styled from 'styled-components'

const StyledExpensesList = styled.div`
  background: pink;
  width: 50px;
  height: 50px;
`

class ExpensesList extends Component {
  constructor(props) {
    super(props)
    this.handleExpenseAddition = this.handleExpenseAddition.bind(this)
  }

  handleExpenseAddition() {
    this.props.onAddExpense('lpl')
  }

  render() {
    return(
      <StyledExpensesList>
        <button onClick={this.handleExpenseAddition}></button>
        {this.props.exp}
      </StyledExpensesList>
    )
  }
}

export default ExpensesList