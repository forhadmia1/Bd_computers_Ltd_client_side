import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { isLoading, data: userData, refetch } = useQuery('user', () =>
        fetch(`http://localhost:5000/profile?email=${user.email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;
        const updateData = { education, location, phone, linkedin };
        fetch(`http://localhost:5000/profile?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully updated user')
                    refetch()
                }
            })

    }
    return (
        <section className='w-full'>
            <div class="container  mx-auto grid grid-cols-1 md:grid-cols-2 mt-4">
                <div class="w-full px-12">
                    <h2 class="text-3xl font-bold mb-2 text-blue-600">{user?.displayName}</h2>
                    <p class="font-semibold mb-4">Email: {user?.email}</p>
                    <p class="text-gray-500 mb-6">
                        Education: {userData?.education ? userData.education : 'Not available'}
                    </p>
                    <p class="text-gray-500 mb-6">
                        Location: {userData?.location ? userData.location : 'Not available'}
                    </p>
                    <p class="text-gray-500 mb-6">
                        Phone: {userData?.phone ? userData.phone : 'Not available'}
                    </p>
                    <p class="text-gray-500 mb-6">
                        LinkedIN: {userData?.linkedin ? userData.linkedin : 'Not available'}
                    </p>
                </div>
                <div className='px-12'>
                    <h2 className='text-xl font-bold text-accent'>Update User form</h2>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Education:</span>
                            </label>
                            <input name='education' type="text" placeholder="Education Lavel" class="input input-bordered w-full max-w-md" />
                        </div>
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Loaction:</span>
                            </label>
                            <input name='location' type="text" placeholder="Loaction" class="input input-bordered w-full max-w-md" />
                        </div>
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">LinkedIn Link:</span>
                            </label>
                            <input name='linkedin' type="text" placeholder="LinkedIn Link" class="input input-bordered w-full max-w-md" />
                        </div>
                        <div class="form-control w-full max-w-md">
                            <label class="label">
                                <span class="label-text">Phone Number:</span>
                            </label>
                            <input name='phone' type="tel" placeholder="Phone Number" class="input input-bordered w-full max-w-md" />
                        </div>
                        <input type="submit" value={'Update Profile'} className='btn btn-primary my-6' />
                    </form>
                </div>
            </div>
        </section >
    );
};

export default MyProfile;