import {createSlice} from "@reduxjs/toolkit";

export const trainerNameSlice= createSlice({
    name:'TrainerName',
    initialState:'Ricardo',
    reducers:{
        setTrainerName:(state,action)=>action.payload

    }
})

export const {setTrainerName} = trainerNameSlice.actions

export default trainerNameSlice.reducer