import React from 'react'
import { MdDelete } from "react-icons/md";
import "./Cartcard.css"
import { useDispatch } from 'react-redux';
import { removeItem } from "../../redux/Cartslice";


const Cartcard = ({image,name,price,id}) => {
  const dispatch = useDispatch();

  return (
    <div className='cartcard'>
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>{price} RS/-</span>
        </div>
      </div>

      <div className="right-card">
        <button onClick={() => dispatch(removeItem(id))}>
          Remove <MdDelete />
        </button>
      </div>
    </div>
  )
}

export default Cartcard
