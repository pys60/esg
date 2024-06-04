import Steps from '@/components/PageComponents/GnerateESG/Micro/Steps'


const CreateItem = ({ params }: { params: { id: string } }) => {
  return (
    <Steps id={params.id} />
  )
}

export default CreateItem