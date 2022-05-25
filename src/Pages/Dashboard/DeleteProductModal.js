import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteProductModal = ({ data, refetch }) => {
    const navigate = useNavigate()
    const { name, _id } = data;
    const deleteProduct = (id) => {
        fetch(`https://lit-caverns-37458.herokuapp.com/hardwares/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully delete product!')
                    refetch()
                } else {
                    toast.error('Failed to Delete!')
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete_product" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure?</h3>
                    <p className="py-4">You want to delete {name}</p>
                    <div className="modal-action">
                        <label htmlFor="delete_product" className="btn btn-primary">Cancel</label>
                        <label htmlFor="delete_product" className="btn btn-error" onClick={() => deleteProduct(_id)}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;