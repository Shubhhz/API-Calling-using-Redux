import { configureStore } from "@reduxjs/toolkit";
import commentreducer from './slices/coments'

export const store =configureStore({
    reducer:{
        comment: commentreducer
    }
})

//`ll try to keep slice name &reducer name same for no confusion