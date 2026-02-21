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
    <div className="catalog text-center pb-5 bg-light">
      <h1>Check out our amazing products</h1>

      <div className="filters d-flex justify-content-center gap-2 align-items-center flex-nowrap overflow-auto">
        <button
          onClick={clearFilter}
          className="btn btn-primary"
        >
          All Products
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => filter(cat)}
            className="btn btn-primary"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container-fluid mt-4 px-5">
        <div className="row">
          {prodsToDisplay.map((prod, index) => (
            <div
              key={prod._id || prod.id || index}
              className="col-12 col-sm-6 col-lg-3 mb-4 d-flex"
            >
              <div className="w-100 bg-primary bg-gradient text-white rounded p-3 shadow">
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