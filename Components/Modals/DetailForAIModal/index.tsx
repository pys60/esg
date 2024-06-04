'use client'

import PriButton from '@/components/Common/Micro/PriButton';
import { useEsgReportDataStore, useUserStore } from '@/components/utils/Zustand/store';
import { apiClient, apiClientFormDataWithAuth } from '@/components/utils/apiClient';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { GrPowerReset } from "react-icons/gr";
import { IoMdSave } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Input from '../ItemListModal/Micro/Input';

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void,

}

interface Errors {
  bankName: string;
  accountNumber: string;
  accountName: string;
  swiftCode: string;
  ifscCode: string;
}

interface FormState {
  bankName: string;
  accountNumber: string;
  accountName: string;
  swiftCode: string;
  ifscCode: string;
}


const DetailForAIModal = ({ isOpen, setIsOpen }: Props) => {
  const { user, setUser } = useUserStore()
  const { step1Data, setStep1Data } = useEsgReportDataStore()

  function closeModal() {
    setIsOpen(false)
  }
  const [loading, setLoading] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  const handleReset = async () => {
    try {
      setLoading(true)
      const data: any = await apiClient.post('auth/resetesg', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).json()

      if (data.success) {
        toast.success(data.message)
        setUser()
        window.location.reload()
      }

    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false)
    }
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    if (!step1Data.companyName.value || !step1Data.companyBrief.value) {
      toast('Company Name and Company Brief are required, for using the ZeroCarbon AI.', {
        icon: 'ℹ️'
      })
    }

    const stepDataKeys = Object.keys(step1Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step1Data[key as keyof typeof step1Data].type === 'file') {
          // @ts-ignore
          const file = step1Data[key as keyof typeof step1Data].value[0]
          if (!file) continue
          const formData = new FormData()
          formData.append('banner', file)
          const res: any = await apiClientFormDataWithAuth.post('item/uploadBanner', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData
          }).json()

          const url = res.file.location

          stepData = {
            ...stepData,
            [key]: {
              question: step1Data[key as keyof typeof step1Data].label,
              url: url,
              type: step1Data[key as keyof typeof step1Data].type,
            }
          }

        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step1Data[key as keyof typeof step1Data].label,
              value: step1Data[key as keyof typeof step1Data].value,
              type: step1Data[key as keyof typeof step1Data].type,
            }
          }
        }
      }

      const res: any = await apiClient.put('auth/esg/me', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          esgQNA: {
            'esg-report': stepData
          }
        })
      }).json()
      console.log(res)
      if (res.success) {
        toast.success('Saved Successfully')
        setIsOpen(false)
      }
    }
    catch (err) {
      console.log(err)
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res: any = await apiClient.get(`auth/esg/me/esg-report`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).json()

        const { value } = res

        const stepDataKeys = Object.keys(value)

        let stepData = {
          ...step1Data
        }

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]]
          if (key.type === 'file') {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step1Data],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step1Data],
                value: key.value
              }
            }
          }
        }

        console.log(stepData)
        setStep1Data(stepData)


      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
    , [])

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => handleSave()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl p-[5rem] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">

                  <div className='flex justify-between w-full'>
                    <p className='text-xl font-bold text-grey'>Add your details for Better Experience</p>
                    <p onClick={() => handleSave()} className='cursor-pointer text-grey'>X</p>
                  </div>

                  <div className='w-full flex flex-col gap-[1rem] mt-[2rem]'>
                    <div className='w-full flex flex-col gap-[1rem]'>
                      <Input
                        checkBox={true}
                        transparent={true}
                        isAutoFill={step1Data.companyName.isAutoFill}
                        isArea={step1Data.companyName.isArea}
                        spaced={true}
                        label={step1Data.companyName.label}
                        name={'companyName'}
                        value={step1Data.companyName.value}
                        setValue={(e: any) => setStep1Data({ ...step1Data, companyName: { ...step1Data.companyName, value: e.target.value } })}
                        required={step1Data.companyName.required}
                        type={step1Data.companyName.type} />
                      <Input
                        checkBox={true}
                        transparent={true}
                        isAutoFill={step1Data.companyBrief.isAutoFill}
                        isArea={step1Data.companyBrief.isArea}
                        spaced={true}
                        label={step1Data.companyBrief.label}
                        name={'companyBrief'}
                        value={step1Data.companyBrief.value}
                        setValue={(e: any) => setStep1Data({ ...step1Data, companyBrief: { ...step1Data.companyBrief, value: e.target.value } })}
                        required={step1Data.companyBrief.required}
                        type={step1Data.companyBrief.type} />
                    </div>
                  </div>


                  <div className='flex gap-[1rem] justify-end w-full'>
                    <PriButton tooltip='Close' disabled={
                      loading
                    } onClick={() => {
                      handleSave()
                    }} className='mt-[2rem] w-[20px] flex items-center justify-center'>
                      <IoCloseSharp className='h-[20px] w-[20px]' />
                    </PriButton>
                    <PriButton tooltip='Reset' disabled={
                      loading
                    } onClick={() => {
                      handleReset()
                    }} className='mt-[2rem] w-[20px] flex items-center justify-center'>
                      <GrPowerReset className='h-[20px] w-[20px]' />
                    </PriButton>
                    <PriButton tooltip='Save' disabled={
                      loading
                    } onClick={() => {
                      handleSave()
                    }} className='mt-[2rem] w-[20px] flex items-center justify-center'>
                      <IoMdSave className='h-[20px] w-[20px]' />
                    </PriButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DetailForAIModal