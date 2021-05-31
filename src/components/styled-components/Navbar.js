import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { MyContext } from '../../context'
import SearchInput from '../SearchInput/Search'


const StyledNavbar = styled.nav`
background: rgba(0, 0, 0, 0.863) !important;
  width: 100vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
  & a {
    padding: 5px;
    color: white;
    text-decoration: none;
  }
  & a.navbar-active {
    color: #0f4c81;
  }
`

function Navbar(props) {

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
          <SearchInput></SearchInput>
            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>
            <NavLink exact to="/signup" activeClassName="navbar-active">
              SignUp
            </NavLink>
            <NavLink exact to="/login" activeClassName="navbar-active">
              LogIn
            </NavLink> 
          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)