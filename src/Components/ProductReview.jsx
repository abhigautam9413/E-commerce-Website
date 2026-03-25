import React,{useState} from 'react'
import ChevronDown from '../Icons/ChevronDown'
import ChevronUp from '../Icons/ChevronUp'


const ProductReview = ({reviews}) => {

    const[activeIndex,setActiveIndex] = useState(null);

  return (
      <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="space-y-6">

    {reviews.map((review,index) =>{
        return(
            <ReviewAccordian
             review={review}
             index={index}
             activeIndex = {activeIndex}
             setActiveIndex = {setActiveIndex}
 
            />
        )
    })}
    </div>
    </div>
  );
};

export default ProductReview;

const ReviewAccordian = ({review,index,activeIndex,setActiveIndex}) => {
    let {reviewerName,rating,comment} = review;

    return(
        <div key={index} className="border rounded-lg p-4 bg-gray-50">
      <div
        onClick={() => {
          activeIndex == index ? setActiveIndex(null) : setActiveIndex(index);
        }}
        className="flex justify-between"
      >
        <div className="flex">
          <h4 className="font-semibold pr-5">{reviewerName}</h4>
          <span className="text-red-600"> {rating}</span>
        </div>
        {index == activeIndex ? <ChevronUp /> : <ChevronDown />}
      </div>
      {index == activeIndex && <p className="text-gray-600 mt-2">{comment}</p>}
    </div>
    );
};