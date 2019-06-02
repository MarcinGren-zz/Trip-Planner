import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
  width: 100%;
  margin-bottom: 20px;
  height: 100%;
`

const StyledNavbarList = styled.ul`
    display: flex;
`

const StyledLink = styled(Link)`
  &:link, &:visited {
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

  &:hover, &:active {
    background: ${props => props.theme.colors.earthyBrown};
    cursor: pointer;
  }
`

const Navbar = () => (
  <StyledNavbar>
    <StyledNavbarList>
      <StyledLink to='/'>
        <li>Overview</li>
      </StyledLink>
      <StyledLink to='/daybyday'>
        <li>Day by day</li>
      </StyledLink>
      <StyledLink to='/places'>
        <li>Places</li>
      </StyledLink>
      <StyledLink to='/expenses'>
        <li>Expenses</li>
      </StyledLink>
    </StyledNavbarList>
  </StyledNavbar>
)

export default Navbar