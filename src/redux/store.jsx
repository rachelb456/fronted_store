import { combineReducers } from "redux"
import { createStore } from "redux"
import { UserReducer } from './reducers/userReducer'
import { CategoryReducer } from './reducers/categoryReducer'
import { ProductReducer } from './reducers/productReducer'
import { SalReducer } from './reducers/salReducer'
import { idUserReducer } from './reducers/idUserReducer'
import { from } from "array-flatten";
const reducer = combineReducers({ UserReducer, ProductReducer, CategoryReducer, SalReducer, idUserReducer })
debugger
export const store = createStore(reducer)
window.store = store
export default store