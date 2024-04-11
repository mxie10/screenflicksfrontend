'use client'

import React, { useContext } from 'react'
import { Context } from '../context/useContext';

const AccountInfo = () => {

  const {user} = useContext(Context);

  return (
    <div className=' min-h-screen flex flex-col gap-3 justify-center items-center mt-10 text-lg font-bold '>
        <div className=' bg-white p-5 rounded-lg flex flex-col gap-3'>
          <div className='flex flex-row gap-4'>
            <div>First Name:</div>
            <div>{user?.firstName}</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div>Last Name:</div>
            <div>{user?.lastName}</div>
          </div>
          <div className='flex flex-row gap-4'>
            <div>Email Address:</div>
            <div>{user?.email}</div>
          </div>
        </div>
    </div>
  )
}

export default AccountInfo;
