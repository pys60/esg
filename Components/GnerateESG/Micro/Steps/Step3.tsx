'use client'

import Input from '@/Components/Micro/Input'
import UploadInput from '@/Components/Micro/UploadInput'
import { useEnhancedStandardsStore, useGlobalStandardsStore, useUserStore } from '@/utils/Zustand'
import { apiClient, apiClientFormDataWithAuth } from '@/utils/apiClient'
import ESGQuestions from '@/utils/esg'
import { ENHANCED } from '@/utils/esg/enhanced'
import { useRouterWithQuery } from '@/utils/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ESGBottomBar from '../ESGBottomBar'
import StepsContainer from './StepsContainer'

type Props = {
  title: {
    title: string,
    value: string
  },
  nextstep: string,
  prevstep: string
}

const Step3 = ({ title, nextstep, prevstep }: Props) => {
  const router = useRouterWithQuery()
  const [loading, setLoading] = useState(false)
  const { setUser } = useUserStore()
  const { globalStandards } = useGlobalStandardsStore()
  const { enhancedStandards } = useEnhancedStandardsStore()
  const [step3Data, setStep3Data] = useState<Record<string, ESGStep>>({
    picture: {
      label: 'Upload Your Picture',
      value: [],
      type: 'file',
      url: '',
      required: false,
      isAutoFill: false,
      isArea: false,
    },

  })


  const setPictureAny = (files: any, key: string) => {
    setStep3Data({
      ...step3Data,
      [key]: {
        ...step3Data[key as keyof typeof step3Data],
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step3Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step3Data[key as keyof typeof step3Data].type === 'file') {
          const file = step3Data[key as keyof typeof step3Data].value[0]
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
              question: step3Data[key as keyof typeof step3Data].label,
              url: url,
              type: step3Data[key as keyof typeof step3Data].type,
            }
          }

        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step3Data[key as keyof typeof step3Data].label,
              value: step3Data[key as keyof typeof step3Data].value,
              type: step3Data[key as keyof typeof step3Data].type,
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
            [title.value]: stepData
          }
        })
      }).json()
      if (res.success) {
        if (type === 'SAVE') {
          return
        }
        toast.success('Saved Successfully')
        if (type) {
          router.push(`/esg/create/${nextstep}`)
        } else {
          router.push('/')
        }
      }
    }
    catch (err) {
      console.log(err)
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
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

  const selectedGlobalStandards = globalStandards.filter((standard) => standard.selected)[0]
  const enhancedStandard = enhancedStandards.filter((standard) => standard.selected)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res: any = await apiClient.get(`auth/esg/me/${title.value}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).json()

        const { value } = res

        const stepDataKeys = Object.keys(value)

        let step2 = ESGQuestions[selectedGlobalStandards?.short as keyof typeof ESGQuestions]?.social
        // setStep2Data(step2)
        if (enhancedStandard.length > 0 && enhancedStandard[0].value !== 'None') {
          enhancedStandard.forEach((item) => {
            step2 = { ...step2, ...ENHANCED[item.file as keyof typeof ENHANCED]?.social }
          })
        }

        let stepData = { ...step2 }

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]]

          //check if stepDataKeys[i] is in step2Data
          if (!stepData[stepDataKeys[i] as keyof typeof stepData]) {
            continue
          }

          if (key.type === 'file') {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof stepData],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof stepData],
                value: key.value
              }
            }
          }
        }
        setStep3Data(stepData)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
    , [])

  useEffect(() => {
    const step2 = ESGQuestions[selectedGlobalStandards?.short as keyof typeof ESGQuestions].social
    setStep3Data(step2)
  }, [selectedGlobalStandards])

  return (
    <StepsContainer title={title.title}>
      <form className='w-full h-full'>
        {
          Object.keys(step3Data).map((key, index) => {
            if (step3Data[key as keyof typeof step3Data].type === 'file') {
              return <UploadInput
                key={index}
                spaced={true}
                urls={step3Data[key as keyof typeof step3Data].url ? [step3Data[key as keyof typeof step3Data].url!] : []}
                title={step3Data[key as keyof typeof step3Data].label}
                files={step3Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            }
            return (
              <Input
                transparent={true}
                checkBox={true}
                key={index}
                isAutoFill={step3Data[key as keyof typeof step3Data].isAutoFill}
                isArea={step3Data[key as keyof typeof step3Data].isArea}
                spaced={true}
                label={step3Data[key as keyof typeof step3Data].label}
                name={key}
                value={step3Data[key as keyof typeof step3Data].value as string}
                setValue={(e: any) => setStep3Data({ ...step3Data, [key]: { ...step3Data[key as keyof typeof step3Data], value: e.target.value } })}
                required={step3Data[key as keyof typeof step3Data].required}
                type={step3Data[key as keyof typeof step3Data].type} />
            )
          })
        }

      </form>
      <ESGBottomBar
        handleSave={handleSave}
        handleReset={handleReset}
        loading={loading}
        nextDisabled={false}
        router={router}
        prevDisabled={false}
        prevstep={`/esg/create/${prevstep}`}
      />
    </StepsContainer>
  )
}

export default Step3