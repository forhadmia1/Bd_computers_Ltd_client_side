import React from 'react';

const HardwareCard = ({ hardware }) => {
    const { name, image, description, avaliable_quantity, minimum_quantity, unit_price, _id } = hardware;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Unit Price: ${unit_price}</p>
                <p>Available Quantity: {avaliable_quantity}</p>
                <p>Minimum Quantity: {minimum_quantity}</p>
                <div class="card-actions mt-2">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HardwareCard;