'use client'
import { useRouterWithQuery } from '@/utils/router'
import { useEffect } from 'react'

const GenerateESG = () => {
  const router = useRouterWithQuery()

  useEffect(() => {
    router.push('/esg/add')
  }, [])


  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex gap-[1rem]'>
        {/* loading */}
        <p className='text-[18px] font-bold'>Loading...</p>
      </div>
    </div>
  )
}

export default GenerateESG