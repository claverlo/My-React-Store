import Product from "../components/Products"; // Assignment  start

import "./Catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [product, setProduct] = useState([]);

    useEffect(function () {
        loadCatalog();
    }, []);

    function loadCatalog() {
        let services = new DataService();
        let data = services.getProducts();
        setProduct(data);
    }

    return (
        <div className="catalog">
            <h1>Check our amazing products</h1>

          {product.map((prod) => (
  <Product key={prod.id} data={prod} />
))}

        </div>
    );
}

export default Catalog;
