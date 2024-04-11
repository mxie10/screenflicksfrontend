import React from 'react';
import {useRouter} from 'next/navigation';
import MovieCard from '../MovieCard';
import MovieCardType from '../../interfaces/MovieCardProps';

interface SearchResultModal {
  searchResult: any
}

const SearchResultModal: React.FC<SearchResultModal> = (props) => {

  const router = useRouter();
  const { searchResult } = props;

  const handleCardClick = (movie: MovieCardType) => {
    const encodedItem = encodeURIComponent(JSON.stringify(movie));
    router.push(`/moviedetails?encodedItem=${encodedItem}`);
};

  return (
    <div 
      className={`relative mt-12 w-full ${searchResult.length > 0 ? 'h-5/12' : 'h-0'} bg-white z-50 shadow-md ${searchResult.length > 0 ? 'py-5' : ''} flex flex-row px-10 gap-2 overflow-scroll`}
      style={{ position: 'fixed' }}
    >
      {searchResult && searchResult.map((item: MovieCardType, index: any) => {
        return (
          <div key={index} className=''>
            <MovieCard
              title={item.title}
              imageSrc={item.imageSrc}
              year={item.year}
              length={item.length}
              type={item.type}
              rate={item.rate}
              onClick={() => handleCardClick(item)}
              hideDetails={true}
            />
          </div>
        )
      })}
    </div>
  );
};

export default SearchResultModal;
