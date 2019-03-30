import React, { Component } from 'react'
import styled from 'styled-components'
import { TRANSPORTATION, LODGING, FOOD, SIGHTSEEING, OTHER } from '../../../constants/constants'

const StyledAddExpenseForm = styled.div`
  background: orange;

  & .item {
    width: 53%;
  }

  & .cost {
    width: 15%;
  }

  & .category {
    width: 20%
  }

  & .submit {
    width: 10%;
  }
`

const listOfCategories = [TRANSPORTATION, LODGING, FOOD, SIGHTSEEING, OTHER]

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
          <input name='item' class='item' type='text' ref={this.itemRef} value={item} onChange={this.handleFieldChange} />
          <input name='cost' class='cost' type='number' value={cost} onChange={this.handleFieldChange} />
          <select name='category' class='category' value={category} required={true} onChange={this.handleFieldChange} >
            {listOfCategories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <button class='submit' type='submit'>Add</button>
        </form>
      </StyledAddExpenseForm>
    )
  }
}

export default AddExpenseForm