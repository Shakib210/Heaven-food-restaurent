import React,{useState} from 'react'
import '../App.css'
import { Modal,Button} from 'react-bootstrap'
import Reservation from './Reservation'


const Dashboard = ({history}) => {
  const [show, setShow] = useState(false);
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className='dash'>
        

 <ul className='home-btn'>
     <li className=' flex-wrap'>
      <button className='mbtn' onClick={handleShow}> Reservation</button>
     </li>

     <li className=' flex-wrap'>
     <button className='mbtn' onClick={(e)=>history.push('/takeout')}> Takeout</button> 
     </li>

     
     <li className=' flex-wrap'>
     <button className='mbtn' onClick={(e)=>history.push('/delivary')}> Delivary</button>
     </li>

 </ul>

 <Modal show={show} className="my-modal" onHide={handleClose} bg='black'>
      <Modal.Header closeButton>
        <Modal.Title>Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Reservation />

 </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default Dashboard
