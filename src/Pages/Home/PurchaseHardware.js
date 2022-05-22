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
    const { name, image, description, avaliable_quantity, minimum_quantity, unit_price } = item;
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
        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800 text-center md:text-left">
                <div class="block rounded-lg shadow-lg bg-white">
                    <div class="flex flex-wrap items-center">
                        <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                            <img src={image} alt={name}
                                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                            <div class="px-6 pt-12 md:px-12">
                                <h2 class="text-3xl font-bold mb-6 pb-2">{name}</h2>
                                <p class="text-gray-500 mb-6 pb-2">
                                    {description}
                                </p>
                                <div class="flex flex-wrap mb-6">
                                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p class="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-2' />Available Quantity: {avaliable_quantity}
                                        </p>
                                    </div>
                                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p class="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-2' />Minimum Quantity: {minimum_quantity}
                                        </p>
                                    </div>
                                    <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                        <p class="flex items-center justify-center md:justify-start">
                                            <BsFillCheckCircleFill className='mr-2' />Unit Price: {unit_price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-12'>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PurchaseHardware;