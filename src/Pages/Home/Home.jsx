import React, { useState } from 'react'
import bg from '../../assets/bg0.gif'
import './Home.css'
import { category } from '../../Category'
import Products from '../../Components/Products/Products'
import { dummydata } from '../../dummydata'

const Home = () => {
  const [cate, setcate] = useState(dummydata);
  function filterproduct(category){
let updatedata = dummydata.filter((items)=>(
 items.category===category))
 setcate(updatedata);
  }
  return (
    <div className='home'>
       <div className="bg">
        <img src={bg} alt="" />
       </div>
       
       <div className="category-box">
  {category.slice(0,5).map((items,idx) => (
    <div className="carts" key={idx} onClick={() => 
    filterproduct(items.name)}>
      <img src={items.img} alt="" />
      <span>{items.name}</span>
    </div>
  ))}
</div>

       <h1 className='heading-section'>Trending Section</h1>
       <div className="product-section">
        {cate.slice(0,7).map((item,idx)=>(
          <Products key={idx} name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
       </div>
    </div>
  )
}

export default Home