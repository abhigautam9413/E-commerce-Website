import React,{useState,useEffect,useRef} from 'react'
import image1 from "../Assests/image1.webp"
import image2 from "../Assests/image2.webp"
import image3 from "../Assests/image3.webp"
import image4 from "../Assests/image4.webp"
import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'
import {useNavigate} from "react-router-dom"

 let images = [
      {image:image1, url:"beauty"},
      {image:image2, url:"fragrance"},
      {image:image3, url:"furniture"},
      {image:image4, url: "groceries"},
   ];

const Carousal = () => {
    const [activeIndex,setActiveIndex] = useState(3);
    

   const navigation = useNavigate();

     function handleLeft(e){
      e.stopPropogation();
        setActiveIndex((activeIndex-1+images.length)%images.length);
     }
     function handleRight(e){
       e.stopPropogation();
        setActiveIndex((activeIndex+1)%images.length);
     }  

     function clearTimer(){
         if(timerRef.current){
          clearInterval(timerRef.current);
         }
     }

     function addTimer(){
        timerRef.current = setInterval(()=>{
          setActiveIndex((prev) =>{
             return (prev+1) % images.length;
          });
        },3000);
     }

     function handleMouseEnter(){
        clearTimer();
     }

     function handleMouseLeave(){
        clearTimer();
        addTimer();
     }

     const timerRef = useRef(null);

     useEffect(()=>{

        clearTimer();
        addTimer();
        return clearTimer();
    
        
     },[]);

     function handleClick(){
     navigation(`/category/${images[activeIndex].url}`);
      }
     



  return (

     <div onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave ={handleMouseLeave}
          className="h-[45vh] w-screen relative">
      <div className="h-[45vh] w-screen relative">
       <div onClick={(e)=>{
          handleLeft(e)
       }}  
       className="bg-white h-10 absolute left-0 justify-center items-center top-[20vh]"><ChevronLeft/>
       </div>

      <div onClick={(e)=>{
         handleRight(e);
      }} 
      className="bg-white h-10 absolute right-0 justify-center items-center top-[20vh]">
        <ChevronRight/>
      </div>
      <div className="h-full w-full">
        <img className="h-full w-full" src={images[activeIndex].image} alt="" />
      </div>
      </div>
      </div>
  )
}
 
export default Carousal;