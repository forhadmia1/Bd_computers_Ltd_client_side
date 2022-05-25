import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const navigate = useNavigate()
    const { isLoading, data: users, refetch } = useQuery("users", () =>
        fetch('http://localhost:5000/users', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                return res.json()
            })
    );

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="px-4">
            <div class="overflow-x-auto mt-4">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>SI:</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;