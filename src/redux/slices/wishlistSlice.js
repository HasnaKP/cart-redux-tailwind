import { createSlice } from "@reduxjs/toolkit";


 const wishlistSlice = createSlice({
    name:'wishlist',
    initialState: [],
    reducers:{
        addTowishlist:(state,actionFromview)=>{
            state.push(actionFromview.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})

export const {addTowishlist, removeItem } = wishlistSlice.actions
export default wishlistSlice.reducer