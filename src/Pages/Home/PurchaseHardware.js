import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PurchasePageform from './PurchasePageform';

const PurchaseHardware = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)
    const { isLoading, error, data: item } = useQuery("item", () =>
        fetch(`http://localhost:5000/hardware/${id}`)
            .then(res => res.json())
    );

    if (loading || isLoading) {
        return <Loading />
    }

    const { name, image, description, available_quantity, minimum_quantity, unit_price } = item;

    return (
        <div className='grid grid-cols-2 container mx-auto mt-4 px-12 gap-20'>
            <div class="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-80' src={image} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Avaliable Quantity: {available_quantity}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Minimum Quantity: {minimum_quantity}</p>
                    <p className='flex items-center'><BsFillCheckCircleFill className='mr-2' />Unit Price: ${unit_price}</p>
                </div>
            </div>
            <PurchasePageform
                item={item}
                user={user}
            />
        </div>
    );
};

export default PurchaseHardware;