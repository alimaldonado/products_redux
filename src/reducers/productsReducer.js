import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    PRODUCTS_DOWNLOADING_START,
    PRODUCTS_DOWNLOADING_SUCCESS,
    PRODUCTS_DOWNLOADING_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case PRODUCTS_DOWNLOADING_START:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case PRODUCTS_DOWNLOADING_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCTS_DOWNLOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        default:
            return state;
    }
}