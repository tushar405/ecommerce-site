import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action) =>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
        return state.filter((item)=>(
            item.id!==action.payload
        ))
        }
    }
    
})

export const {addItem,removeItem} = cartslice.actions;
export default cartslice.reducer;