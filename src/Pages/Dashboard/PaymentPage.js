import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L31xRIBSJhlneIDCMOq1S0WmZPaYWMRjA1VxPaGwfWSm9BaJ8vp4ptaPeF4CczBGbYGabAh4EIGMqo08xn6jdGK00LPPoCJ4r');

const PaymentPage = () => {
    const { id } = useParams()
    const { isLoading, error, data: order, refetch } = useQuery("order", () =>
        fetch(`https://lit-caverns-37458.herokuapp.com/order/${id}`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    const { name, quantity, totalPrice, orderStatus, _id } = order;
    return (
        <div >
            <div className="card w-11/12 md:w-8/12 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <h2 className="card-title">Order for {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
            <div className="card w-11/12 md:w-8/12 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;