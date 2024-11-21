"use client";

// https://vk.com/video-225998418_456239150?t=2h25m39s

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {

    };

    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, architecto!</h1>
                <p className='xl:text-[40px] text-[20px] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe.</p>

                <CustomButton
                    title='Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                ></CustomButton>

                <div className="hero__image-container relative w-96 h-96">
                    <div className="hero__image">
                        <Image src='/next.svg' alt='next' fill className='object-contain'></Image>
                    </div>
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>

    )
}

export default Hero;




