// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// const ProductGrid = () => {
//   const[productData ,  setProductData] =  useState([]);

//     async function getData(){
//         let data = await fetch("https://dummyjson.com/products");
//         let jsonData = await data.json();
//         setProductData(jsonData.products);
//     }

//     useEffect(()=>{
//         getData();
//     } , [])

//   return (
//     <div>Products</div>
//   )

// }

// export default ProductGrid
import React, { useState,useContext } from 'react';
import ProductCard from './productCard';
import ProductCardSkeleton from "./ProductCardSkeleton";
import { ThemeContext } from '../Store/ThemeProvider';
import UseProducts from '../Hooks/UseProducts';


const ProductGrid = () => {
  
  
  const {theme} = useContext(ThemeContext);
  
  const [currentPage,setCurrentPage] = useState(1);
  const {productData,loading,error} = UseProducts(currentPage);
  

  
   if (loading) {
     return <ProductCardSkeleton />;
   }
  if (error) {
    return <p>...api failing </p>;
  }
  let checkedBtn ="join-item btn btn-square bg-green-500"
  let uncheckedBtn ="join-item btn btn-square"

  const light = "flex justify-center items-center w-screen flex- z-10 flex-col";
  const dark =
    "flex bg-gray-500 justify-center items-center w-screen flex- z-10 flex-col";

  return (
    <div className = {theme == "light"? dark:light}>
    
      <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7 z-10">
        {productData.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
      </div>
      <div className="join mt-10 mb-10" >
        <input
          onClick={()=>{
            setCurrentPage(1);
          }
          }
           className={currentPage == 1 ? checkedBtn: uncheckedBtn}
          type="radio"
          name="options"
          aria-label="1"
          
        />
        <input
           onClick={()=>{
            setCurrentPage(2)
          }
          }
           className={currentPage == 2 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
        onClick={()=>{
            setCurrentPage(3)
          }
          }
           className={currentPage == 3 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
        onClick={()=>{
            setCurrentPage(4)
          }
          }
           className={currentPage == 4 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="4"
        />
        <input
        onClick={()=>{
            setCurrentPage(5)
          }
          }
           className={currentPage == 5 ? checkedBtn : uncheckedBtn}
          type="radio"
          name="options"
          aria-label="5"
        />
      </div>
    </div>
  );
};

export default ProductGrid;