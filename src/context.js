import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/index'
export const MyContext = createContext()
class MyProvider extends Component {
    state={
        data:{}
    }
   componentWillMount(){
        MY_SERVICE.getAllItems().then(({ data }) => {
            console.log('data : ', data );
          })
    }
    render() {
        return (
            <MyContext.Provider
              value={{
                data: this.state.data
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider