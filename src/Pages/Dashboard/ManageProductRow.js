import React from 'react';

const ManageProductRow = ({ index, product, getData }) => {
    const { image, name, unit_price, _id } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={image} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${unit_price}</td>
            <td><label onClick={() => getData({ _id, name })} for="delete_product" class="btn modal-button">Delete Product</label></td>
        </tr>
    );
};

export default ManageProductRow;