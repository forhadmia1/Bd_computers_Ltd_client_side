import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const PurchasePageform = ({ item, user }) => {
    const { minimum_quantity, available_quantity, name, unit_price } = item;
    const [quantity, setQuantity] = useState(minimum_quantity)
    const [quantityError, setQuantityError] = useState('')

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    useEffect(() => {
        if (parseInt(quantity) > parseInt(available_quantity)) {
            return setQuantityError('You exceed the available quantity.')
        }
        else if (parseInt(quantity) < parseInt(minimum_quantity)) {
            return setQuantityError(`You have to purchase at least ${minimum_quantity} products.`)
        } else if (quantity === '') {
            return setQuantityError(`You have to purchase at least ${minimum_quantity} products.`)
        }
        else {
            return setQuantityError('')
        }
    }, [quantity, minimum_quantity, available_quantity])


    const handleForm = (e) => {
        e.preventDefault()
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const totalPrice = quantity * unit_price;
        const orderDetails = ({ email: user.email, address, phone, quantity, totalPrice, name, orderStatus: "unpaid" })
        fetch('https://lit-caverns-37458.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return toast.error('Failed to add order')
                }
                return res.json()
            })
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully add order!')
                    e.target.reset()
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-accent'>Order Here</h2>
            <form onSubmit={handleForm}>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" value={user.displayName} disabled className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input type="text" value={user.email} disabled className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Address:</span>
                    </label>
                    <input name='address' type="text" placeholder="Address" className="input input-bordered w-full max-w-md" required />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Phone:</span>
                    </label>
                    <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full max-w-md" required />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Quantity:</span>
                    </label>
                    <input onChange={handleQuantity} value={quantity} type="number" placeholder="Input quantity" className="input input-bordered w-full max-w-md" />
                    <label className="label">
                        <span className="label-text text-red-500">{quantityError}</span>
                    </label>
                </div>
                <input type="submit" value={'Order Now'} className='btn btn-primary my-6' disabled={quantityError ? true : false} />
            </form>
        </div>
    );
};

export default PurchasePageform;