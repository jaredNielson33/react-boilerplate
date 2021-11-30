import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import exampleReducer from "./example/example-reducer";

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['cart', 'directory', 'shop']
}

const rootReducer = combineReducers({
    user: exampleReducer,
    // user: userReducer,
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer);