import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addProductDataById } from '../App/ProductSlice'

const UseGetProductById = (id) => {
    const productDataMap = useSelector((state)=> state.product.productDataMap);
    const dispatch = useDispatch();
    const [productData,setProductData] = useState(null);
      const [loading,setLoading] = useState(true);
      const [error , setError] = useState(null);
      

      async function displayProducts(){
            try{
              const apiData = await fetch (`https://dummyjson.com/products/${id}`,);
              const jsonData = await apiData.json();
              setProductData(jsonData);
              dispatch(addProductDataById(jsonData));//save the data in redux store
              
            }catch(err){
               setError("something went wrong!");
            }finally{
              setLoading(false);
            }
        }

        useEffect(()=>{
              if(id){
                const cacheData = productDataMap[id];
                if(cacheData){
                  setLoading(false);
                  setProductData(cacheData);
                  
                }else{
                  displayProducts();
                }
              }else{
                setError("product Id not found");
                setLoading(false);
              }
          },[id]);
  return {loading,error,productData};
};

export default UseGetProductById;