'use client'

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams('limit', `${newLimit}`)
        router.push(newPathname)
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title='Показать больше'
                    btnType='button'
                    containerStyles='bg-cyan-400 text-white rounded-lg py-1 px-2'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore