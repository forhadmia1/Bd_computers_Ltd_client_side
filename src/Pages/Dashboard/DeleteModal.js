import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ name, _id, refetch }) => {
    const cancelOrder = (id) => {
        fetch(`https://lit-caverns-37458.herokuapp.com/orders/${id}`, {
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
            <input type="checkbox" id="cancel_order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure?</h3>
                    <p className="py-4">You want to delete {name}</p>
                    <div className="modal-action">
                        <label htmlFor="cancel_order" className="btn btn-primary">Cancel</label>
                        <label htmlFor="cancel_order" onClick={() => cancelOrder(_id)} className="btn btn-error">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;