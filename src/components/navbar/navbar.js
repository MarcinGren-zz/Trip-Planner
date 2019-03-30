import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  width: 100%;
  margin-bottom: 20px;
  height: 100%;

  & button {
    width: 25%;
    background: ${props => props.theme.colors.lightBlue}
  border-left: 1px solid ${props => props.theme.colors.darkGreen};
    font-size: 1.5em;
    padding: 0.5rem;
    letter-spacing: 0.2em;
    transition: all 0.2s ease-in-out;    
  }

  & button:hover {
    background: ${props => props.theme.colors.earthyBrown};
  }
`

const Navbar = () => (
  <StyledNavbar>
    <navbar>
      <button>Overview</button>
      <button>Day by day</button>
      <button>Sights</button>
      <button>Expenses</button>
    </navbar>
  </StyledNavbar>
)

export default Navbar