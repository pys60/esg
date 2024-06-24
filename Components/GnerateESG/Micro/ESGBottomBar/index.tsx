'use client'

import PriButton from '@/Components/Micro/PriButton';
import { FiSave } from "react-icons/fi";
import { GiSave } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

type Props = {
  handleSave: (next?: string) => void
  handleReset: () => void
  loading: boolean
  router: any
  prevDisabled?: boolean
  nextDisabled?: boolean
  generate?: boolean,
  prevstep?: string,
}

const ESGBottomBar = ({
  handleSave,
  handleReset,
  loading,
  router,
  prevDisabled,
  prevstep,
  nextDisabled,
  generate
}: Props) => {
  // const [, setTimeForAutoSave] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeForAutoSave(currentTime => {
  //       if (currentTime >= 30) {
  //         handleSave('SAVE');
  //         return 0; // Reset the timer to 0 after saving
  //       } else {
  //         return currentTime + 1; // Increment the timer by 1
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }
  //   , [handleSave]);

  return (
    <div className='h-[10vh] z-10 bg-black w-full gap-[1rem] flex items-center justify-end px-[5%] fixed left-0 bottom-0' >
      <PriButton tooltip={
        generate ? 'Generate' : 'Save and Exit'
      } onClick={() => handleSave()} disabled={loading}
        className='!px-3 w-fit'>
        {
          generate ? <RiAiGenerate className='h-[20px] w-[20px]' />
            : <GiSave className='h-[20px] w-[20px]' />
        }
      </PriButton>
      <PriButton tooltip='Reset' disabled={loading} onClick={() => {
        handleReset()
      }} className='!px-3 w-fit bg-white'>
        <GrPowerReset className='h-[20px] w-[20px]' />
      </PriButton>
      <PriButton tooltip='Save' disabled={loading} onClick={() => {
        handleSave('SAVE')
      }
      } className='!px-3 bg-white w-fit'>
        <FiSave className='h-[20px] w-[20px]' />
      </PriButton>

      <PriButton tooltip='Previous Step' disabled={prevDisabled || loading} onClick={() => {
        router.push(prevstep)
      }} className='w-fit !px-3 bg-white'>
        <MdOutlineNavigateBefore className='h-[20px] w-[20px]' />
      </PriButton>
      <PriButton tooltip='Next Step' disabled={nextDisabled || loading} onClick={
        () => handleSave('next')
        // () => router.push(`/esg/create/${nextstep}`)
      } className='w-fit !px-3 bg-white'>
        <MdOutlineNavigateNext className='h-[20px] w-[20px]' />
      </PriButton>

    </div>
  )
}

export default ESGBottomBar