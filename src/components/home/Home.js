import React, { useEffect, useState } from 'react'
import MY_SERVICE from '../../services/index.js'
import Card from '../styled-components/CardStyled'
import { Link} from 'react-router-dom'
import { MyContext } from '../../context'

function Home(props) {

//  const [products, setProducts]=useState([]);
  const [mensaje, setMensaje]=useState('Agregado al carrito');
  const token = window.localStorage.getItem("token");
const prueba=()=>{
  console.log("dentro de la prueba")
}

 
  return (
    <MyContext.Consumer>
{context =>(
  <div className="container">
    <div className="bodyCards">
    <div className="cardContainer">
    {

 /* if (context.showList.length =< 0){
  <h1>Cargando</h1>
} else if(context.showList ==["none"]){

  <h1>no hay nada...</h1>
}else {
  context.showList.map((prod)=>(
    <Card key={prod._id}>
    <h1>{prod.product_name}</h1>
    <Link to={`/product/${prod._id}`}>
    <img src={prod.image} alt={prod.product_name} width="60%" height="60%"/>
    </Link> 
    <Link to= {token ?`/profile` :"/signup"}>
    <p>${prod.price}</p>
    </Link>
    </Card>
))
}*/
context.showList.length <= 0?<h1>Cargando</h1>: context.showList ==["none"]? <h1>no hay nada...</h1>:

context.showList.map((prod)=>(
  <Card key={prod._id}>
  <h1>{prod.product_name}</h1>
  <Link to={`/product/${prod._id}`}>
  <img src={prod.image} alt={prod.product_name} width="60%" height="60%"/>
  </Link> 
  <Link to= {token ?`/profile` :"/signup"}>
  <p>${prod.price}</p>
  </Link>
  </Card>
))


       
      
  
  
}
    </div>
    </div>
    </div>
    )}
    </MyContext.Consumer>
  );
}

export default Home;
// {context.user.car.includes(prod)=== false?
//   <button onClick= {()=>{
// context.user.car.push(prod)
// }}> add product
//   </button>:
//   <h1>{mensaje}</h1>
//   }