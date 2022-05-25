import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrderRow = ({ order, index, getData, refetch }) => {
    const { name, quantity, orderStatus, _id } = order;
    const handleDeliver = (id) => {
        fetch(`https://lit-caverns-37458.herokuapp.com/placedOrder/${id}`, {
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
            <td>{orderStatus === "paid" ? <span className='text-xl text-primary'>Pending</span> : <span className={`text-xl text-accent ${orderStatus === "unpaid" && 'text-red-500'}`}>{orderStatus}</span>}</td>
            <td>{orderStatus === 'unpaid' ? <label onClick={() => getData({ _id, name })} htmlFor="cancel_order" className="btn modal-button btn-error">Delete Order</label> : orderStatus === 'paid' ? <button onClick={() => handleDeliver(_id)} className="btn btn-md btn-accent w-full">Deliver</button> : <span className='text-xl font-bold text-primary'>Delivered</span>}</td>
        </tr >
    );
};

export default ManageAllOrderRow;