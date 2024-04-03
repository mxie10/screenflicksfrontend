'use client'
import React from 'react'
import { useMovies } from '../hooks/useMovies';
import MovieCardType from '../interfaces/MovieCardProps';
import MovieCard from '../component/MovieCard';
import { useRouter } from 'next/navigation';
import { useTVShows } from '../hooks/useTVShows';

const TVShowscreen = () => {

    const { tvShows } = useTVShows();
    const router = useRouter();

    const handleCardClick = (movie: MovieCardType) => {
        const encodedItem = encodeURIComponent(JSON.stringify(movie));
        router.push(`/moviedetails?encodedItem=${encodedItem}`);
    };

    return (
        <div
            className='
                py-14
            '
        >
            <div 
                className="
                    grid 
                    grid-cols-2
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-6 
                    gap-4 
                    px-10
                "
            >

                {tvShows && tvShows.map((item: MovieCardType,index:number) => {
                    return (
                        <div className='' key={index}>
                            <MovieCard
                                title={item.title}
                                imageSrc={item.imageSrc}
                                year={item.year}
                                length={item.length}
                                type={item.type}
                                rate={item.rate}
                                souce='movieList'
                                onClick={() => handleCardClick(item)}
                            />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default TVShowscreen;
