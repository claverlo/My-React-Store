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
            title: title,
            category: category,
            image: image,
            price: price
        }

        setProducts([...products, newProduct])

        setTitle("")
        setCategory("")
        setImage("")
        setPrice("")
    }

    return (
        <div className="position-relative min-vh-50 pt-5 pb-0">

            <img
                src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt=""
            />

            
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-75"></div>

            <div className="container-fluid position-relative">

                <h1 className="text-center">Store Administration</h1>

                <div className="d-flex gap-0">

                    <section className="w-50 border border-5 border-primary  p-5">
                        <h2 className="text-center">Add Products</h2>

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

                        <div className="text-center">
                            <button onClick={saveProduct}>Save Product</button>
                        </div>

                        <h4 className="mt-4">Products List</h4>

                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>
                                    {product.title} - ${product.price}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="w-50 border border-5 border-primary p-5">
                        <h2 className="text-center">Add Coupons</h2>

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

                        <div className="text-center">
                            <button onClick={saveCoupon}>Save Coupon</button>
                        </div>

                        <h4>Coupon List</h4>

                        <ul>
                            {coupons.map(coupon => (
                                <li key={coupon.code}>
                                    {coupon.code} - {coupon.discount}%
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