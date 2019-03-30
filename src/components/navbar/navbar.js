import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
  width: 100%;
  margin-bottom: 20px;
  height: 100%;

  & ul {
    display: flex;
  }

  & a, a:link, a:visited {
    display: flex;
    width: 25%;
    color: black;
    background: ${props => props.theme.colors.lightBlue}
    border-left: 1px solid ${props => props.theme.colors.darkGreen};
    font-size: 1.5em;
    padding: 0.5rem;
    letter-spacing: 0.2em;
    transition: all 0.2s ease-in-out;    
    justify-content: center;  
  }

  & a:hover, & a:active {
    background: ${props => props.theme.colors.earthyBrown};
    cursor: pointer;
  }
`

const Navbar = () => (
  <StyledNavbar>
    <nav>
      <ul>
        <Link to='/'>
          <li>Overview</li>
        </Link>
        <Link to='/daybyday'>
          <li>Day by day</li>
        </Link>
        <Link to='/places'>
          <li>Places</li>
        </Link>
        <Link to='/expenses'>
          <li>Expenses</li>
        </Link>
      </ul>
    </nav>
  </StyledNavbar>
)

export default Navbar