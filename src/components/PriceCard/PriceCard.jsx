// import { list } from 'postcss';
import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ price }) => {

    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <div className="card-body bg-purple-300 rounded-lg">
                    <p className='text-5xl font-semibold'>{price.price}<small>/mon</small> </p>
                    <h2 className="card-title">{price.name}</h2>
                    <p className='text-3xl font-semibold'>Features:</p>
                    {
                        price.features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                    }
                    <button className='bg-blue-600 mt-auto w-full text-2xl rounded-2xl p-3'>Buy now</button>
                </div>

            </div>
        </div>
    );
};

export default PriceCard;