import { useState, useContext } from 'react'
import GlobalContext from "../State/globalContext"
import background from "../Images/admin.jpg"

function Admin() {

    const { addCoupon } = useContext(GlobalContext)

    const [isAuth, setIsAuth] = useState(false)
    const [password, setPassword] = useState("")

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
            code: couponCode.toUpperCase(),
            percent: Number(couponDiscount)
        }

        addCoupon(newCoupon)

        setCoupons([...coupons, { code: newCoupon.code, discount: newCoupon.percent }])
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

    const jerseyStyle = {
        clipPath: "polygon(15% 0%, 85% 0%, 95% 12%, 100% 25%, 100% 45%, 85% 50%, 85% 100%, 15% 100%, 15% 50%, 0% 45%, 0% 25%, 5% 12%)",
        outline: "3px solid black",
        borderRadius: "12px",
        padding: "40px",
        backgroundColor: "white",
        overflow: "hidden"
    }

    const innerStyle = {
        width: "70%",
        margin: "0 auto",
        paddingTop: "20px",
        paddingBottom: "20px"
    }

    if (!isAuth) {
        return (
            <div className="container mt-5 text-center">
                <h2>Admin Login</h2>

                <input
                    type="password"
                    className="form-control mt-3"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn btn-dark mt-3"
                    onClick={() => {
                        if (password === "") {
                            setIsAuth(true)
                        } else {
                            alert("Wrong password")
                        }
                    }}
                >
                    Enter
                </button>
            </div>
        )
    }

    return (
        <div className="position-relative min-vh-100 pt-5 pb-5">

            <img
                src={background}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover" }}
                alt=""
            />

            <div className="container-fluid position-relative">

                <div className="d-flex gap-4">

                    <section className="w-50 shadow" style={jerseyStyle}>
                        <div style={innerStyle}>
                            <h2 className="mb-4 text-center">Add Products</h2>

                            <div className="mb-4">
                                <label className="form-label">Title</label>
                                <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-control"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">
                                    Image <span className="text-secondary">(URL)</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="https://www.image.com/sample.jpg"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Price</label>
                                <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>

                            <div className="d-flex justify-content-center gap-3">
                                <button onClick={saveProduct} className="btn btn-primary">Save Product</button>
                                <button onClick={clearAllProducts} className="btn btn-danger">Clear All Products</button>
                            </div>

                            <div className="mt-4">
                                {products.map((prod, index) => (
                                    <div key={index} className="mb-4 p-4 bg-light w-100">

                                        <div className="d-flex flex-column align-items-center position-relative">

                                            <img src={prod.image} style={{ width: "250px", height: "250px", objectFit: "cover" }} />

                                            <div style={{
                                                position: "absolute",
                                                bottom: "10px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                background: "black",
                                                color: "white",
                                                padding: "5px 10px"
                                            }}>
                                                ${prod.price}
                                            </div>

                                            <button
                                                className="btn btn-danger position-absolute"
                                                style={{ bottom: "10px", right: "10px" }}
                                                onClick={() => deleteProduct(index)}
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>

                    <section className="w-50 shadow" style={jerseyStyle}>
                        <div style={innerStyle}>
                            <h2 className="mb-4 text-center">Add Coupons</h2>

                            <div className="mb-4">
                                <label className="form-label">Code</label>
                                <input className="form-control" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Discount</label>
                                <input className="form-control" type="number" value={couponDiscount} onChange={(e) => setCouponDiscount(e.target.value)} />
                            </div>

                            <div className="d-flex justify-content-center gap-3">
                                <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
                                <button onClick={clearAllCoupons} className="btn btn-danger">Clear All Coupons</button>
                            </div>

                            <div className="mt-4">
                                {coupons.map((c, index) => (
                                    <div 
                                        key={index} 
                                        className="p-3 mb-3 bg-light text-center position-relative"
                                    >

                                        <h4 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                                            {c.code}
                                        </h4>

                                        <p style={{ fontSize: "1.5rem" }}>
                                            {c.discount}%
                                        </p>

                                        <button
                                            className="btn btn-sm btn-danger position-absolute"
                                            style={{ top: "10px", right: "10px" }}
                                            onClick={() => deleteCoupon(index)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>

                </div>

            </div>
        </div>
    )
}

export default Admin;