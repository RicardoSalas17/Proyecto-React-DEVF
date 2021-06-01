import React, { useEffect, useState } from 'react'
import { Link, Redirect} from 'react-router-dom'
import MY_SERVICE from '../../services/index.js'
import { MyContext } from '../../context'
import Card from '../styled-components/CardStyled'
//import Card from '../styled-components/CardStyled'
//import { Link} from 'react-router-dom'

function Car(){

  let cntxData = 0
  const [productsCar=[], setProductsCar]=useState([]);


  const dator = (prod)=>{
    MY_SERVICE.getItem(prod).then((res) => {
  productsCar.push(res.data)
    }
    );
  } 

  useEffect(() => {
    cntxData == 0 ?
    console.log("hola")
    :
    cntxData.map((prod)=>(dator(prod._id)))

  }, []);

  const token = window.localStorage.getItem("token");

  const checkAuth =()=>{
if(!token){
   
}  
else{

}
  }


  return(
    <MyContext.Consumer>
{context => {

cntxData = context.user.car


return(
  <div className="bodyCards">
  <div className="cardContainer">

  {
    
  productsCar.map((prod)=>(
      <Card key={prod._id}>
      <h1>{prod.product_name}</h1>
      <Link to={`/product/${prod._id}`}>
      <img src={prod.image} alt={prod.product_name} width="60%" height="60%"/>
      </Link> 
      <button onClick={checkAuth}>ddd</button>
      </Card>
  ))
  }

    
  </div>
  </div>
)
  }
}
</MyContext.Consumer>
)

}

//context.user.car.map((prod)=>(dator(prod._id)))
//Car.contextType = MyContext;
export default Car;

// productsCar.length === 0 ? (
//   context.user.car.map((prod)=>(dator(prod)))
// ):(
//   context.user.car.map((prod)=>(
//     productsCar.includes(prod)=== true ? (
//       dator(prod)
//     ):(
//       console.log(prod)
//     )    
//     )))