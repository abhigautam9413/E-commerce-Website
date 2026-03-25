import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../Products/productCard'
import WishlistIcon from '../Icons/WishlistIcon'
const Wishlist = () => {
    const wishlistData = useSelector((store) => store.product.wishlistData);
    const data = Object.values(wishlistData);
  return (
      <div>
        <Navbar/>
        {data.length>0 ?(
            <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-100 z-10">
            {data.map((pObj)=>(
                <ProductCard key ={pObj.id} data={pObj}/>
        ))}
        
      </div>
    ) :(
        <h1>No Products in Wishlist</h1>
    )};

     <Link
              to="/"
              className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Continue Shopping
            </Link>
    </div>
  );
};

export default Wishlist;