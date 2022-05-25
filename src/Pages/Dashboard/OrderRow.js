import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({ order, index, getData }) => {
    const { name, quantity, totalPrice, orderStatus, _id, transectionId } = order;
    const navigate = useNavigate()

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>{
                orderStatus === 'unpaid' ? <button onClick={() => navigate(`/order/${_id}`)} class="btn btn-sm btn-primary">Pay</button> : <span className='text-green-500'>paid <br /> Transection ID: {transectionId}</span>
            }</td>
            <td>
                <label onClick={() => getData({ _id, name })} for="cancel_order" class="btn modal-button" disabled={orderStatus === 'paid' ? true : false}>Delete Order</label>
            </td>
        </tr>
    );
};

export default OrderRow;