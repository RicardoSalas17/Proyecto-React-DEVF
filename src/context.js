import React, { Component, createContext } from 'react'
import MY_SERVICE from './services/index'
import payload from "./utils/payloads";
export const MyContext = createContext()

class MyProvider extends Component {

    state={
      user:{
       },
        allProducts:[],
        showList:[],
        car:[]
      }


  componentDidMount(){
     this.chargeAllProducts()
     this.handleUser()
     
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
  
  handleUser=()=>{
    const token = window.localStorage.getItem("token");
    let idUser = undefined;
      if (token !== null) {
        const user2 = payload();
        idUser = user2.id;
        const config = {
          headers: {
            Authorization: `JWT ${token}`,
          },
        };

         const obtenerUser = async () => {
          await MY_SERVICE.getUser(idUser, config).then((res) => {
            console.log(res.data)
          this.setState({user:res.data})
        })
      }
      obtenerUser()
    }
  }
  addProduct=(prod)=>{
    //let intialList = [this.state.car]
    //let finalList =intialList.push(prod)
    let joined= this.state.car.concat(prod);
    this.setState({ car: joined })

//this.setState({car:finalList})
  }

    render() {
        return (
            <MyContext.Provider
              value={{
                showList: this.state.showList,
                allProducts: this.state.allProducts,
                user: this.state.user,
                car: this.state.car,
                search:this.search,
                handleUser:this.handleUser,
                addProduct:this.addProduct
              }}
            >
              {this.props.children}
            </MyContext.Provider>)
}
}
export default MyProvider