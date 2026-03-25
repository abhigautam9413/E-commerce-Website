import React from "react";
import Home from "./Screens/Home";
import ProductDescription from "./Screens/ProductDescription";
import {Routes,Route} from "react-router-dom"
import ThemeProvider from "./Store/ThemeProvider";
// import productCategory from "./Screens/productCategory";
import ProductCategory from "./Screens/productCategory";
import Wishlist from "./Screens/Wishlist";
import Cart from "./Screens/Cart";

const App=() => {
return(
   
      <ThemeProvider>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path ="/Products/:id" element={<ProductDescription/>}/>
         <Route path = "/category/:url" element={<ProductCategory/>}/>
         <Route path ="/Wishlist" element={<Wishlist/>}/>
         <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </ThemeProvider>
      
   
   )
}

export default App;