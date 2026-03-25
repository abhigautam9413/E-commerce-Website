import React from 'react'
import { useSelector } from 'react-redux'
import Wishlist from '../Screens/Wishlist';
const UseIsProductInWishlist = (id) => {
  
    const wishlistData = useSelector((store)=> store.product.wishlistData);
    console.log(Wishlist);
    return wishlistData[id] ? true : false;
  
};
export default UseIsProductInWishlist;