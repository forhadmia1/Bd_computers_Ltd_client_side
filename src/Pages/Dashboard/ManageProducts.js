import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [data, setData] = useState({})
    const { isLoading, error, data: products, refetch } = useQuery("products", () =>
        fetch('http://localhost:5000/hardwares')
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading />
    }
    const getData = (data) => {
        setData(data)
    }

    return (
        <div className="px-4">
            <div class="overflow-x-auto mt-4">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Si:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._key}
                                index={index}
                                product={product}
                                getData={getData}
                            />)
                        }
                    </tbody>
                </table>
                <DeleteProductModal
                    data={data}
                    refetch={refetch}
                />
            </div>
        </div>
    );
};

export default ManageProducts;