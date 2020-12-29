import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';
import axiosClient  from "../config/axios";
import Swal from 'sweetalert2';

//create new products
export function createNewProductAction(product){
    return async (dispatch)=>{
        
        dispatch(addProduct());

        try {
            //post API
            await axiosClient.post('/products', product);
            dispatch(addProductSuccess(product));
            Swal.fire(
                'Correct',
                'Product added!',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error while saving the product'
            });
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

//si el producto se guarda
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})
// si hubo error

const addProductError = status => ({
    type: ADD_PRODUCT_ERROR,
    payload: status
})