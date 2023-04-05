import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Features = ({feature}) => {
    return (
        <div className='flex gap-2'>
        <span><CheckCircleIcon className="h-6 w-6 text-green-500" /></span>
        <span>{feature}</span>
        </div>
    );
};

export default Features;