'use client';

import React, { useContext,useEffect,useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import useLoginModal from '../hooks/useLoginModal';
import SearchBar from './SearchBar';
import { Context,ContextType } from '../context/useContext';

const menu = [
    {
        title: 'Movies',
        link: '/movie'
    },
    {
        title: 'TV',
        link: '/tvshows'
    },
    {
        title: 'Anime',
        link: ''
    },
    {
        title: 'Free',
        link: ''
    }
]

//setSearchParam

interface NavBarProps  {
    setSearchParam:(value:string) => void;
}

const NavBar:React.FC<NavBarProps> = (props) => {

    const {setSearchParam} = props;

    const { user,setUser } = useContext<any>(Context!);

    const router = useRouter();
    const loginModal = useLoginModal();

    const openLoginModal = () => {
        loginModal.onOpen();
    }

    const logout = () => {
        setUser(null);
        router.push('/');
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
                {menu && menu.map((item) => {
                    return (
                        <div
                            className='text-md cursor-pointer font-semibold font-serif'
                            key={item.title}
                            onClick={() => router.push(item.link)}
                        >
                            {item.title}
                        </div>
                    )
                })}
                <SearchBar setSearchParam = {setSearchParam}/>
            </div>
            {
                user ?  
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <div
                            className='text-md cursor-pointer font-semibold font-serif'
                            onClick={logout}
                        >
                            Log out
                        </div>
                    </div> : 
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <div
                            className='text-md cursor-pointer font-semibold font-serif'
                            onClick={openLoginModal}
                        >
                            Sign In
                        </div>
                    </div>
            }
        </div>
    )
}

export default NavBar;
