
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDataTable from './components/ProductDataTable';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import {Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div  class="container card mb-4 box-shadow">
    
    <div class="card-header">
        <h4 class="my-0 font-weight-normal">React Crud Example</h4>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/read" />} />
        <Route exact path="/create" element={ <AddProduct />}/>
        <Route exact path="/read" element={<ProductDataTable />}/>
        <Route path="/edit/:id" element={<EditProduct />}/>
      </Routes>
   
      
      
</div>
);
}

export default App;
