import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [data, setData] = useState({})
    const { isLoading, error, data: orders, refetch } = useQuery("orders", () =>
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    const getData = (data) => {
        setData(data)
    }

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
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
    );
};

export default MyOrders;