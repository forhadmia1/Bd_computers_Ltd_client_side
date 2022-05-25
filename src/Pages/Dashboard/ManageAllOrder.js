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
        fetch('https://lit-caverns-37458.herokuapp.com/orders', {
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
        <div className='px-4'>
            <div className="overflow-x-auto mt-4">
                <table className="table table-compact w-full">
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
        </div>
    );
};

export default ManageAllOrder;