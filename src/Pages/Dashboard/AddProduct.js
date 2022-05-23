import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
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
                    fetch('http://localhost:5000/hardwares', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    }).then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('Successfully add product!')
                                reset()
                            }
                        })
                }

            })
    };


    return (
        <div>
            <h2 className='text-3xl text-accent font-bold my-8'>Add new product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
                <input type="text" placeholder="Product Name" class="input input-bordered w-full max-w-xs"{...register("name", { required: true })} />
                <input type="number" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" {...register("available_quantity", { required: true })} />
                <input type="number" placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" {...register("minimum_quantity", { required: true })} />
                <input type="number" placeholder="Unit price" class="input input-bordered w-full max-w-xs" {...register("unit_price", { required: true })} />
                <textarea class="textarea textarea-bordered w-full" placeholder="Product description"{...register("description", { required: true })}></textarea>
                <input type='file' {...register("image", { required: true })} />
                <input type='submit' className='btn btn-primary w-full' />
            </form>
        </div>
    );
};

export default AddProduct;