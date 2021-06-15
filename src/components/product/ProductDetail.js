import React, { useEffect, useState } from 'react'
import MY_SERVICE from '../../services/index.js'
import CardDetail from '../styled-components/CardDetail'
import Row from '../styled-components/Row'

function ProductDetail(props) {
    const [product, setProduct]=useState([]);
    const dataProduct = ()=>{
      const { id } = props.match.params
        MY_SERVICE.getItem(id).then((res) => {
            setProduct(res.data);
        });
        
    }
    useEffect(() => {
      dataProduct()
    });
  if(!product){
        return (
            <div className="App">
              <img
                src="https://thumbs.gfycat.com/SlimyElasticAnemonecrab-size_restricted.gif"
                alt="loading"
              />
            </div>
          )
  }else {
    return (
        <div className="bodyCards">
    <CardDetail>
    <Row>
    <img src={product.image} alt={product.product_name} width="100vw" height="40vh"/>
    </Row>
      <Row label={product.product_name}></Row>
      <Row label={product.description}></Row>
      <Row label={product.category}></Row>
      <Row label={`$ ${product.price}`}></Row>
    </CardDetail>
  </div>
    )
  }    
}

export default ProductDetail;