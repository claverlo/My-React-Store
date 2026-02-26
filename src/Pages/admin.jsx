import { useState } from 'react'

function Admin() {

    const [couponCode, setCouponCode] = useState('')
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [coupons, setCoupons] = useState([])

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")

    const [products, setProducts] = useState([])

    function saveCoupon() {
        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])
        setCouponCode('')
        setCouponDiscount(0)
    }

    function saveProduct() {
        const newProduct = {
            title,
            category,
            image,
            price
        }

        setProducts([...products, newProduct])

        setTitle("")
        setCategory("")
        setImage("")
        setPrice("")
    }

    function deleteProduct(indexToDelete) {
        const updated = products.filter((_, index) => index !== indexToDelete)
        setProducts(updated)
    }

    function deleteCoupon(indexToDelete) {
        const updated = coupons.filter((_, index) => index !== indexToDelete)
        setCoupons(updated)
    }

    function clearAllProducts() {
        setProducts([])
    }

    function clearAllCoupons() {
        setCoupons([])
    }

    return (
        <div className="position-relative min-vh-100 pt-5 pb-0">

            <img
                src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt=""
            />

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            <div className="container-fluid position-relative">

                <h1 className="text-center mb-4">
                    <span className="bg-dark text-white px-4 py-2 rounded-pill">
                        Store Administration
                    </span>
                </h1>

                <div className="d-flex gap-4">


                    <section className="w-50 p-5 border border-2 border-dark bg-white rounded shadow-sm">
                        <h2 className="text-center mb-4">Add Products</h2>

                        <div className="mb-4">
                            <label className="form-label">Title</label>
                            <input
                                className="form-control"
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Category</label>
                            <input
                                className="form-control"
                                type="text"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Image (URL)</label>
                            <input
                                className="form-control"
                                type="text"
                                value={image}
                                onChange={(event) => setImage(event.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Price</label>
                            <input
                                className="form-control"
                                type="number"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>


                        <div className="d-flex justify-content-center gap-3">
                            <button onClick={saveProduct} className="btn btn-primary">
                                Save Product
                            </button>

                            <button onClick={clearAllProducts} className="btn btn-danger">
                                Clear All Products
                            </button>
                        </div>



                        <div className="row mt-3">
                            {products.map((product, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card h-100 shadow-sm border position-relative">

                                        <button
                                            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                                            onClick={() => deleteProduct(index)}
                                        >
                                            Delete
                                        </button>

                                        <img
                                            src={product.image}
                                            className="card-img-top img-fluid"
                                            alt={product.title}
                                        />

                                        <div className="card-body text-center">
                                            <div className="mb-2">
                                                <span className="badge bg-secondary">
                                                    {product.category}
                                                </span>
                                            </div>

                                            <h5 className="card-title">
                                                {product.title}
                                            </h5>

                                            <p className="card-text fw-bold">
                                                ${product.price}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    <section className="w-50 p-5 border border-2 border-dark bg-white rounded shadow-sm">
                        <h2 className="text-center mb-4">Add Coupons</h2>

                        <div className="mb-4">
                            <label className="form-label">Code</label>
                            <input
                                className="form-control"
                                type="text"
                                value={couponCode}
                                onChange={(event) => setCouponCode(event.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Discount</label>
                            <input
                                className="form-control"
                                type="number"
                                value={couponDiscount}
                                onChange={(event) => setCouponDiscount(event.target.value)}
                            />
                        </div>


                        <div className="d-flex justify-content-center gap-3">
                            <button onClick={saveCoupon} className="btn btn-primary">
                                Save Coupon
                            </button>

                            <button onClick={clearAllCoupons} className="btn btn-danger">
                                Clear All Coupons
                            </button>
                        </div>


                        <ul className="list-group mt-3 mx-auto" style={{ maxWidth: "400px" }}>
                            {coupons.map((coupon, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <span>
                                        {coupon.code} - {coupon.discount}%
                                    </span>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteCoupon(index)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </section>

                </div>

            </div>
        </div>
    )
}

export default Admin