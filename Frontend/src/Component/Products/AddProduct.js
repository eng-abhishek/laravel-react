import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    price: "",
    base_price:"",
    selling_price:"",
    stock_qty:"",
    product_color:[],
    short_description:"",
    description:"",
  });

  const handleSubmit = (e) => {

    console.log(e);

    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/products", data)
      .then(() => navigate("/"));
  };

  return (
     <div className="container mt-4">
      <h2>Add New Product</h2>

      <form className="mt-3" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input 
            type="text"
            className="form-control"
            value={data.name}
            onChange={e => setData({...data, name: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-lable">Base Price</label>
          <input type="number" className="form-control" name="base_price"
          onChange={e=>setData({...data,base_price:e.target.base_price})}
          required
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Selling Price</label>
          <input type="number" className="form-control" name="selling_price"
           onChange={e=>setData({...data,selling_price:e.target.selling_price})}
           required
           ></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Stock QTY</label>
          <input type="number" className="form-control" onChange={e=>setData({...data,stock_qty:e.target.stock_qty})}
           name="stock_qty" required></input>
        </div>

        <div className="mb-3">
         <label className="form-lable">Product Color</label>
         Red : <input type="checkbox" name="product_color" onChange={e=>setData({...data,product_color: e.target.value})} value="red" />
         <br/>
         Black : <input type="checkbox" name="product_color" onChange={e=>setData({...data,product_color: e.target.value})} value="red" />
         <br/>
         Blue : <input type="checkbox" name="product_color" onChange={e=>setData({...data,product_color: e.target.value})} value="red" />
        </div>

        <div className="mb-3">
          <label className="form-lable">Short Description</label>
          <textarea className="form-control" name="short_description"
           onChange={e=>setData({...data,short_description: e.target.value})}
            cols={5} rows={3} required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-lable">Description</label>
          <textarea className="form-control" name="description"
           onChange={e=>setData({...data,description: e.target.value})}
            cols={10} rows={6} required></textarea>
        </div>

        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
