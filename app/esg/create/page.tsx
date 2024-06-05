import GenerateESG from "@/Components/GnerateESG"
import Loading from "@/Components/Loading"
import { Suspense } from "react"

const CreateESG = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GenerateESG />
    </Suspense>
  )
}

export default CreateESG