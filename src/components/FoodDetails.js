import React,{useState,useEffect} from 'react'
import firebase from '../firebase'
import FoodDetails2 from './FoodDetails2'
const db =firebase.firestore()


const FoodDetails = ({match}) => {
    const [foods, setFoods]=useState([]);

    const type=match.params.type
    const id= match.params.id

    useEffect(() => {
        const fetchFoods = async () => {
          //const usersCollection = await db.collection(type).doc('CO4zs66qe3XXODlKJpA3').get();
          // console.log(usersCollection.name)
          // console.log(usersCollection.data())


          const usersCollection = await db.collection(type).get(); 
          
          setFoods(
            usersCollection.docs.map((doc) => {
             // const doc_id=doc.id
              return doc.data();
            })
          );
        };
        fetchFoods();
      }, [type,id]);
    return (
        <>
        <div>

            {foods.map((food) => (
              (food._id ===id && <FoodDetails2  food={food} />)     
            ))}

        
        </div>
       
      </>
    )
}

export default FoodDetails