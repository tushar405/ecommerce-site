import React from 'react'
import image1 from "../../assets/image1.jpg"
import "./Products.css"
import { useDispatch } from 'react-redux'
import {addItem} from "../../redux/Cartslice"
const Products = ({name,image,price,id}) => {
  let dispatch = useDispatch()
  return (
    <div className='products'>
        <img src={image} alt="" />
        <div className="products-detail">
            <span className='name'>{name}</span>
            <span className='price'>RS {price}</span>
            <button onClick={()=>{
              dispatch(addItem({name:name,image:image,price:price,id:id}))
            }}>Add+</button>
        </div>
         </div>
  )
}

export default Products