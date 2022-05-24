import React from 'react';

const OrderRow = ({ order, index, getData }) => {
    const { name, quantity, totalPrice, orderStatus, _id } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>{
                orderStatus === 'unpaid' ? <button class="btn btn-sm btn-primary">Pay</button> : ''
            }</td>
            <td>
                <label onClick={() => getData({ _id, name })} for="cancel_order" class="btn modal-button" disabled={orderStatus === 'paid' ? true : false}>Delete Order</label>
            </td>
        </tr>
    );
};

export default OrderRow;