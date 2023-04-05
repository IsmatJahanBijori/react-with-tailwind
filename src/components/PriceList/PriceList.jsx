import React, { useEffect } from 'react';
import { useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetch('prices.json').then(res => res.json()).then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-purple-600 text-4xl font-bold'>Awesome Price List</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 ml-10 md:ml-20 my-10'>
            {
                prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
            }
            </div>

        </div>
    );
};

export default PriceList;