'use client';
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import MovieCard from '../MovieCard';
import { RiMovieLine } from "react-icons/ri";
import { useFeaturedMovies } from '../../hooks/useFeaturedMovies';
import MovieCardType from '../../interfaces/MovieCardProps';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const FeaturedFilms = () => {
    const { featuredMovies } = useFeaturedMovies();
    const router = useRouter();
    const movieContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

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

    const handleCardClick = (movie: MovieCardType) => {
        const encodedItem = encodeURIComponent(JSON.stringify(movie));
        router.push(`/moviedetails?encodedItem=${encodedItem}`);
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
                    <div className='text-xl text-black font-bold font-serif'>Featured Films</div>
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
                    {featuredMovies && featuredMovies.map((item: MovieCardType,index:any) => {
                        return (
                            <div key={index}>
                                <MovieCard
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                    year={item.year}
                                    length={item.length}
                                    type={item.type}
                                    rate={item.rate}
                                    onClick={() => handleCardClick(item)}
                                    hideDetails={false}
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

export default FeaturedFilms;
