import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { name, email, role } = user;
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/profile?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
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
            <td>{!role && <button onClick={() => makeAdmin(user.email)} class="btn btn-sm">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;