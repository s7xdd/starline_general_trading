"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Statistics() {
    const { ref: clientRef, inView: clientVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: partnerRef, inView: partnerVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: yearsRef, inView: yearsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className=" bg-black text-white py-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div ref={clientRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {clientVisible && <CountUp end={500} duration={3} />}
                        <span className='text-red-600'>+</span>
                    </h3>
                    <p className='text-red-600 text-lg sm:text-xl mt-2'>Happy Clients</p>
                </div>
                <div ref={partnerRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {partnerVisible && <CountUp end={25} duration={4} suffix="+" />}
                    </h3>
                    <p className='text-red-600 text-lg sm:text-xl mt-2'>Partner Brands</p>
                </div>
                <div ref={yearsRef} className="flex flex-col items-center">
                    <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold">
                        {yearsVisible && <CountUp end={30} duration={5} />}
                        <span className='text-red-600'>+</span>
                    </h3>
                    <p className='text-red-600 text-lg sm:text-xl mt-2'>Years of experience</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
