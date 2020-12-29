import React from 'react'
import { Card, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const FoodCard = ({food}) => {

    return (
        <div>
             <Card  className="mb-4" style={{width:'270px'}} >
               <Link to={`/food/${food._id}/${food.type}`}>
               <Card.Img style={{ width: '270px',padding:'10px' ,height:'200px' }} variant="top" src={food.pic} />
               </Link>
                <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                 
                   
                   <Card.Text>
                     <Row>
                       <Col md={4}>
                          ${food.price}
                       </Col>
                       <Col><Rating  value={food.rating}
                      text={`${food.numReviews} reviews`}/></Col>
                     </Row>
                    
                   </Card.Text>
                </Card.Body>

                </Card>
        </div>
    )
}

export default FoodCard
