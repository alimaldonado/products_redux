import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  PRODUCTS_DOWNLOADING_START,
  PRODUCTS_DOWNLOADING_SUCCESS,
  PRODUCTS_DOWNLOADING_ERROR,
  PRODUCT_DELETE,
  PRODUCT_DELETE_ERROR,
  PRODUCT_DELETE_SUCCESS,
} from "../types";

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_DOWNLOADING_START:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case PRODUCTS_DOWNLOADING_ERROR:
    case ADD_PRODUCT_ERROR:
    case PRODUCT_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PRODUCTS_DOWNLOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };
    default:
      return state;
  }
}
