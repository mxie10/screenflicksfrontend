'use client'
import React, { useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import MovieCardTypes from '../interfaces/MovieCardProps';

const MovieCard: React.FC<MovieCardTypes> = (props) => {

    const { title, imageSrc, year, type, rate, souce, onClick, hideDetails} = props;

    const [ifShowPlayIcon, setIfShowPlayIcon] = useState(false);

    const showPlayIcon = () => {
        setIfShowPlayIcon(true);
    }

    const hideShowPlayIcon = () => {
        setIfShowPlayIcon(false);
    }

    return (
        <div 
            className='
                h-auto
            '
            onClick = {onClick}
        >
            {/* movie profile */}
            <div
                className={`
                    flex 
                    flex-col 
                    rounded-sm
                    relative 
                    items-center 
                    justify-center 
                    cursor-pointer
                    ${ifShowPlayIcon ? 'brightness-50' : ''}
                    h-4/5
                `}
                onMouseOver={showPlayIcon}
                onMouseLeave={hideShowPlayIcon}
            >
                {/* image */}
                <div 
                    className={`
                        ${souce === 'movieList' ? 'w-full h-full' : 'h-76 w-52'}

                    `}
                >
                    <img
                        src={imageSrc}
                        className='
                            rounded-lg 
                            relative 
                            object-cover
                            box-border
                        '
                    />
                </div>
                {/* play icon */}
                <div
                    className={`
                        absolute 
                        flex 
                        box-border
                        ${ifShowPlayIcon ? 'block' : 'hidden'}
                    `}>
                    <FaCirclePlay size={40} color='white'/>
                </div>
            </div>
            {/* movie details */}
            <div className='flex flex-col mt-2 h-1/5'>
                <div className='text-md sm:text-md md:text-ld font-bold'>{title}</div>
                <div className='flex flex-row justify-between'>
                    <div className='text-xs font-semibold hidden md:block'>
                        {year} - 1 hr 47 min
                    </div>
                </div>
                <div
                    className='
                        text-xs 
                        font-semibold 
                        text-neutral-500 
                        flex 
                        flex-row 
                        items-center
                        mt-1
                        gap-2
                    '
                >
                    {type && type.map((item) => {
                        return (
                            <div key={item}>{item}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
