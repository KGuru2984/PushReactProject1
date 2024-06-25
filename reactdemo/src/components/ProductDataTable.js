import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css";
import editIcon from "./../assets/edit.png";
import deleteIcon from "./../assets/delete.JPG";

const ProductDataTable = () => {

    const navigate = useNavigate();
    const baseURL = "http://localhost:8080";
    const [products, setProducts] = useState([]);
  
    const setProductData = () => {
      axios.get(baseURL + "/product/").then((response) => {
        setProducts(response.data);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }
  
    useEffect(() => {
      setProductData();
    }, []);


    const removeProduct = (id) => {
      axios.delete(baseURL + "/product/delete/" + id).then((response) => {
        alert("Product record " + id + " deleted!");
        setProductData();
        navigate('/read')
  
      }).catch(error => {
        alert("Error Ocurred in removeProduct:" + error);
      });
    }
  
    return (
      <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Product
        </button>
      </nav>
       <br></br>
        <div className="col-md-6">
          <h4>Product List</h4>
  
          <div class="container">
            <div class="row">
              <div class="col-12">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      
  
                    </tr>
                  </thead>
                  <tbody>
  
                    {
                      products &&
                      products.map((product, index) => (
  
                        <tr>
                          <th scope="row">{product.productid}</th>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td >

                          <Link to={"/edit/" + product.productid}><img src={editIcon} alt="Edit" width="50" height="30" title="Edit" />
                          </Link>
                          <button
                            onClick={() => removeProduct(product.productid)} className="button"><img src={deleteIcon} alt="Remove" title="Remove" width="30" height="30" />
                          </button>
                          </td>
  
  

                        </tr>
  
                      ))
                    }
  
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
  
      </div>
  
    );
  }

    export default ProductDataTable;