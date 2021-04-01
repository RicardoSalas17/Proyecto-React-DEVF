import React, { useEffect, useState } from 'react'
import MY_SERVICE from '../../services/index.js'
import Card from '../styled-components/CardStyled'
import { Link} from 'react-router-dom'
import { MyContext } from '../../context'

function Home(props) {

  const [products, setProducts]=useState([]);
  const [mensaje, setMensaje]=useState('Agregado al carrito');
  const dator = ()=>{
    MY_SERVICE.getAllItems().then((res) => {
      setProducts(res.data);
    });
  }
  useEffect(() => {
    dator();
  }, []);
  console.log("🚀 ~ file: Home.js ~ line 37 ~ Home ~ context.user.car", context.user.car)

  
  return (
    <MyContext.Consumer>
{context =>(
    <div className="bodyCards">
    <div className="cardContainer">
    {products.map((prod)=>(
      <Card key={prod._id}>
      <h1>{prod.product_name}</h1>
      <Link to={`/product/${prod._id}`}>
      <img src={prod.image} alt={prod.product_name} width="60%" height="60%"/>
      </Link> 
      <p>${prod.price}</p>
      
      {context.user.car.includes(prod)=== false?
      <p onClick= {()=>{
context.user.car.push(prod)
}}> add product
      </p>:
      <h1>{mensaje}</h1>
      }
      </Card>
  ))}
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