import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrderRow = ({ order, index, getData, refetch }) => {
    const { name, quantity, orderStatus, _id } = order;
    const handleDeliver = (id) => {
        fetch(`http://localhost:5000/placedOrder/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Shiped Order!')
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{orderStatus === "paid" ? 'pending' : orderStatus}</td>
            <td>{orderStatus === 'unpaid' ? <label onClick={() => getData({ _id, name })} for="cancel_order" class="btn modal-button btn-error">Delete Order</label> : orderStatus === 'paid' ? <button onClick={() => handleDeliver(_id)} className="btn btn-md btn-accent">Deliver</button> : <span className='text-xl font-bold text-primary'>Delivered</span>}</td>
        </tr>
    );
};

export default ManageAllOrderRow;