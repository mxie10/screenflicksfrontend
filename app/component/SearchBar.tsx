import React from 'react'
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    hide?: boolean;
    setSearchParam:(value:string) => void;
    searchParam:any;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

    const {searchParam,setSearchParam} = props;

    return (
        <div
            className={`
                ml-2
                lg:ml-10 
                flex 
                flex-row 
                items-center 
                relative
            `}
        >
            <input
                type="text"
                placeholder="Explore the Cinematic World"
                className='p-2 rounded-md w-64 pl-9 text-sm'
                onChange = {(e) => setSearchParam(e.target.value)}
                value={searchParam}
            />
            <FaSearch size={20} className='absolute ml-2' />
            <div 
                className=' bg-neutral-300 text-black py-2 px-6 ml-5 rounded-md cursor-pointer hover:bg-neutral-400'
                onClick={() => setSearchParam('')}
            >
                    Clear
            </div>
        </div>
    )
}

export default SearchBar;
