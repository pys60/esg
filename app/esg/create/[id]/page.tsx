import Steps from "@/Components/GnerateESG/Micro/Steps"
import Loading from "@/Components/Loading"
import { Suspense } from "react"


const CreateItem = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Steps id={params.id} />
    </Suspense>
  )
}

export default CreateItem