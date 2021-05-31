import React, { Component, createContext } from 'react'
// import MY_SERVICE from './services/index'
export const MyContext = createContext()
class MyProvider extends Component {
    state={

    }

    render() {
        return (
            <MyContext.Provider
              value={{
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider