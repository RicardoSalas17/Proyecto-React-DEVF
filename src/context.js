import React, { Component, createContext, useState } from 'react'
// import MY_SERVICE from './services/index'
export const MyContext = createContext()
class MyProvider extends Component {

    state={
      user:{
        car:[]}
    }


    render() {
        return (
            <MyContext.Provider
              value={{
                user: this.state.user
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider