'use client'

import { useRouterWithQuery } from '@/utils/router'
import Image from 'next/image'
import React from 'react'

type Props = {
  image: string,
  children: React.ReactNode,
  backgroundColor?: string
}

const AuthComponentWrapper = ({ image, children, backgroundColor }: Props) => {
  const router = useRouterWithQuery()

  return (
    <div style={{
      backgroundColor: backgroundColor ? backgroundColor : "#121212"
    }} className='min-h-[100vh] w-[100vw] md:flex-row flex-col  flex'>
      <Image src={image} width={400} height={500} alt='auth-bg' className='min-h-[100vh] md:inline-flex hidden w-[50%]' />
      <div className='md:w-[50%] w-full px-[20px]  md:px-[120px] flex flex-col '>
        <div className='w-full mt-[30px] flex justify-center'>
          <Image onClick={() => {
            router.push('/')
          }} className='cursor-pointer' src='/Images/SVG/Logo.svg' width={100} height={100} alt='logo' />
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthComponentWrapper