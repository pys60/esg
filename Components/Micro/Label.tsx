import React from 'react'


const Label = ({
  children,
  checked,
  noCheckbox
}: {
  children: React.ReactNode
  checked: boolean,
  noCheckbox?: boolean
}) => {
  return (
    <div className='flex w-full items-center gap-[1rem] mb-[20px]'>
      {noCheckbox ? null : <input type="checkbox" checked={true} className={`w-[20px] h-[20px] ${checked && 'accent-blue-500'}`} onChange={() => { }} />}

      <p className='text-[20px] w-full'>
        {children}
      </p>
    </div>
  )
}

export default Label