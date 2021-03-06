import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch('https://lit-caverns-37458.herokuapp.com/reviews').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-12 text-accent">Recent Reviews</h2>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                        />)
                    }
                </div>
            </section>
        </div>
    );
};

export default Reviews;