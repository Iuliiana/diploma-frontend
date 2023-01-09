import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rootApi} from "./rootApi";
import search from "./slices/searchSlice";
import filter from "./slices/filterSlice";
import categories from "./slices/categoriesSlice";
import catalog from "./slices/catalogSlice";
import basket from "./slices/basketSlice";
import product from "./slices/productSlice";


const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    search,
    filter,
    categories,
    catalog,
    basket,
    product,
});


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rootApi.middleware),
});
export default store;
