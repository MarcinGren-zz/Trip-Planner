import React, { Component } from 'react'
import styled from 'styled-components'
import { TRANSPORTATION, LIST_OF_EXPENSE_CATEGORIES } from '../../../constants/constants'

const StyledAddExpenseForm = styled.div`
  background: orange;
`

const StyledSubmit = styled.button`
  width: 10%;
`

const StyledItem = styled.input`
  width: 53%;
`

const StyledCost = styled.input`
  width: 15%;
`

const StyledCategory = styled.select`
  width: 20%;
`
class AddExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      cost: '',
      category: TRANSPORTATION
    }

    this.itemRef = React.createRef()
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit() {
    const { item, cost, category } = this.state

    event.preventDefault()
    this.props.onAddExpense(item, cost, category)
    this.setState({
      item: '',
      cost: '',
      category: TRANSPORTATION
    })
    this.itemRef.current.focus()
  }

  render() {
    const { item, cost, category } = this.state

    return (
      <StyledAddExpenseForm>
        <form onSubmit={this.handleSubmit}>
          <StyledItem name='item' type='text' ref={this.itemRef} value={item} onChange={this.handleFieldChange} />
          <StyledCost name='cost' type='number' value={cost} onChange={this.handleFieldChange} />
          <StyledCategory name='category' class='category' value={category} required={true} onChange={this.handleFieldChange} >
            {LIST_OF_EXPENSE_CATEGORIES.map(cat => (
              <option value={cat}>{cat}</option>
            ))}
          </StyledCategory>
          <StyledSubmit type='submit'>Add</StyledSubmit>
        </form>
      </StyledAddExpenseForm>
    )
  }
}

export default AddExpenseForm