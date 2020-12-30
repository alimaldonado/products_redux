import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductToEdit } from "../actions/productActions";
import Swal from 'sweetalert2';


const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const history = useHistory();


  const confirmDelete = (id) => {
      Swal.fire({
          title: 'Are you sure?',
          text:'You cannot recover a deleted product',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel'
      }).then((result)=>{
          if (result.value) {
              dispatch(deleteProductAction(id));
          }
      });
  };

  //redirects to edite
  const redirectToEdit = product => {
    dispatch(getProductToEdit(product));
    history.push(`/products/edit/${product.id}`);
  }

  return (
    <tr>
      <td> {name} </td>
      <td>
        {" "}
        <span className="font-weight-bold"> $ {price} </span>{" "}
      </td>
      <td className="acciones">
        <button type="button" onClick={() => redirectToEdit(product)} className="btn btn-primary mr-2">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
