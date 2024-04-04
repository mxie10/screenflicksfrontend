'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useHeros } from '../hooks/useHeros'
import { Button } from '@/components/ui/button';
import { FaPlayCircle } from "react-icons/fa";

interface PageProps {
  offset: number;
  imageSrc: string;
  onClick?: () => void;
  actors: Array<string>;
  title: string;
}

interface Hero {
  title: string
  imageSrc: string;
  actors: Array<string>;
}

const HeroSection = () => {
  const parallax = useRef<IParallax>(null)
  const [slideIndex, setSlideIndex] = useState(0);
  const { heros } = useHeros();

  const scroll = (index: number) => {
    setSlideIndex(index % heros.length);
    parallax.current?.scrollTo(index % heros.length)
  }

  const Page = ({ offset, imageSrc, title, actors, onClick }: PageProps) => (
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick} >
      <img
        className='
           brightness-75
           w-full
           h-full
           absolute
        '
        src={imageSrc}
        alt="My Image"
      />
      {/* hero section movie info */}
      <div
        className='
              z-50 
              relative
              ml-20
              mt-24
              lg:mt-56
              md:mt-48
              sm:mt-20
              flex
          '
      >
        <div className=''>
          <div 
            className='
              flex 
              flex-row 
              items-center 
              gap-2 
              py-2
            '
          >
            <div 
              className='
                text-white
                text-3xl
                sm:text-4xl
              '
            >
              {title}
            </div>
            <div className='hidden sm:block'>
              <Button 
                className='
                  text-lg 
                  p-4 
                  rounded-lg
                  w-48
                  sm:w-auto
                '
              >
                <FaPlayCircle />
                <span 
                  className='
                    ml-2
                  ' 
                  onClick={() => { }}
                >
                  Play Now
                </span>
              </Button>
            </div>
            <div className='block sm:hidden'>
              <FaPlayCircle size={30} color='white'/>
            </div>
          </div>
          <div 
            className='
              text-md 
              text-white 
              p-2 
              gap-2
              hidden
              sm:flex flex-row
            '
          >
            {actors && actors.map((actor,index) => {
              return index <= 3 ? <div key={actor}>{actor}</div> : null 

            })}
          </div>
        </div>

      </div>
    </ParallaxLayer>
  )

  const IndexBar = () => {
    return (
      <div className='flex justify-center'>
        <div
          className='
            z-10 
            absolute 
            flex 
            flex-row 
            items-center 
            justify-between 
          bg-black
            py-1
            px-4
            rounded-lg
            mt-48
            lg:mt-96
            md:mt-80
            sm:mt-48
            w-1/3
            lg:w-1/6
            md:w-1/3
            sm:1/2
          '
        >
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div
                className={` w-3 h-3 rounded-full cursor-pointer ${slideIndex === index ? 'bg-white' : ' bg-slate-700'}`}
                key={index}
                onClick={() => scroll(index)}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div 
      className='
        relative
        lg:h-108
        md:h-96
        sm: h-60
      '
    >
      <Parallax ref={parallax} pages={5} horizontal enabled={false}>
        {heros.map((item: Hero, index: number) => {
          return (
            <Page
              key={index}
              offset={index}
              imageSrc={item.imageSrc}
              title={item.title}
              actors={item.actors}
            />
          )
        })}
      </Parallax>
      <IndexBar/>
    </div>
  )
}

export default HeroSection;
