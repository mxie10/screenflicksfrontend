'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MovieCardType from '../interfaces/MovieCardProps';
import { FaStar } from "react-icons/fa";

interface MovieDetailsScreenProps {
    movieDetails: MovieCardType;
}


const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = (props) => {
    const searchParams = useSearchParams();
    const encodedItem = searchParams.get('encodedItem');
    const decodedItem = encodedItem ? JSON.parse(decodeURIComponent(encodedItem as string)) : null;
    console.log(encodedItem);

    return (
        <div
            className="flex flex-col relative min-h-screen bg-neutral-200"
        >
            <div
                className='
                    flex
                    flex-col
                    md:flex-row 
                    py-20 
                    px-10
                    lg:px-20 
                    z-20 
                    gap-5   
                     bg-neutral-600
                '
            >
                <div
                    className='
                        w-full
                        md:w-6/12
                        lg:w-3/12
                        lg:block
                        rounded-md
                    '
                >
                    <img
                        src={decodedItem.imageSrc}
                        className='
                            object-contain
                            rounded-md
                        '
                    />
                </div>
                <div
                    className='
                        flex
                        flex-col
                         justify-between
                    '
                >   <div>
                        <div
                            className='
                                text-white
                                font-bold
                                text-2xl
                            '
                        >
                            {decodedItem.title}
                        </div>
                        <div className='flex flex-row gap-2'>
                            {
                                decodedItem.type.map((item: string, index: number) => {
                                    return (
                                        <div
                                            className='
                                                bg-neutral-500
                                                text-white
                                                p-1
                                                rounded-lg
                                                text-xs
                                            '
                                            key={index}
                                        >
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-row text-white gap-2 mt-3'>
                            <FaStar style={{ color: 'orange' }} />
                            <FaStar style={{ color: 'orange' }} />
                            <FaStar style={{ color: 'orange' }} />
                            <FaStar style={{ color: 'orange' }} />
                        </div>
                        <div className='mt-0 md:mt-2'>
                            {/* cast */}
                            <div className='text-neutral-200 hidden md:flex md:flex-row gap-2'>
                                <div className='font-bold'>Cast:</div>
                                <div className='flex flex-row gap-2'>
                                    {decodedItem.actors.map((item: string, index: number) => {
                                        return <div key={index}>{item}</div>
                                    })}
                                </div>
                            </div>
                            {/* Rate */}
                            <div className='mt-1 sm:mt-0 text-neutral-200 flex lex-row gap-2'>
                                <div className='font-bold'>Rated:</div>
                                <div>
                                    {decodedItem.rate}
                                </div>
                            </div>
                            {/* Brief */}
                            <div className='text-neutral-200 md:text-md lg:text-base md:mt-0 lg:mt-0'>
                                <span className='font-bold'>Breif:   </span>{decodedItem.description}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        {/* Price */}
                        <div className='text-3xl font-serif font-bold mt-1 text-neutral-200'>
                            ${decodedItem.price}
                        </div>  
                        {/* watch button */}
                        <div
                            className='
                                bg-orange-500
                                p-2
                                rounded-lg
                                font-bold
                                text-white
                                w-full
                                lg:w-1/5
                                text-center
                                mt-6
                                lg:mt-4
                            '
                        >
                            Watch Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsScreen;

