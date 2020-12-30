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
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

//create new products
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      //post API
      await axiosClient.post("/products", product);
      dispatch(addProductSuccess(product));
      Swal.fire("Correct", "Product added!", "success");
    } catch (error) {
      console.log(error);
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error while saving the product",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//si el producto se guarda
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});
// si hubo error

const addProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});

// downloads products from database
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const response = await axiosClient.get("/products");
      dispatch(succesLoadingProducts(response.data));
    } catch (error) {
      dispatch(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: PRODUCTS_DOWNLOADING_START,
  payload: true,
});

const succesLoadingProducts = (products) => ({
  type: PRODUCTS_DOWNLOADING_SUCCESS,
  payload: products,
});

const downloadProductsError = () => ({
  type: PRODUCTS_DOWNLOADING_ERROR,
  payload: true,
});

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));

    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());
      Swal.fire("Deleted", "Product has been deleted.", "success");
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  };
}

const deleteProduct = (id) => ({
  type: PRODUCT_DELETE,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: PRODUCT_DELETE_SUCCESS,
});

const deleteProductError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});
