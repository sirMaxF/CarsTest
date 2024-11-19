'use client';

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { CarDetails } from '.';

interface CarcardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarcardProps) => {

    const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year } = car;

    const [isopen, setIsopen] = useState(false);

    return (
        <div className="car-card group w-56 flex flex-col">
            <div className="car-card__content">
                <h2 className='font-bold'>
                    {make} {model}
                </h2>
            </div>

            <p className='mt-6 text-[32px] font-extrabold flex'>
                <span className='self-start text-[14px] font-semibold'>32 / day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src='/next.svg' fill priority alt='Подпись' className='object-contain' />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    {/* коробка передач */}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/globe.svg' alt='Руль' width={20} height={20} />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/globe.svg' alt='Руль' width={20} height={20} />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'АКПП' : 'Ручная КПП'}
                        </p>
                    </div>

                    {/* расход */}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src='/globe.svg' alt='Руль' width={20} height={20} />
                        <p className='text-[14px]'>
                            {city_mpg} расход
                        </p>
                    </div>
                </div>

            </div>

            <div className="car-card__btn-container mt-2">
                <CustomButton
                    title='См подробнее'
                    containerStyles='w-full rounded-full bg-cyan-500 flex justify-center items-center py-3'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/globe.svg'
                    handleClick={() => { setIsopen(true) }}
                />
            </div>
            <CarDetails isOpen={isopen} closeModal={() => { setIsopen(false) }} car={car} />
        </div>
    )
}

export default CarCard