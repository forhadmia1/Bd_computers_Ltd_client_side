import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ name, _id, refetch }) => {
    const cancelOrder = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully cancel order!')
                    refetch()
                } else {
                    toast.error('Failed! Try again')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="cancel_order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure?</h3>
                    <p class="py-4">You want to delete {name}</p>
                    <div class="modal-action">
                        <label for="cancel_order" class="btn btn-primary">Cancel</label>
                        <label for="cancel_order" onClick={() => cancelOrder(_id)} class="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;