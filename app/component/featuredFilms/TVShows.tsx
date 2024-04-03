'use client';
import React, { useEffect, useRef, useState } from 'react'
import MovieCard from '../MovieCard';
import { RiMovieLine } from "react-icons/ri";
import { useTVShows } from '../../hooks/useTVShows';
import MovieCardType from '../../interfaces/MovieCardProps';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const TVShows = () => {

    const { tvShows } = useTVShows();
    const movieContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    
    console.log("canScrollLeft:",canScrollLeft);
    console.log("canScrollRight:",canScrollRight);

    useEffect(() => {
        const container = movieContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(true);
        }
    }, []);

    const handleScroll = () => {
        const container = movieContainerRef.current;

        if (container) {
            const newCanScrollLeft = container.scrollLeft > 0;

            setCanScrollLeft(newCanScrollLeft);

            const newCanScrollRight = container.scrollLeft + container.clientWidth < container.scrollWidth;
            setCanScrollRight(newCanScrollRight);
        }
    };

    return (
        <div className='flex flex-col gap-2 border-b-2 mt-2'>
            <div
                className='
                    flex 
                    flex-row 
                    items-center 
                    justify-between
                    py-2
                '
            >
                <div className='flex flex-row gap-1 items-center'>
                    <RiMovieLine size={30} className='rouded-lg' />
                    <div className='text-xl text-black font-bold font-serif'>TV Shows</div>
                </div>
                <div className='text-neutral-500'>View all</div>
            </div>
            <div className='relative flex flex-row justify-between h-96'>
                {/* left scroll button */}
                <div 
                    className={`
                        bg-white 
                        h-full 
                        z-20 
                        w-12
                        absolute 
                        opacity-80 
                        flex 
                        justify-center 
                        items-center
                        ${canScrollLeft ? 'hidden' :'hidden'}
                    `}
                >
                    <FaChevronCircleLeft size={30}/>
                </div>
                {/* movie list */}
                <div
                    className='
                        w-full
                        mt-2 
                        flex 
                        flex-row 
                        gap-4
                        overflow-x-scroll
                        overflow-y-hidden
                        z-0
                        no-scrollbar
                    '
                    ref={movieContainerRef}
                    onScroll={handleScroll}
                >
                    {tvShows && tvShows.map((item: MovieCardType,index:any) => {
                        return (
                            <div key={index}>
                                <MovieCard
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                    year={item.year}
                                    length={item.length}
                                    type={item.type}
                                    rate={item.rate}
                                />
                            </div>
                        )
                    })}
                </div>
                  {/* right scroll button */}
                <div 
                    className={`
                        bg-white 
                        h-full 
                        z-20 
                        w-12
                        opacity-50
                        absolute 
                        right-0 
                        flex 
                        justify-center 
                        items-center
                        ${canScrollRight ? 'block' : 'hidden'}
                    `}
                >
                    <FaChevronCircleRight size={30} className=' opacity-100'/>
                </div>
            </div>
        </div>
    )
}

export default TVShows;
