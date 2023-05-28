const actionTyepes = {
    storeRepo : "storeRepo",
}

export default actionTyepes;


export const storeRepo = (value:any)=>{
    return {
        type: actionTyepes.storeRepo,
        payload: value
    }    
}