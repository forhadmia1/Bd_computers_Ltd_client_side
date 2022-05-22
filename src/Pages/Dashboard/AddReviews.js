import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviews = () => {
    const [user] = useAuthState(auth)
    const handleForm = (e) => {
        e.preventDefault()
        const rating = e.target.ratings.value;
        const description = e.target.description.value;
        const review = { name: user.displayName, email: user.email, rating, description };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully add review!')
                    e.target.reset()
                }
            })
    }
    return (
        <div className='flex justify-center w-full'>
            <div className='w-10/12  mt-6'>
                <h2 className='text-2xl font-bold'>Add Reviews here</h2>
                <form onSubmit={handleForm} className='w-full'>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Ratings:</span>
                        </label>
                        <input name='ratings' type="number" placeholder="Ratings" class="input input-bordered w-full max-w-md" required />
                    </div>
                    <div class="form-control w-full max-w-md">
                        <label class="label">
                            <span class="label-text">Description:</span>
                        </label>
                        <textarea name='description' class="textarea textarea-bordered" placeholder="Description" required></textarea>
                    </div>
                    <input type="submit" value={'Add Review'} className='btn btn-primary my-6' />
                </form>
            </div>
        </div>
    );
};

export default AddReviews;