import productReducer from "../reducers/productReducer";
import sectionReducer from "../reducers/sectionReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    productReducer,
    sectionReducer
})
const store= createStore(rootReducer)

export default store;