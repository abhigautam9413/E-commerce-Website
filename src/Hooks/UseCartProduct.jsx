import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from '../App/ProductSlice'
import UseGetProductById from './UseGetProductById'

const UseCartProduct = (id) => {
    const dispatch = useDispatch();
    const cartData = useSelector((store)=> store.product.cartData);
    const {productData} = UseGetProductById(id);
    const isProductInCart = cartData[id]; 
    
    function handleCartProduct(){
        if(isProductInCart){
            dispatch(removeFromCart(id));
        }else{
            dispatch(addToCart(productData));
        }
    }
  return {handleCartProduct,isProductInCart};
};

export default UseCartProduct;