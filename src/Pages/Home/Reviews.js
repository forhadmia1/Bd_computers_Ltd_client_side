import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { isLoading, data: reviews } = useQuery('reviews', () =>
        fetch('http://localhost:5000/reviews').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div class="container my-24 px-6 mx-auto">
            <section class="mb-32 text-gray-800 text-center">
                <h2 class="text-3xl font-bold mb-12 text-accent">Testimonials</h2>
                <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
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