//slice

import { configureStore, createSlice, ReducerType } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState: 0,
    reducers: { 
        increment:(state, action )=>{
           return state + 1;
        },
        decrement :(state,acrion)=>{
           return state - 1;
        },
        reset:(state) =>{
            return 0;
        }
    }
});

export const counterReducer = counterSlice.reducer;

export const {increment,decrement,reset} = counterSlice.actions; 