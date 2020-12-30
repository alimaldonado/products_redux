import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productActions";
import Swal from 'sweetalert2';

const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();

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
  return (
    <tr>
      <td> {name} </td>
      <td>
        {" "}
        <span className="font-weight-bold"> $ {price} </span>{" "}
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
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
