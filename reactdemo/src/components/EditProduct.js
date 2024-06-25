import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditProduct = () => {

    const editURL = "http://localhost:8080/product/update";
    const navigate = useNavigate();
    const param = useParams();
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
  
    useEffect(() => {

        axios.get("http://localhost:8080/product/id/"+param.id).then((response) => {
          const productData = response.data;
          setProductId(productData.productid);
          setProductName(productData.name);
          setProductPrice(productData.price);
      
        }).catch(error => { 
          alert("Error Ocurred getting Product detail:"+ error);
        });
      }, []);
      
      const nameChangeHandler = (event) => {
        setProductName(event.target.value);
      };
    
      const priceChangeHandler = (event) => {
        setProductPrice(event.target.value);
      };
    
    
      const submitActionHandler = (event) => {
        event.preventDefault();
        axios
          .patch(editURL, {
            productid: productId,
            name: productName,
            price: productPrice
          })
          .then((response) => {
            alert("Product "+ productId+" updated!");
            navigate('/read')
    
          }).catch(error => { 
            alert("Error Ocurred updating employee:"+ error);
          });
          
      };

      return(  
        <Alert variant='primary'>
        <Container>
        <Form onSubmit={submitActionHandler} id="data">
        <Form.Group  controlId="form.id">
              <Form.Label>Product Id</Form.Label>
              <Form.Control  value={productId} readonly='readonly'/>
          </Form.Group>
          <Form.Group controlId="form.Name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" value={productName} onChange={nameChangeHandler} placeholder="Enter Product Name" required/>
          </Form.Group>
          <Form.Group  controlId="form.Role">
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" value={productPrice} onChange={priceChangeHandler} placeholder="Enter Price" required/>
          </Form.Group>
          <br></br>
          <Button type='submit'>Update Product</Button>
          &nbsp;&nbsp;&nbsp;
          
        </Form>
      </Container>     
      </Alert>      
      
      );
  }
  export default EditProduct;