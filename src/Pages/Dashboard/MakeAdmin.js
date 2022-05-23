import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { isLoading, data: users, refetch } = useQuery("users", () =>
        fetch('http://localhost:5000/users')
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
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
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;