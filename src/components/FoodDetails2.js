import React,{useState} from 'react'
import {Row,Col,Card,ListGroup,Button,ListGroupItem,FormControl} from 'react-bootstrap'
import EditRating from './EditRating'
import { useHistory } from "react-router-dom";
const FoodDetails2 = ({food}) => {
    const [qty, setQty] = useState(1)
    const history=useHistory()
    const addToCartHandler = () => {
      
      localStorage.setItem('cart',JSON.stringify(food))
      history.push(`/`)
      
      }
    return (
        <div>
            <div className='container my-4'>
            <Row>
               <Col md={8} lg={8} sm={12}>
                   <img src={food.pic} alt={food.name} width="80%"/>
                   
               </Col>
               <Col md={4} lg={4} xl={4}>
              
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${food.price *qty}</strong>
                        </Col>
                      </Row>
                    </ListGroupItem>

  
              
                      <ListGroupItem>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <FormControl
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                               <option key={1} value={1}>{1}</option>
                               <option key={2} value={2}>{2}</option>
                               <option key={3} value={3}>{3}</option>
                               <option key={4} value={4}>{4}</option>
                               <option key={5} value={5}>{5}</option>
                            </FormControl>
                          </Col>
                        </Row>
                      </ListGroupItem>
                  
  
                    <ListGroupItem>
                      <Button
                        onClick={addToCartHandler}
                        className='btn-block bg-dark'
                        type='button'
                      >
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            
            </Row>

            <div style={{marginTop:'25px'}}>
              <h3>{food.name}</h3>   
            </div>
            <div><EditRating/></div>
            <div>
                {food.description} 
            </div>

            </div>
          
        </div>
    )
}

export default FoodDetails2
