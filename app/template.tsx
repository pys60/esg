'use client';

import Loading from '@/Components/Loading';
import { useCategoriesStore, useContriesStore, useUserStore } from '@/utils/Zustand';
import { jwtDecode } from 'jwt-decode';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const Template = ({ children }: { children: React.ReactNode }) => {
  const { setCountries } = useContriesStore()
  const { setCategories } = useCategoriesStore()
  const router = useRouter()
  const pathname = usePathname()
  const { setUser } = useUserStore()
  const searchParams = useSearchParams()


  useEffect(() => {
    setCountries()
    setCategories()

    const tokenFromParams = searchParams.get('token')

    if (tokenFromParams) {
      localStorage.setItem('token', tokenFromParams)

      const decoded: any = jwtDecode(tokenFromParams)

      if (new Date().getTime() > decoded.exp * 1000) {
        router.push('/')
        localStorage.removeItem('token')
        toast.error('Session Expired')
      } else {
        if (decoded.type === 'admin') {
          router.push('/admin')
        } else if (decoded.type === 'dev') {
          router.push('/seller')
        } else {
          router.push('/esg/create')
        }
      }

      return

    }

    const token = localStorage.getItem('token')

    if (!token) {
      if (pathname === '/auth/seller' || pathname === '/auth/buisness' || pathname === '/auth/admin' || pathname.includes('/esg/create')) {
        return
      } else {
        router.push('/')
      }
    } else {
      const decoded: any = jwtDecode(token)
      setUser(token)
      if (new Date().getTime() > decoded.exp * 1000) {
        router.push('/')
        localStorage.removeItem('token')
        toast.error('Session Expired')
      } else {
        if (decoded.type === 'admin') {
          router.push('/admin')
        } else if (decoded.type === 'dev') {
          router.push('/seller')
        } else {
          if (!pathname.includes('/esg/create')) {

            router.push('/esg/create')
          }
        }
      }
    }

  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center justify-center w-full h-full">{children}</div>
      <Toaster />
    </Suspense>
  )
}

export default Template