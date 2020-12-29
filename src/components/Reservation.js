import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { addDays } from "date-fns"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {Form,Col, Button} from 'react-bootstrap'
import '../App.css'
import firebase from '../firebase';
const db=firebase.firestore()

const Reservation = () => {

    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 17)
    );
   

    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [phn, setPhn] = useState(null)

  

    const submit=(e)=>{
        e.preventDefault()
        const date= startDate.toString()
        if(name && address && phn && date ){
          db.collection("reservation").add({
            name,address,phn,date
          }).then(()=>{
            return(
              alert('Reservation complete') 
            )
           
          })
        }else{
          return(
            alert('fillup all information') 
           
          )
         
        }
        
   
    }

    return (

      <>

    

      <div  style={{ width: '450px'}} className=' canter'>


<Form className='container' onSubmit={submit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFname">
      <Form.Label> Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridPhone">
    <Form.Label>Phone no</Form.Label>
    <Form.Control placeholder="01XXXXXXXXXX"
     value={phn}
     onChange={(e)=> setPhn(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" 
    value={address}
    onChange={(e)=> setAddress(e.target.value)}
    />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Pick date and time</Form.Label>
    <DatePicker
             selected={startDate}
             onChange={date => setStartDate(date)}
             showTimeSelect
             minDate={new Date()}
             maxDate={addDays(new Date(), 30)}
             scrollableMonthYearDropdown
             dateFormat="MMMM d, yyyy h:mm aa"
        />

  </Form.Group>

  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>

         


    </div>

     

    </>
    )
}

export default Reservation
