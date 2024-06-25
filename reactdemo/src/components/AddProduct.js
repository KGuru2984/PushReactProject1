import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddProduct = () => {
    const baseURL = "http://localhost:8080/product/add";
    const navigate = useNavigate();
    const [enteredName, setName] = useState('');
    const [enteredPrice, setPrice] = useState('');
    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
      };
    
      const priceChangeHandler = (event) => {
        setPrice(event.target.value);
      };
    
      const submitActionHandler = (event) => {
        event.preventDefault();
        axios
          .post(baseURL, {
            name: enteredName,
            price: enteredPrice
          })
          .then((response) => {
            alert("Product "+ enteredName +" added!");
            navigate("/read");
          }).catch(error => { 
            alert("error==="+error);
          });
        
      };
      return(  
        <Alert variant='primary'>
        <Container>
        <Form onSubmit={submitActionHandler}>
          <Form.Group controlId="form.Name">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Enter User Name" required/>
          </Form.Group>
          <Form.Group  controlId="form.Role">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" value={enteredPrice} onChange={priceChangeHandler} placeholder="Enter Price" required/>
          </Form.Group>
          <br></br>
          <Button type='submit'>Add Product</Button>
          &nbsp;&nbsp;&nbsp;
         
        </Form>
        
      </Container>     
      </Alert>      
      
      );
  }
  // <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>

      export default AddProduct;
