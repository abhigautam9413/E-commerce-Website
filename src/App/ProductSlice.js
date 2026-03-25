import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productDataMap:{},
    homePageMap:{},
    categoryMap:{},
    wishlistData:{},
    cartData:{},

}

export const ProductSlice= createSlice({
   name: "Product",
   initialState,
   reducers: {
    addProductDataById: (state,action) =>{
        
        const productDataArray = action.payload;
        for(let i = 0; i<productDataArray.length; i++){
            const productData = productDataArray[i];
           state.productDataMap[productData.id] = productData;

        }
    },
    addProductsArrayByPage:(state,action) => {
         const pageNumber = action.payload.pageNumber;
         const productArray = action.payload.productArray;
         state.homePageMap[pageNumber] = productArray;
    },
    addCategoryProductsData:(state,action) => {
        const productCategory = action.payload.category;
        const productArray = action.payload.productArray;
        state.categoryMap[productCategory] = productArray;
    },
    addToWishlist: (state, action) => {
      //payload structure ---> productData
      const productData = action.payload;
      state.wishlistData[productData.id] = productData;
    },
    removeFromWishlist: (state,action) =>{
        const id = action.payload;
        delete state.wishlistData[id];
    },
    addToCart:(state,action)=>{
        const data = action.payload;
        const id = data?.id;
        const isProductInCart = state.cartData?.[id];

        if(isProductInCart){
            state.cartData[id].quantity += 1
        }else{
           state.cartData[id] = {productData: data,quantity:1};
        }
    },
    decreaseQuantityInCart:(state,action)=>{
       const id = action.payload;
       const isProductInCart = state.cartData?.[id];
       if(isProductInCart){
        if(isProductInCart.quantity == 1){
            delete state.cartData[id];
        }else{
            state.cartData[id].quantity -= 1;
        }
       }
    },
    removeFromCart:(state,action)=>{
      const id = action.payload;
      const isProductInCart = state.cartData?.[id];
      if(isProductInCart){
          delete state.cartData[id];
      }
}
   },
});
 
export const {addProductDataById,
    addProductsArrayByPage,
    addCategoryProductsData,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    decreaseQuantityInCart,
    removeFromCart} = ProductSlice.actions;
export default ProductSlice.reducer;