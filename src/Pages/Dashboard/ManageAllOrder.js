import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrder = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const { isLoading, error, data: palcedOrders, refetch } = useQuery("palcedOrders", () =>
        fetch('http://localhost:5000/orders', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
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
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Si:</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>OrderStatus</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        palcedOrders.map((order, index) => <ManageAllOrderRow
                            key={order._id}
                            order={order}
                            index={index}
                            getData={getData}
                            refetch={refetch}
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

export default ManageAllOrder;