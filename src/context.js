import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/index'
export const MyContext = createContext()

class MyProvider extends Component {

    state={
      user:{
        car:[]},
        allProducts:[],
        showList:[]

      }


  componentDidMount(){
     this.chargeAllProducts()

  
  }
  
  search = (word) =>{

    let stringBuscado= word
    let objetoCreado = this.state.allProducts.filter(function (objetoDelArray) {
        return objetoDelArray.product_name.includes(stringBuscado);
    });
   if( stringBuscado === ""){
     this.chargeAllProducts() 
   }  else if(objetoCreado.length===0){
    this.setState({showList:"vacio"})}
  else{
    this.setState({showList:objetoCreado})
  }

  }

  chargeAllProducts=()=>{ 
    MY_SERVICE.getAllItems()
    .then(( {data} ) => {
      this.setState({allProducts:data})
      this.setState({showList:data})
     })
     .catch(err => console.log(err))
  }

/*  chargeShowProducts=()=>{

  }*/



    render() {
        return (
            <MyContext.Provider
              value={{
                showList: this.state.showList,
                allProducts: this.state.allProducts,
                user: this.state.user,
                search:this.search
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider