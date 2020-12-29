import React,{useEffect,useState} from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import logo from '../logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import firebase from '../firebase'

const Header = () => {
 // const db=firebase.firestore()
  const [Currentuser, setCurrentUser] = useState()
  const [users, setUsers] = useState(null)
  //const [Id, setId] = useState(null)
  

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    setUsers(JSON.parse(localStorage.getItem('user')));
     console.log(users)
  /*  if(Currentuser){
      const fetchUsers = async () => {
        const usersCollection = await db.collection('users').get();
        
        setUsers(
          usersCollection.docs.map((doc) => {
            setId(doc.id);
            return doc.data();
          })
        ); 
      };
      fetchUsers(); 
    }
    */ 

    return unsubscribe
  }, [])

  const logout=(e)=>{
    firebase.auth().signOut();
   setUsers(null)
   localStorage.setItem('user',null);
  }

    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg='dark'  variant="dark">
            <LinkContainer to='/'>
            <Navbar.Brand  style={{color:'aliceblue', marginLeft:'35px'}}><img src={logo} alt='img' width='40px' style={{  marginRight:'10px'}} />Dream Foods</Navbar.Brand>
            </LinkContainer>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className='ml-auto'>
      <Nav.Link href="/signin" style={{fontSize:'20px', color:'aliceblue'}}>{Currentuser 
      ? (<p onClick={logout} style={{background:'transparent'}} >Log out </p>)
      :(users ? (<p onClick={logout}>{users.name}</p>): (<p>Signin</p>))}
      
      </Nav.Link>
      <Nav.Link href="/contact" style={{fontSize:'20px', color:'aliceblue'}}>Contacts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>  
        </>
    )
}

export default Header
