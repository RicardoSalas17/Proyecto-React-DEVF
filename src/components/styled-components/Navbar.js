import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { MyContext } from '../../context'
import SearchInput from '../SearchInput/Search'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const StyledNavbar = styled.nav`
background: rgba(0, 0, 0, 0.863) !important;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  & a {
    padding: 15px;
    color: #d9d9d9;
    text-decoration: none;
    backgroundColor:"#8c8c8c"
  }
  & a.navbar-active {
    color: #8c8c8c;
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
              <SearchInput></SearchInput>

          </StyledNavbar>
        )
      }}
    </MyContext.Consumer>
  )
}

export default withRouter(Navbar)