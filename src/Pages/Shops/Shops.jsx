import React, { useState } from 'react'
import { category } from '../../Category';
import Products from '../../Components/Products/Products';
import { FaShopify } from "react-icons/fa";
import "./Shops.css"
import { dummydata } from '../../Dummydata';

const Shops = () => {
    

      const [cate, setcate] = useState(dummydata);
      function filterproduct(category){
        if(category==="All"){
            setcate(dummydata);
        } else{
   let updatedata = dummydata.filter((items)=>(
     items.category===category))
     setcate(updatedata);
      }
        }
 
  
    return (
    <div className='shop'>
       <div className='shop-heading'>
        <span>Shop</span>
        <FaShopify />

       </div>
               <div className="category-box">
          {category.map((items,idx) => (
            <div className="carts" key={idx} onClick={() => 
            filterproduct(items.name)}>
              <img src={items.img} alt="" />
              <span>{items.name}</span>
            </div>
          ))}
        </div>
       
        <div className="product-section">
        {cate.map((item,idx)=>(
          <Products key={idx} name={item.name} price={item.price} image={item.image} id={item.id}/> 
        ))}
       </div>
    </div>
  
  )
}

export default Shops