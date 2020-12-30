import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productActions";
import { useHistory } from "react-router-dom";

const EditProduct = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [product, saveProduct] = useState({
        name: '',
        price: ''
    })

    const productToEdit = useSelector(state => state.products.productEdit);
    console.log(product);

    useEffect(()=>{
        saveProduct(productToEdit);
    },[productToEdit]);

    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const { name, price} = product;

    const submitProductEdit = e => {
        e.preventDefault();
        dispatch(editProductAction(product));

        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold" >
                            Edit Product
                        </h2>
                        <form 
                            onSubmit={submitProductEdit}
                        >
                            <div className="form-group">
                                <label >Product Name</label>
                                <input type="text"
                                className="form-control"
                                placeholder="Product Name"
                                name="name"
                                value={name}
                                onChange={onChangeForm} />
                            </div>
                            <div className="form-group">
                                <label >Product Price</label>
                                <input type="number"
                                className="form-control"
                                placeholder="Product Price"
                                name="price"
                                value={price} 
                                onChange={onChangeForm} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;