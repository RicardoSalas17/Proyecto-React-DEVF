//import Card from '../styled-components/CardStyled'


import { Card, Row, Container, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom'
import { MyContext } from '../../context'


function Home() {
  return (
    <MyContext.Consumer>
{context =>(
  
  <Container class="home">
    {
context.showList.length <= 0?
<h1>cargando</h1>
: 
context.showList==="vacio"? 
<div>
<h1>no hay nada...</h1>
<button onClick={e=>context.search("")}>atras</button>
</div>

:


<Row>

{context.showList.map((prod)=>(  

  <Col>
<Card style={{ width: '18rem' }} key={prod.id}>
  {

    prod.hasOwnProperty("image") && (prod.image.includes("jpg")|| prod.image.includes("jpeg")||prod.image.includes("png"))? 
    <img variant="top" src={prod.image} className="cardImage" alt={prod.image}/>
    :   
    <Card.Img variant="top" src="https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg" />
  }
  <Card.Body>
    <Card.Title>{prod.product_name}</Card.Title>
    <Card.Text>
      {prod.description}
    </Card.Text>
    <Link to={`/product/${prod._id}`} style={{ textDecoration: 'none', color: '#d9d9d9', backgroundColor:"black"}}>
  Details</Link>
  <button onClick={()=>context.addProduct(prod)}>
  Agrgar producto al carrito
  </button>
  </Card.Body>
</Card>
</Col>

))}
</Row>




}
</Container>
    )}
    </MyContext.Consumer>
  );
}

export default Home;
