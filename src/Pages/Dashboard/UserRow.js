import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { name, email, role } = user;
    const makeAdmin = (email) => {
        fetch(`https://lit-caverns-37458.herokuapp.com/profile?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ role: 'admin' })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully make admin!')
                    refetch()
                }
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{!role && <button onClick={() => makeAdmin(user.email)} className="btn btn-sm">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;