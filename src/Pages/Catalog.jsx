import Product from "../components/Products";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import catalogjersey from "../Images/catalogjersey.jpg";
import catlogshoes from "../Images/catlogshoes.jpg";
import catalogaccesories from "../Images/catalogaccesories.jpg";


function Catalog() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);
  const [currentImage, setCurrentImage] = useState(catalogjersey);

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [productImgIndexes, setProductImgIndexes] = useState({});

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCatalog();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get("category");

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    if (selectedCategory) {
      applyFilters(selectedCategory, selectedGender, selectedSize);
    }
  }, [selectedCategory]);

  function loadCatalog() {
    const service = new DataService();
    const data = service.getProducts();

    setProducts(data);
    setProdsToDisplay(data);
    setCategories(["Jersey", "Shoes", "Accessories"]);
    setCurrentImage(catalogjersey);

    const initialIndexes = {};
    data.forEach((prod) => {
      initialIndexes[prod._id] = 0;
    });
    setProductImgIndexes(initialIndexes);
  }

  function handleSearch(text) {
    setSearch(text);

    let data = [...products];

    if (text) {
      const keyword = text.toLowerCase();

      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(keyword) ||
          p.category.toLowerCase().includes(keyword) ||
          p.gender.toLowerCase().includes(keyword)
      );
    }

    setProdsToDisplay(data);
  }

  function clearFilter() {
    setSelectedCategory("");
    setSelectedGender("");
    setSelectedSize("");
    setSearch("");
    setProdsToDisplay(products);
    setCurrentImage(catalogjersey);
  }

  function applyFilters(
    category = selectedCategory,
    gender = selectedGender,
    size = selectedSize
  ) {
    let list = [...products];

    if (search) {
      const keyword = search.toLowerCase();
      list = list.filter(
        (prod) =>
          prod.title.toLowerCase().includes(keyword) ||
          prod.category.toLowerCase().includes(keyword) ||
          prod.gender.toLowerCase().includes(keyword)
      );
    }

    if (category) {
      list = list.filter(
        (prod) => prod.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (gender) {
      list = list.filter(
        (prod) =>
          prod.gender?.toLowerCase() === gender.toLowerCase() ||
          prod.gender?.toLowerCase() === "unisex"
      );
    }

    if (size) {
      list = list.filter(
        (prod) =>
          prod.sizes &&
          prod.sizes.some(
            (s) =>
              s.label.toString() === size.toString() &&
              Number(s.stock) > 0
          )
      );
    }

    setProdsToDisplay(list);

    if (category === "Jersey") setCurrentImage(catalogjersey);
    else if (category === "Shoes") setCurrentImage(catlogshoes);
    else if (category === "Accessories") setCurrentImage(catalogaccesories);
    else setCurrentImage(catalogjersey);
  }

  function filterCategory(cat) {
    const newCategory = cat === selectedCategory ? "" : cat;
    setSelectedCategory(newCategory);
    setSelectedSize("");
    applyFilters(newCategory, selectedGender, "");
  }

  function filterGender(gender) {
    const newGender = gender === selectedGender ? "" : gender;
    setSelectedGender(newGender);
    applyFilters(selectedCategory, newGender, selectedSize);
  }

  function filterSize(size) {
    const newSize = size === selectedSize ? "" : size;
    setSelectedSize(newSize);
    applyFilters(selectedCategory, selectedGender, newSize);
  }

  function getSizeOptions() {
    if (selectedCategory === "Jersey") {
      return ["S", "M", "L", "XL", "XXL"];
    }
    if (selectedCategory === "Shoes") {
      return [5, 6, 7, 8, 9, 10, 11, 12];
    }
    return [];
  }

  function nextProductImage(productId, imagesLength) {
    setProductImgIndexes((prev) => ({
      ...prev,
      [productId]: ((prev[productId] ?? 0) + 1) % imagesLength
    }));
  }

  function prevProductImage(productId, imagesLength) {
    setProductImgIndexes((prev) => ({
      ...prev,
      [productId]:
        ((prev[productId] ?? 0) - 1 + imagesLength) % imagesLength
    }));
  }

  function getHoveredImage() {
    if (!hoveredProduct) return "";

    if (hoveredProduct.images) {
      const index = productImgIndexes[hoveredProduct._id] ?? 0;
      return hoveredProduct.images[index];
    }

    return hoveredProduct.image;
  }

  return (
    <div className="min-vh-100 pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 border-end">
            <button
              onClick={clearFilter}
              className={`btn w-100 mb-3 ${
                !selectedCategory && !selectedGender && !selectedSize && !search
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
            >
              All Products
            </button>

            <h5 className="fw-bold mb-3">Filters</h5>

            <div className="mb-3">
              <h6 className="fw-bold">Gender</h6>
              <button
                className={`btn w-100 mb-2 ${
                  selectedGender === "Men" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterGender("Men")}
              >
                Men
              </button>
              <button
                className={`btn w-100 ${
                  selectedGender === "Women" ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => filterGender("Women")}
              >
                Women
              </button>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold">Category</h6>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => filterCategory(cat)}
                  className={`btn w-100 mb-2 ${
                    selectedCategory === cat ? "btn-dark" : "btn-outline-dark"
                  }`}
                >
                  {cat === "Jersey" ? "Jerseys" : cat}
                </button>
              ))}
            </div>

            {selectedCategory && getSizeOptions().length > 0 && (
              <div className="mb-3">
                <h6 className="fw-bold">Size</h6>
                {getSizeOptions().map((size) => (
                  <button
                    key={size}
                    onClick={() => filterSize(size)}
                    className={`btn w-100 mb-2 ${
                      selectedSize === size ? "btn-dark" : "btn-outline-dark"
                    }`}
                  >
                    {size}
                  </button>
                ))}
                <button
                  className="btn w-100 btn-outline-secondary"
                  onClick={() => {
                    setSelectedSize("");
                    applyFilters(selectedCategory, selectedGender, "");
                  }}
                >
                  Clear Size
                </button>
              </div>
            )}
          </div>

          <div className="col-md-10">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Nike, Adidas, shoes..."
                value={search}
                onChange={(e) => {
                  const value = e.target.value;
                  handleSearch(value);
                }}
              />
            </div>

            <div className="mb-4">
              <img
                src={currentImage}
                className="w-100 rounded"
                style={{ height: "220px", objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="row">
              {prodsToDisplay.map((prod, index) => (
                <div
                  key={prod._id || prod.id || index}
                  className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center"
                >
                  <div className="w-100 bg-dark bg-gradient text-white rounded">
                    <Product
                      data={prod}
                      imgIndex={productImgIndexes[prod._id] ?? 0}
                      onNextImage={() =>
                        prod.images &&
                        nextProductImage(prod._id, prod.images.length)
                      }
                      onPrevImage={() =>
                        prod.images &&
                        prevProductImage(prod._id, prod.images.length)
                      }
                      onHover={(e) => {
                        setHoveredProduct(prod);
                        setMousePos({ x: e.clientX, y: e.clientY });
                      }}
                      onHoverMove={(e) => {
                        setMousePos({ x: e.clientX, y: e.clientY });
                      }}
                      onHoverLeave={() => setHoveredProduct(null)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {hoveredProduct && (
        <div
          className="position-fixed bg-white shadow p-3 rounded text-dark"
          style={{
            top: mousePos.y + 20,
            left:
              mousePos.x > window.innerWidth / 2
                ? mousePos.x - 480
                : mousePos.x + 20,
            width: "450px",
            zIndex: 999
          }}
        >
          <img src={getHoveredImage()} className="w-100 mb-2" alt="" />
          <h6>{hoveredProduct.title}</h6>
          <p>${hoveredProduct.price}</p>
        </div>
      )}
    </div>
  );
}

export default Catalog;