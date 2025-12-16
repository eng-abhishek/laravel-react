import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    base_price:"",
    selling_price:"",
    stock_qty:"",
    product_color:[],
    product_cat:"",
    short_description:"",
    description:"",
  });

  const [dropdown,setDropdown] = useState("Man");

  const handleDropdown = (e) => {
    setDropdown(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/products", data)
      .then(() => navigate("/"));
  };

  const handleColor = (e) => {
     
    const {value,checked} = e.target;
    
    setData((prev)=>{
      if(checked){
       
        return {
          ...prev,
          product_color:[...prev.product_color,value]
        }

      }else{
         
        return{
          ...prev,
          product_color:prev.product_color.filter((e) => e != value)
        }

      }
    })
  }

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
          onChange={e=>setData({...data,base_price:e.target.value})}
          required
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Selling Price</label>
          <input type="number" className="form-control" name="selling_price"
           onChange={e=>setData({...data,selling_price:e.target.value})}
           required
           ></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Stock QTY</label>
          <input type="number" className="form-control" onChange={e=>setData({...data,stock_qty:e.target.value})}
           name="stock_qty" required></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Product Category</label>
          <select name="product_cat" onChange={e=>setData({...data,product_cat:e.target.value})}>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
          <option value="kids">Kids</option>
          </select>
        </div>

         <div className="mb-3">
         <label className="form-lable">Product Color</label>
         <br/>
         Red : <input type="checkbox" checked={data.product_color.includes("red")} name="red" onChange={handleColor} value="red" />
         <br/>
         Black : <input type="checkbox" checked={data.product_color.includes("black")} name="black" onChange={handleColor} value="black" />
         <br/>
         Blue : <input type="checkbox" checked={data.product_color.includes("blue")} name="blue" onChange={handleColor} value="blue" /> 
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
