import React from 'react'

type Props = {
  children: React.ReactNode,
  title: string,
  noBorder?: boolean,
  pt?: string,
  bgcolor?: string,
  prefixIcon?: React.ReactNode
}

const StepsContainer = ({ children, title, pt, noBorder, bgcolor, prefixIcon }: Props) => {
  return (
    <div style={{
      paddingTop: pt ? pt : '5%',
    }} className={`h-full ${bgcolor} relative w-full p-[5%]`}>
      <div className={`w-full pb-[1rem]  ${noBorder ? '' : 'border-b  border-black/30'}`}>
        <div className='flex gap-[1rem] items-center'>
          {prefixIcon}
          <p className='text-[28px] font-bold'>
            {title}
          </p>
        </div>
      </div>
      <div className='w-full h-full mt-[2vh]'>
        {children}
      </div>
    </div>
  )
}

export default StepsContainer