'use client';

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';

interface CarcardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarcardProps) => {

    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2>
                    {make} {model}
                </h2>
            </div>

            <p className='mt-6 text-[32px] font-extrabold flex'>
                <span className='self-start text-[14px] font-semibold'>32 / day</span>
            </p>
        </div>


    )
}

export default CarCard