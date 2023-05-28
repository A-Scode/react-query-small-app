import { Action } from "@reduxjs/toolkit";
import actionTyepes from "./action";

const intial_state  = {
    repos : []
}


const reducer = ( store = intial_state  , action:Action )=>{
    switch(action?.type){

        case actionTyepes.storeRepo:
            return {
                ...store,
                repos : action.payload
            }

        default:
            return store;
    }
}


export default reducer;