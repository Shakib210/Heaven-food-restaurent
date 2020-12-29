import React,{useState,useEffect} from 'react'

const Cartscreen = () => {
    const [cart, setCart] = useState([])

     useEffect(() => {
         setCart(JSON.parse(localStorage.getItem('user')))
     }, [])
    return (
        <div>
            {cart}
        </div>
    )
}

export default Cartscreen
