'use client';

import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import useLoginModal from '../hooks/useLoginModal';
import SearchBar from './SearchBar';

const menu = [
    {
        title: 'Movies',
        link:'/movie'
    },
    {
        title: 'TV',
        link:'/tvshows'
    },
    {
        title: 'Anime',
        link:''
    },
    {
        title: 'Free',
        link:''
    }
]

const NavBar = () => {

    const router = useRouter();
    const loginModal = useLoginModal();

    const openLoginModal =() => {
        loginModal.onOpen();
        console.log('loginModal.isOpen?',loginModal.isOpen);
    }

    return (
        <div className='
            hidden
            h-12 
            px-5
            lg:flex 
            lg:flex-row 
            lg:justify-between 
            lg:items-center
            fixed
            w-full
            shadow-md
            bg-white
            z-30
      '
        >
            <div className='flex flex-row justify-center items-center gap-5'>
                <div 
                    className='font-bold text-xl text-cyan-700 cursor-pointer'
                     onClick={() => router.push('/')}>
                        Screenflicks
                </div>
                {menu && menu.map((item)=>{
                    return (
                        <div 
                            className='text-md cursor-pointer font-semibold font-serif' 
                            key={item.title}
                            onClick={()=>router.push(item.link)}
                        >
                            {item.title}
                        </div>
                    )
                })}
                <SearchBar hide={true}/>
            </div>
            <div className='flex flex-row justify-center items-center gap-5'>
            <div className='text-md cursor-pointer font-semibold font-serif'>Redeem</div>
                <div 
                    className='text-md cursor-pointer font-semibold font-serif' 
                    onClick={openLoginModal}
                >
                    Sign In
                </div>
            </div>
        </div>
    )
}

export default NavBar;
