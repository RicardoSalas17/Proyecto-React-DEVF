import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
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
  const token = window.localStorage.getItem("token");
  const Logout = () => {
    window.localStorage.removeItem("token");
    return <Redirect to="/" />;
  };
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <StyledNavbar>
          <SearchInput></SearchInput>
            <NavLink exact to="/" activeClassName="navbar-active">
              Home
            </NavLink>

            {!token &&(
            <NavLink exact to="/signup" activeClassName="navbar-active">
              SignUp
            </NavLink> )
          }

          {!token &&(
            <NavLink exact to="/login" activeClassName="navbar-active">
              LogIn
            </NavLink>)}

            {token &&(
              <NavLink exact to="/profile" activeClassName="navbar-active">
                Profile
              </NavLink>)}
            {token &&(
              <NavLink exact to="/" activeClassName="navbar-active" onClick={Logout}>
                LogOut
              </NavLink>)}

          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)