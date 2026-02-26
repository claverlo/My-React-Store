import Product from "../components/Products";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(() => {
    loadCatalog();
  }, []);

  function loadCatalog() {
    const service = new DataService();
    const data = service.getProducts();

    setProducts(data);
    setProdsToDisplay(data);
    setCategories(["PC", "Keyboard", "Mouse"]);
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  function filter(category) {
    const list = products.filter(
      (prod) => prod.category === category
    );
    setProdsToDisplay(list);
  }
return (
  <div className="position-relative min-vh-100 pt-5 pb-5">

    <img
      src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      alt=""
    />

    <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50"></div>

    <div className="container-fluid position-relative">

    
      <div className="d-flex justify-content-center gap-2 align-items-center flex-nowrap overflow-auto mb-4">
        <button onClick={clearFilter} className="btn btn-dark">
          All Products
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => filter(cat)}
            className="btn btn-dark"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {prodsToDisplay.map((prod, index) => (
          <div
            key={prod._id || prod.id || index}
            className="col-12 col-sm-6 col-lg-3 mb-4 d-flex"
          >
            <div className="w-100 bg-dark bg-gradient text-white rounded p-1 shadow">
              <Product data={prod} />
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default Catalog;