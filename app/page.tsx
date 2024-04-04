'use client';

import { useContext } from "react";
import ContentSection from "./component/ContentSection";
import HeroSection from "./component/HeroSection";
import FeaturedFilms from "./component/featuredFilms/FeaturedFilms";
import TVShows from "./component/featuredFilms/TVShows";
import { Context } from "./context/useContext";

export default function Home() {

  const {user} = useContext(Context);

  console.log('user is:',user);

  return (
    <div
      className='
        '
    >
      <div className="w-full">
        <HeroSection />
      </div>
      <div 
        className='
          px-2
          md:px-5
          lg:px-14 
          mt-4
        '
      >
        <FeaturedFilms />
        <TVShows/>
      </div>
      <ContentSection/>
    </div>
  );
}
