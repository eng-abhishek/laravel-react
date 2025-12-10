import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => setData(res.data));
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/products/${id}`, data)
      .then(() => navigate("/"));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>

      <form className="mt-3" onSubmit={updateProduct}>
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
          <label className="form-label">Price</label>
          <input 
            type="number"
            className="form-control"
            value={data.price}
            onChange={e => setData({...data, price: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={data.description}
            onChange={e => setData({...data, description: e.target.value})}
          ></textarea>
        </div>

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
