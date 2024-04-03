'use client'

import React, { useRef,useEffect } from 'react';
import {useRouter} from 'next/navigation';
import useSidebar from '../hooks/useSidebar';
import { MdCancel } from "react-icons/md";
import useLoginModal from '../hooks/useLoginModal';

const menuList1 = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Movies',
        link: '/movie'
    },
    {
        title: 'TV',
        link: '/'
    },
    {
        title: 'Anime',
        link: '/'
    },
    {
        title: 'Free',
        link: '/'
    },
]

const SideBar = () => {
    const sidebarModal = useSidebar();
    const sidebarRef = useRef(null);
    const router = useRouter();
    const loginModal = useLoginModal();
    
    const openLoginModal =() => {
        loginModal.onOpen();
        console.log('loginModal.isOpen?',loginModal.isOpen);
    }

    const onClose = () => {
        sidebarModal.onClose();
    }

    const handleOnClick = (title:string) => {
        if(title === 'Movies'){
            router.push('/movie');
            onClose();
        }else if(title === 'TV'){
            router.push('/tvshows');
            onClose();
        }else if(title === 'Home'){
            router.push('/');
            onClose();
        }else if(title === 'Sign In'){
            loginModal.onOpen();
            onClose();
        }
    }

    const signIn = () => {
        loginModal.onOpen();
        onClose();
    }


    return (
        <div
            ref={sidebarRef}
            className={`
                fixed
                min-h-screen
                bg-white
                w-3/4
                lg:hidden
                md:w-2/4
                xl:w-15
                p-3
                transition-transform
                duration-300
                lg:translate-x-0
                ${sidebarModal.isOpen ? 'translate-x-0' : '-translate-x-full'}
                z-40
                shadow-inner
                flex
            `}
        >
            <div className='absolute top-2 right-2 h-1/6'>
                <MdCancel size={25} className='cursor-pointer' onClick={onClose} />
            </div>

            <div
                className='
                    flex
                    flex-col
                    mt-10
                    justify-between
                    px-3
                '
            >
                <div className='flex flex-col gap-3 font-serif font-bold w-full'>
                    {menuList1 && menuList1.map((item,index)=>{
                        return (
                            <div 
                                className='w-full cursor-pointer'
                                onClick = {() => handleOnClick(item.title)}
                                key={index}
                            > 
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-3 font-serif font-bold'>
                    <div>Redeem</div>
                    <div
                         onClick = {signIn}
                         className='cursor-pointer'
                    >
                        Sign In
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
