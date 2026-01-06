import React from 'react'
import { FaShopify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Nav = () => {
  let dispatch = useDispatch()
  let items = useSelector(state=>state)
  console.log(items)
  return (
    <div className='nav'>
        <div className='top-nav'>
            <Link to="/"><div className="logo">
<span>V-Shop</span>
<FaShopify />
</div> </Link>
<form className='search-box'>
    <input type="text" placeholder='Search Items' />
    <button><CiSearch />
</button>
</form>
<Link to="/Cart"><div className="cart-box">
<CiShoppingCart />
<span>{items.cart.length}</span>
</div>
</Link>
        </div>
        <div className="bottom-nav">
<Link className='new' to="/">Home</Link>
<Link className='new' to="/Shop">Shop</Link>
<Link className='new' to="/Cart">Cart</Link>
<Link className='new' to="/Contact">Contact</Link>
        </div>
    </div>
  )
}

export default Nav