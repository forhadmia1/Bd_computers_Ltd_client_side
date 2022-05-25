import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const navigate = useNavigate()
    const imageStorageKey = 'd77486f82c5461c850892a498e50d63a';

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const image = result.data.url;
                if (image) {
                    const product = { ...data, image }
                    fetch('https://lit-caverns-37458.herokuapp.com/hardwares', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    }).then(res => {
                        if (res.status === 401 || res.status === 403) {
                            navigate('/login')
                            signOut(auth)
                        }
                        return res.json()
                    })
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Successfully add product!')
                                reset()
                            }
                            else {
                                toast.error('Failed to Add product!')
                            }
                        })
                }

            })
    };


    return (
        <div className='w-full px-12'>
            <h2 className='text-3xl text-accent font-bold my-8'>Add new product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
                <input type="text" placeholder="Product Name" className="input input-bordered w-full "{...register("name", { required: true })} />
                <input type="number" placeholder="Available Quantity" className="input input-bordered w-full " {...register("available_quantity", { required: true })} />
                <input type="number" placeholder="Minimum Quantity" className="input input-bordered w-full " {...register("minimum_quantity", { required: true })} />
                <input type="number" placeholder="Unit price" className="input input-bordered w-full " {...register("unit_price", { required: true })} />
                <textarea className="textarea textarea-bordered w-full" placeholder="Product description"{...register("description", { required: true })}></textarea>
                <input className='w-full' type='file' {...register("image", { required: true })} />
                <div className='w-full'>
                    <input type='submit' className='btn btn-primary px-6' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;