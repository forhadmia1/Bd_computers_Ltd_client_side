import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const { isLoading, data: userData, refetch } = useQuery('user', () =>
        fetch(`https://lit-caverns-37458.herokuapp.com/profile?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/error')
            }
            return res.json()
        })
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
        fetch(`https://lit-caverns-37458.herokuapp.com/profile?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateData)
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                navigate('/login')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully updated user')
                    refetch()
                }
            })

    }
    return (
        <section className='w-full'>
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 mt-4">
                <div className="w-full px-12">
                    <h2 className="text-3xl font-bold mb-2 text-blue-600">{user?.displayName}</h2>
                    <p className="font-semibold mb-4">Email: {user?.email}</p>
                    <p className="text-gray-500 mb-6">
                        Education: {userData?.education ? userData.education : 'Not available'}
                    </p>
                    <p className="text-gray-500 mb-6">
                        Location: {userData?.location ? userData.location : 'Not available'}
                    </p>
                    <p className="text-gray-500 mb-6">
                        Phone: {userData?.phone ? userData.phone : 'Not available'}
                    </p>
                    <p className="text-gray-500 mb-6">
                        LinkedIN: {userData?.linkedin ? userData.linkedin : 'Not available'}
                    </p>
                </div>
                <div className='px-12'>
                    <h2 className='text-xl font-bold text-accent'>Update User form</h2>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Education:</span>
                            </label>
                            <input name='education' type="text" placeholder="Education Lavel" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Loaction:</span>
                            </label>
                            <input name='location' type="text" placeholder="Loaction" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">LinkedIn Link:</span>
                            </label>
                            <input name='linkedin' type="text" placeholder="LinkedIn Link" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Phone Number:</span>
                            </label>
                            <input name='phone' type="tel" placeholder="Phone Number" className="input input-bordered w-full max-w-md" />
                        </div>
                        <input type="submit" value={'Update Profile'} className='btn btn-primary my-6' />
                    </form>
                </div>
            </div>
        </section >
    );
};

export default MyProfile;