'use client'

import Loading from '@/Components/Loading'
import SelectDashboard from '@/Components/SelectDashboard'
import { Suspense } from 'react'


const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SelectDashboard />
    </Suspense>
  )
}

export default Home