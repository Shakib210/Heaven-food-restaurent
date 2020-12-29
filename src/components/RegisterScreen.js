import React, { useState } from 'react'
import Message from './Message'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col,Container } from 'react-bootstrap'
import firebase from '../firebase'
const db=firebase.firestore()


const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const role = false;


  const redirect = location.search ? location.search.split('=')[1] : '/'

   const createUserDocument=async(user, additionalData)=>{
     if(!user) return;

     const userRef=db.doc(`users/${user.uid}`);
     const snapshot= await userRef.get();
     if(!snapshot.exists){
       const {email}=user;
       const {name,phone,role}=additionalData

       try{
         userRef.set({
           email,name,phone,role,createdAt: new Date()
         })
       }catch(error){
         console.log(error)
       }
     }
   }

  const submitHandler =async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      try {
        const {user}=await firebase.auth().createUserWithEmailAndPassword(email,password);
       console.log(user)
       await createUserDocument(user,{name,phone,role})
       setName('')
       setPhone('')
       setEmail('')
       setPassword('')
       setConfirmPassword('')
       history.push('/')
      } catch (error) {
        console.log(error)
      }

    }
  }

  return (
    <Container>
    <Row className='justify-content-md-center mt-5'>
      <Col xs={12} md={6}>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group controlId='phone'>
          <Form.Label>Phone no</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
      </Col>
      </Row>
    </Container>
  )
}

export default RegisterScreen
