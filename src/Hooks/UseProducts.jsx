import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addProductDataById,addProductsArrayByPage } from '../App/ProductSlice';

const UseProducts = (currentPage = 1) => {
    const dispatch = useDispatch();
    const homePageMap = useSelector((store) => store.product.homePageMap)
    const [productData,setProductData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    async function displayProducts() {
    try {
      let limit = 12;
      let skip = (currentPage-1)*limit;
      let apiData = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      let jsonData = await apiData.json();
      setProductData(jsonData.products);
      dispatch(
        addProductsArrayByPage({
          pageNumber: currentPage,
          productArray:jsonData.products,

     })
      );
      dispatch(addProductDataById(jsonData.products));
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const cacheProductData = homePageMap[currentPage];
    if(!cacheProductData){
      displayProducts();
    }else{
      setProductData(cacheProductData);
      setLoading(false);
    }
  }, [currentPage]);
  return {productData,loading,error}
}

export default UseProducts;