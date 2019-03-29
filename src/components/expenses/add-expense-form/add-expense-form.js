import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAddExpenseForm = styled.div`
  background: orange;
`

class AddExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenseName: '',
      expenseCost: ''
    }

    this.expenseNameRef = React.createRef()
    this.handleExpenseNameChange = this.handleExpenseNameChange.bind(this)
    this.handleExpenseCostChange = this.handleExpenseCostChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleExpenseNameChange(event) {
    this.setState({ expenseName: event.target.value })
  }

  handleExpenseCostChange(event) {
    this.setState({ expenseCost: event.target.value})
  }

  handleSubmit() {
    const { expenseName, expenseCost } = this.state

    event.preventDefault()
    this.props.onAddExpense(expenseName, expenseCost)
    this.setState({
      expenseName: '',
      expenseCost: ''
    })
    this.expenseNameRef.current.focus()
  }

  render() {
    const { expenseName, expenseCost } = this.state

    return (
      <StyledAddExpenseForm>
        <form onSubmit={this.handleSubmit}>
          <input name='NewExpenseName' type='text' ref={this.expenseNameRef} value={expenseName} onChange={this.handleExpenseNameChange} />
          <input name='NewExpenseCost' type='number' value={expenseCost} onChange={this.handleExpenseCostChange} />
          <button type='submit'>Add</button>
        </form>
      </StyledAddExpenseForm>
    )
  }
}

export default AddExpenseForm