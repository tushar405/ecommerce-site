import React from 'react'
import Cartcard from '../../Components/CartCard/Cartcard'
import "./Cart.css"
import { useSelector } from 'react-redux'
import ig from '../../assets/emptycart.png'

const Cart = () => {
   let items = useSelector(state=>state);
   let total = items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='cart'> 
    {items.cart.length<=0?<div className='empty'>
      <img src={ig} alt="" />
      <h1>Empty cart</h1>
       </div>:
       <div className='cart-section'> 
        {items.cart.map((items)=>(
          <Cartcard image={items.image} name={items.name} price={items.price} id={items.id}/>
        ))}
        </div>} 
        <div className="price-section">
        <span>Total Products:{items.cart.length}</span>
        <span>Total Price:{total}</span>

        </div>
       
    </div>
  )
}

export default Cart