
import BuisnessLogin from '@/Components/Auth/Buisness'
import Loading from '@/Components/Loading'
import { Suspense } from 'react'

const BuisnessLoginPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BuisnessLogin />
    </Suspense>
  )
}

export default BuisnessLoginPage