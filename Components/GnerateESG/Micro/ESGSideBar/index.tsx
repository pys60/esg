'use client'

import { useESGListItemsStore } from '@/utils/Zustand';
import { useRouterWithQuery } from '@/utils/router';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ESGSideBar = () => {
  const params = useParams()
  const router = useRouterWithQuery()
  const { esgReportItems: listItems } = useESGListItemsStore()

  const [active, setActive] = useState('')

  useEffect(() => {
    if (params?.id) {
      const activeItem = listItems.find(item => item.value === params.id)
      if (activeItem) {
        setActive(activeItem.value)
      }
    }
  }, [params])

  const handleActive = (value: ESGReportItem) => {
    router.push(`/esg/create/${value}`)
  }

  return (
    <div className='h-[10vh] bg-none px-[2%] z-10 flex gap-[1rem] fixed left-0 top-[2vh] w-full'>
      <div className='w-full no-scoll-bar h-full px-[2%] bg-black flex overflow-x-auto gap-[2rem]'>
        {
          listItems.map((item) => (
            <button onClick={() => handleActive(item.value as ESGReportItem)} key={item.name} className={`flex ${active === item.value ? 'text-pri border-b-4 border-pri ' : 'text-white border-b-4 border-[#000000]'
              } items-center whitespace-nowrap transition-all duration-300`}>
              <item.icon className=' text-[18px]' />
              <p className=' ml-[1rem] text-[18px]'>
                {item.name}
              </p>
            </button>
          ))
        }
      </div>

    </div>
  )
}

export default ESGSideBar