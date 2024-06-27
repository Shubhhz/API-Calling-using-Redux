import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//action that will dispatch
export const fetchcomments= createAsyncThunk('fetchcomments',async()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/comments");
    return response.json();
})

//extra extrareducers : builder are used in redux for storing the data in our store ater fetching 
const commentSlice =createSlice({
    name:'comment',
    initialState:{
        isLoading: false,
        data: null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchcomments.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchcomments.pending,(state,action)=>{
            state.isLoading=true;
            
        });
        builder.addCase(fetchcomments.rejected,(state,action)=>{
            console.error("Error",action.payload);
            state.isError=true
        });
    }
})

export default commentSlice.reducer