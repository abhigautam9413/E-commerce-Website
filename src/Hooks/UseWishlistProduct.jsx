import React from 'react'
import { useDispatch } from 'react-redux'
import UseIsProductInWishlist from './UseIsProductInWishlist'
import { addToWishlist,removeFromWishlist } from '../App/ProductSlice'

const UseWishlistProduct = (productData) => {
    const id = productData?.id;
    const dispatch = useDispatch();
    const isProductInWishList = UseIsProductInWishlist(id);

    function handleWishlist(){
        if(isProductInWishList){
           dispatch(removeFromWishlist(id));
        }else{
            dispatch(addToWishlist(productData));
        }
    }
  return { handleWishlist,isProductInWishList}
}

export default UseWishlistProduct;