import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { isLoading, error, data: orders, refetch } = useQuery("orders", () =>
        fetch(`https://lit-caverns-37458.herokuapp.com/orders/${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    navigate('/error')
                }
                return res.json()
            })
    );

    if (isLoading) {
        return <Loading />
    }
    const getData = (data) => {
        setData(data)
    }

    return (
        <div className="px-4">
            <div className="overflow-x-auto  mt-4">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Si:</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                getData={getData}
                            />)
                        }
                    </tbody>
                </table>
                <DeleteModal
                    name={data.name}
                    _id={data._id}
                    refetch={refetch}
                />
            </div>
        </div>
    );
};

export default MyOrders;