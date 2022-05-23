import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseHardware = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/hardware/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    const { name, image, description, available_quantity, minimum_quantity, unit_price } = item;
    const [quantity, setQuantity] = useState(minimum_quantity)

    if (loading) {
        return <Loading />
    }

    const handleForm = (e) => {
        e.preventDefault()
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const quantity = e.target.quantity.value;
        console.log(address, phone, quantity)

    }
    return (
        <div className='grid grid-cols-2 container mx-auto mt-4 px-12 gap-20'>
            <div class="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full' src={image} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Avaliable Quantity: {available_quantity}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Minimum Quantity: {minimum_quantity}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Unit Price: ${unit_price}</p>


                </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold text-accent'>Order Here</h2>
                <form onSubmit={handleForm}>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Name:</span>
                        </label>
                        <input type="text" value={user.displayName} disabled class="input input-bordered w-full max-w-md" />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Email:</span>
                        </label>
                        <input type="text" value={user.email} disabled class="input input-bordered w-full max-w-md" />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Address:</span>
                        </label>
                        <input name='address' type="text" placeholder="Address" class="input input-bordered w-full max-w-md" required />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Phone:</span>
                        </label>
                        <input name='phone' type="text" placeholder="Phone number" class="input input-bordered w-full max-w-md" required />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Quantity:</span>
                        </label>
                        <input name='quantity' value={quantity} type="number" placeholder="Input quantity" class="input input-bordered w-full max-w-md" />
                        {/* <label class="label">
                                            <span class="label-text text-red-500">{quantityError}</span>
                                        </label> */}
                    </div>
                    <input type="submit" value={'Order Now'} className='btn btn-primary my-6' />
                </form>

            </div>
        </div>
    );
};

export default PurchaseHardware;