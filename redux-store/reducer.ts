import actionTyepes from "./action";

const intial_state  = {
    repos : [],
    commits : {}
}

type Action = {
    type: string,
    payload: any,
}


const reducer = ( store = intial_state  , action:Action )=>{
    switch(action.type){

        case actionTyepes.storeRepo:
            return {
                ...store,
                repos : action.payload
            }

        case actionTyepes.storeCommits:
            console.log(action.payload)
            return {
                ...store,
                commits : action.payload
            }

        default:
            return store;
    }
}


export default reducer;