import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const loadData = () => {
    axios.get("http://127.0.0.1:8000/api/products")
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
      .then(() => loadData());
  };

  return (
     <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <Link to="/add" className="btn btn-primary">Add Product</Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Price</th><th>Description</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>₹ {p.price}</td>
              <td>{p.description}</td>
              <td>
                <Link to={`/edit/${p.id}`} className="btn btn-warning btn-sm me-2">
                  Edit
                </Link>

                <button onClick={() => deleteProduct(p.id)}
                  className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
