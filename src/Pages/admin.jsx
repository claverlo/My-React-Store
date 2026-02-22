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
        console.log(couponCode)
        console.log(couponDiscount)

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])
        setCouponCode('')
        setCouponDiscount(0)
    }

    function saveProduct() {
        console.log(title)
        console.log(category)
        console.log(image)
        console.log(price)

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
        <div className="container">
            <h1 className="text-center">Store Administration</h1>

            <div className="d-flex gap-4">

                <section className="w-50 border rounded-3 p-4">
                    <h2>Add Products</h2>

                    <div>

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
                                placeholder=""
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

                    </div>

                    <h4 className="mt-4">Products List</h4>

                    <ul>
                        {
                            products.map((product, index) => (
                                <li key={index}>
                                    {product.title} - ${product.price}
                                </li>
                            ))
                        }
                    </ul>

                </section>

                <section className="w-50 border rounded-3 p-4">
                    <h2 className="text-center">Add Coupons</h2>

                    <div>
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
                    </div>

                    <h4>Coupon List</h4>

                    <ul>
                        {
                            coupons.map(coupon => (
                                <li key={coupon.code}>
                                    {coupon.code} - {coupon.discount}%
                                </li>
                            ))
                        }
                    </ul>

                </section>

            </div>
        </div>
    )
}

export default Admin;