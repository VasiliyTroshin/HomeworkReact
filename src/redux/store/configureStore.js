import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReduser";
import { messageReducer } from "./reducers/messageReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import { botReducer } from "./reducers/botReducer";


const persistConfig={
    key:'root',
    storage
}

 const rootReducer=combineReducers({
     bot:botReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistedReducer,applyMiddleware(thunk))

export const persistor=persistStore(store)