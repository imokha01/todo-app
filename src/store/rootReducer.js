import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice(

    {
        name:"count",
        initialState: { counter: 0 , name: 'ice' },
        reducers:{
            increment:(state)=>{
                state.counter+=1
                state.name = 'GMC'
            },
            decrement: (state)=>{
               state.counter === 0  ? state.counter = 0 :  state.counter-=1
                state.name = 'deji'
            }
    }
}
)


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer