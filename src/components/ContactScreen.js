import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import '../App.css'

const ContactScreen = () => {
    const [Email, setEmail] = useState(null)
    const [Message, setMessage] = useState(null)

    const submitdetails=(e)=>{
        
        if(Email && Message){
            alert("Thank you for your suggestion")
        }else{
        alert("Fill the fields properly")
    }
}
    return (
        <div className="form">
            <Form className='p-3'>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write message</Form.Label>
    <Form.Control as="textarea" rows={3} value={Message} onChange={(e)=>setMessage(e.target.value)}/>
  </Form.Group>

  <Form.Group controlId="exampleForm.Button">
  <button  className='btn2' onClick={()=>submitdetails()}>Send</button>
  </Form.Group>
</Form>
        </div>
    )
}

export default ContactScreen
