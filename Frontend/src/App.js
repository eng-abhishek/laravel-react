import logo from './logo.svg';
import './App.css';
import FetchUserInfo from './Component/FetchUserInfo';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Component/Products/ProductList";
import AddProduct from "./Component/Products/AddProduct";
import EditProduct from "./Component/Products/EditProduct";


function App() {
  return (
    // <div className="App">
    //  <FetchUserInfo />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
