'use client'

import { useCallback, useContext, useState } from 'react';
import useRegisterModal from '../../hooks/useRegisterModal'
import Modal from './Modal';
import Heading from '../Heading';
import useLoginModal from '../../hooks/useLoginModal'
import { useRouter } from 'next/navigation';
import Input from '../inputs/InputAlt';
import {login} from '../../auth/auth.js';
import { Context } from '@/app/context/useContext';

const LoginModal = () => {
    const router = useRouter();
    const {user,setUser} = useContext<any>(Context);
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const toggle = useCallback(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    },[loginModal,registerModal])

    const handleLogin = () => {
        if (email === '' || password === '') {
            setMessage('Please fill in all fields');
        } else {
            login(email, password)
            .then(res => {
                if (res.message === 'success') {
                    console.log('res:',res);
                    setUser(res.response);
                    loginModal.onClose();
                    router.push('/');                    
                } else {
                    setMessage('Wrong username or password, please try again.');
                }
            }).catch(err => {
                setMessage(err.message);
            })
        }
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome back"
                subtitle='Login to your account'
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                required
                onChangeValue={text => setEmail(text)}
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                required
                onChangeValue={text => setPassword(text)}
            />
            {/* Hello Modal Body */}
            <div className='text-red-600 text-center mt-3'>{message}</div>
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <div
                className='
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                '
            >
                <div className='justify-center text-center flex flex-row item-cen gap-2'>
                    <div>
                        Don't have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Create an account
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Log in"
            onClose={loginModal.onClose}
            body={bodyContent}
            footer={footerContent}
            handleOnSubmit={handleLogin}
        />
    )
}

export default LoginModal;