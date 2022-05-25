import React from 'react';
import Rating from 'react-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ReviewRow = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div className="mb-12 md:mb-0">
            <h5 className="text-lg font-bold mb-4">{name}</h5>
            <p className="mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                    className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                    </path>
                </svg>
                {description}
            </p>
            <ul className="flex justify-center mb-0">
                <Rating
                    className='text-primary text-xl'
                    readonly
                    placeholderRating={rating}
                    emptySymbol={<AiOutlineStar />}
                    placeholderSymbol={<AiFillStar />}
                    fullSymbol={<AiFillStar />}
                />
            </ul>
        </div >
    );
};

export default ReviewRow;