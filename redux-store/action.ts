import { ActionCreator } from "@reduxjs/toolkit";

const actionTyepes = {
    storeRepo : "storeRepo",
    storeCommits : "storeCommits",
}

export default actionTyepes;


export const storeRepo : ActionCreator<any> = (value:any)=>{
    return {
        type: actionTyepes.storeRepo,
        payload: value
    }    
}

export const storeCommits : ActionCreator<any> = (value:any)=>{
    return {
        type: actionTyepes.storeCommits,
        payload: value
    }
}