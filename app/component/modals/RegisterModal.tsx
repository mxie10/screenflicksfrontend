'use client'
import { useCallback, useState } from 'react';
import {useRouter} from 'next/navigation';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import useLoginModal from '@/app/hooks/useLoginModal';
import Input from '../inputs/InputAlt';
import {register} from '../../auth/auth.js';

const RegisterModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const toggle = useCallback(()=>{
        registerModal.onClose();
        loginModal.onOpen();
    },[loginModal,registerModal])

    const handleOnSubmit = () => {
        if (firstName.trim() === '' || lastName.trim() === '' || password.trim() === ''|| email.trim() === '') {
            setMessage('Please fill in all fields');
            return;
          }
          register(firstName, lastName, password, email)
              .then(res => {
                console.log('res is:',res);
                  if (res === 'success') {
                      setMessage('success');
                      registerModal.onClose();
                      loginModal.onOpen();
                      router.push('/');
                  }else{
                      setMessage('Username or email address already exists.');
                  }
              }
          ).catch(err => {
              console.log(err);
          })
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title="Welcome to ScreenFlicks"
                subtitle='Create an account'
            />
            
            <Input
                id="firstName"
                label="First Name"
                disabled={isLoading}
                required
                onChangeValue={text => setFirstName(text)}
            />
            <Input
                id="lastName"
                label="Last Name"
                disabled={isLoading}
                required
                onChangeValue={text => setLastName(text)}
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                required
                onChangeValue={text => setPassword(text)}
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                required
                onChangeValue={text => setEmail(text)}
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
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Register"
            onClose={registerModal.onClose}
            body={bodyContent}
            footer={footerContent}
            actionlabel='Register'
            handleOnSubmit = {handleOnSubmit}
        />
    )
}

export default RegisterModal;