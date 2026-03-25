import React,{useContext} from "react";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Products/productGrid";
import { ThemeContext } from "../Store/ThemeProvider";
import Carousal from "../Components/Carousal";
const Home = () => {
  const {theme} = useContext(ThemeContext); 
  return (
    <div style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "195vh",
        padding: "20px",
      }}>
    <div>
      <Navbar />
      <Carousal/>
      <ProductGrid />
      
    </div>
    </div>
  );
};

export default Home;