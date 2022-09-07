import { configureStore } from "@reduxjs/toolkit";
import TrainerName from './slices/TrainerName.slice'

export default configureStore({
    reducer:{
        //aqui van los slices
        TrainerName

    }
})
