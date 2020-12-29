import React,{useState,useEffect} from 'react'
import firebase from '../firebase'
import {Row,Col} from 'react-bootstrap'
import FoodCard from './FoodCard'
const db =firebase.firestore()


const Food = ({type}) => {
    const [foods, setFoods]=useState([]);
    const [id, setId]=useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
          const usersCollection = await db.collection(`${type}`).get();
          
          setFoods(
            usersCollection.docs.map((doc) => {
              setId(doc.id)
              return doc.data();
            })
          );
        };
        fetchFoods();
      }, [type]);
    return (
        <>
        
        <div className='container mt-5'>
        <Row>
            {foods.map((food) => (
              <Col key={id} sm={12} md={6} lg={4} xl={3}>
                <FoodCard food={food} />
              </Col>
            ))}
          </Row>
        
        </div>
       
      </>
    )
}

export default Food
