import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col ,Container} from 'react-bootstrap'
import GoogleLogin from 'react-google-login';
import firebase from '../firebase'



const LoginScreen = ({ location,history }) => {
  const [email, setEmail] = useState('')
  
  const [password, setPassword] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then((u)=>{
        history.push('/')
    }).catch((err)=>{
        console.log(err);
    })
   
  }

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email)
    localStorage.setItem('user',JSON.stringify(response.profileObj))
    history.push('/')
  }
  

  return (
    <>
    <Container>
    <Row className='justify-content-md-center mt-5'>
      <Col xs={12} md={6}>
      <h1>Sign In</h1>
     
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Button type='submit' variant='primary'  style={{width:'405px' ,height:'40px', marginLeft:'50px'}} >
          Sign In
        </Button>
      </Form>
      <GoogleLogin 
          clientId="278546313737-31k5a9n8hoi526umo81lte28dorb0hog.apps.googleusercontent.com"
          buttonText="Login"
          className='w-75 d-flex justify-content-center mt-3 ml-5'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
      
      />
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
        
      </Row>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default LoginScreen
