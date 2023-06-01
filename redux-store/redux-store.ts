import { configureStore } from "@reduxjs/toolkit"
import {persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import reducer from "./reducer"
import {persistStore} from "redux-persist"
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import thunk from 'redux-thunk'

const persistConfig = {
    key : "root",
    stateReconciler: hardSet,
    storage,
}

const persistedReducer = persistReducer(persistConfig , reducer )

export const store = configureStore({
    reducer : persistedReducer,
    middleware : [thunk],
})

export const persistor = persistStore(store);