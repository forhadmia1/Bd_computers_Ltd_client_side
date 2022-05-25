import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteProductModal = ({ data, refetch }) => {
    const navigate = useNavigate()
    const { name, _id } = data;
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/hardwares/${id}`, {
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
            <input type="checkbox" id="delete_product" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure?</h3>
                    <p class="py-4">You want to delete {name}</p>
                    <div class="modal-action">
                        <label for="delete_product" class="btn btn-primary">Cancel</label>
                        <label for="delete_product" class="btn btn-error" onClick={() => deleteProduct(_id)}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;