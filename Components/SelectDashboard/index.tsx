'use client';

import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '../SVG/Logo';


const SelectDashboard = () => {
  const router = useRouter()
  const buyerClick = () => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/auth/buisness')
    } else {
      const decoded: any = jwtDecode(token!)
      if (new Date().getTime() > decoded.exp * 1000) {
        router.push('/auth/buisness')
      }
      else {
        if (decoded.type === 'admin') {
          router.push('/admin')
        } else if (decoded.type === 'dev') {
          router.push('/seller')
        } else {
          router.push('/buyer')
        }
      }
    }
  }



  return (
    <div className='h-[100vh] w-[100vw] relative'>
      <Image
        src='/Images/BG/Select.jpg'
        height={1000}
        width={1000}
        alt='Select Dashboard'
        className='object-cover absolute top-0 left-0 z-[-1] h-[100vh] w-[100vw]'
      />
      <div className='h-[100vh] bg-black bg-opacity-30 absolute top-0 left-0 z-[1] w-[100vw] flex flex-col justify-center items-center'>
        <div className='relative md:w-[40vw] w-[70vw] p-[2rem] pt-[1.5rem] py-[3rem] rounded-md bg-black'>
          <div className='h-[4rem] w-full flex justify-center'>
            <Logo onClick={() => {
              window.open('https://zerocarbon.one')
            }} className='h-full cursor-pointer w-[10rem]' />
          </div>
          <div>
            <p className='text-white text-center mt-[1rem] text-2xl font-bold'>Generate ESG Report</p>
            <div className='flex flex-col items-center gap-[1rem] mt-[2rem]'>
              <button onClick={buyerClick} className='bg-pri  transition-all duration-300 hover:bg-[#386cd1] hover:text-white text-black font-bold p-[0.5rem] md:px-[5rem] px-[1rem] rounded-md'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectDashboard