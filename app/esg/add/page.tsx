import Step0 from "@/Components/GnerateESG/Micro/Steps/Step0"
import Loading from "@/Components/Loading"
import { Suspense } from "react"


const Add = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Step0 nextstep={'esg-report'} />
    </Suspense>
  )
}

export default Add