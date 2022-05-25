import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReviews = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const handleForm = (e) => {
        e.preventDefault()
        const rating = e.target.ratings.value;
        const description = e.target.description.value;
        if (rating > 5 || rating < 1) {
            toast.error('Please provide rating in 1 to 5')
            return;
        }
        const review = { name: user.displayName, email: user.email, rating, description };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            return res.json()
        })
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully add review!')
                    e.target.reset()
                } else {
                    toast.error('Failed! Try again.')
                }
            })
    }
    return (
        <div className='flex justify-center w-full'>
            <div className='w-10/12  mt-6'>
                <h2 className='text-2xl font-bold text-accent'>Add Reviews here</h2>
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