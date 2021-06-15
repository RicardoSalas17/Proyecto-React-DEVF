import { MyContext } from '../../context'
import { Card, Row, Container, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom'
function Profile() {
  return (

    <MyContext.Consumer>
    {context =>(
context.user.hasOwnProperty("first_name")===false ? <h1>cargando</h1>:
          <div className="pruebah1">
          <h1 >Hola {context.user.first_name} {context.user.last_name} </h1>
          <h1>Tu email es:{context.user.email} </h1>
          
          {context.user.role === "COSTUMER" ?
          <h1>COSTUMER </h1>:
          <h1>{context.user.role} </h1>
        }

        {
          //console.log( context.car)
          
          context.car.length===0  ? 
          <h1>No tienes elementos en tu carrito</h1> :
          context.car.map((prod)=>(  

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
          </Card.Body>
        </Card>
        </Col>
        )
        )
         }
          </div>
    )
  }
  </MyContext.Consumer>
  )
}

export default Profile;