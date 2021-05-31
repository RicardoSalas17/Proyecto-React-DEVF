import React, { useEffect, useState } from 'react'
import MY_SERVICE from '../../services/index.js'
import Card from '../styled-components/CardStyled'
import { Link} from 'react-router-dom'

function Home() {

  const [products, setProducts]=useState([]);
  const dator = ()=>{
    MY_SERVICE.getAllItems().then((res) => {
      setProducts(res.data);
    });
 
  }
  useEffect(() => {
    dator()
  }, []);

  return (
    <div className="bodyCards">
    <div className="cardContainer">
    {products.map((prod)=>(
      <Card key={prod._id}>
      <h1>{prod.product_name}</h1>
      <Link to={`/product/${prod._id}`}>
      <img src={prod.image} alt={prod.product_name} width="60%" height="60%"/>
      </Link> 
      <p>${prod.price}</p>
      </Card>
  ))}
    </div>
    </div>

  );
}

export default Home;
