'use client'

import Input from '@/Components/Micro/Input'
import UploadInput from '@/Components/Micro/UploadInput'
import { useUserStore } from '@/utils/Zustand'
import { apiClient, apiClientFormDataWithAuth } from '@/utils/apiClient'
import { useRouter } from 'next/navigation'
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

const Step6 = ({ title, nextstep, prevstep }: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setUser } = useUserStore()
  const [step6Data, setStep6Data] = useState({
    picture: {
      label: 'Upload Your Picture',
      value: [],
      type: 'file',
      url: '',
      required: false,
      isAutoFill: false,
      isArea: false,
    },
    carbonEmissionsTracking: { label: "What systems or technologies are used to track and manage carbon emissions data across the supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    scope3Emissions: { label: "What are the organization's Scope 3 emissions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    offsetDigitalEmissions: { label: "Has the company offset its digital emission(Scope 3) by buying Carbon Credit Certificate.", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainCompliance: { label: "What policies and procedures does the company have in place to ensure that its suppliers comply with applicable laws and regulations, as well as with the company's own social and environmental standards?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainSustainability: { label: "How does the company assess the sustainability of its supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    thirdPartyVerification: { label: "Do they use independent third-party verification?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    emissionsTransparency: { label: "How transparent is your Organization in terms of carbon emissions, and can emissions be traced back to specific processes or suppliers?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainRiskManagement: { label: "What steps does the company take to manage and mitigate environmental and social risks in its supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    conflictMineralsPolicy: { label: "What is the company's policy on sourcing conflict minerals (e.g., tin, tantalum, tungsten, and gold) from regions affected by conflict?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    childLaborPolicy: { label: "What is the company's policy on using child labor in its supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    forcedLaborPolicy: { label: "What is the company's policy on using forced labor in its supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    sustainableSourcingPolicy: { label: "What is the company's policy on sustainable sourcing of materials?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    environmentallyResponsibleSuppliers: { label: "How does the company ensure that its suppliers are environmentally responsible?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    sociallyResponsibleSuppliers: { label: "How does the company ensure that its suppliers are socially responsible?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    reducingSupplyChainFootprint: { label: "What steps is the company taking to reduce its environmental and social footprints in its supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    sustainableWorkingConditionsPolicy: { label: "Is there a policy in place for purchasing that encourages suppliers to have sustainable working conditions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainRiskAssessment: { label: "Does the firm have a supply chain risk assessment for its procurement, supply chain, and logistics divisions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    measuringSupplyChainEmissions: { label: "How do you measure and report the carbon emissions associated with your supply chain activities? Do you use any specific standards or protocols for measuring these emissions (e.g., GHG Protocol, ISO standards)?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    engagingSuppliers: { label: "How do you engage with suppliers to ensure they are aware of and actively reducing their carbon footprint? Are there any criteria or standards that suppliers must meet regarding carbon emissions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    transportationModes: { label: "What modes of transportation are predominantly used in your supply chain, and what are their associated carbon footprints? What steps are you taking to reduce the associated carbon footprints?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    reducingTransportationEmissions: { label: "Have you implemented any strategies to reduce emissions from transportation, such as using electric vehicles or optimizing delivery routes?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    energyUse: { label: "How is energy used in your supply chain, and what are the primary sources of this energy? Are there initiatives in place to shift towards renewable energy sources within the supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    lifecycleAnalysis: { label: "Do you conduct lifecycle analyses of your products to understand their overall carbon footprint, including production, usage, and disposal? How do you incorporate the findings of these analyses into your supply chain management and decision-making processes?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    wasteManagement: { label: "What waste management practices are in place in your supply chain, and how do they impact carbon emissions? Are there any initiatives to reduce waste or promote recycling and reuse within the supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    carbonOffsetPrograms: { label: "Are there any carbon offset programs or initiatives that your organization participates in to mitigate supply chain emissions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    reducingCarbonFootprint: { label: "What specific steps are taken to reduce the carbon footprint in your supply chain directly?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    environmentalCompliance: { label: "How does your supply chain comply with local and international environmental regulations concerning carbon emissions?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainCarbonPolicies: { label: "Are there any environmental or sustainability policies that specifically address carbon emissions in your supply chain?", value: "", type: "text", required: false, isAutoFill: true, isArea: true },
    supplyChainEmissionsTransparency: { label: "How transparent is your supply chain in terms of carbon emissions, and can emissions be traced back to specific processes or suppliers?", value: "", type: "text", required: false, isAutoFill: true, isArea: true }
  })


  const setPictureAny = (files: any, key: string) => {
    setStep6Data({
      ...step6Data,
      [key]: {
        ...step6Data[key as keyof typeof step6Data],
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step6Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step6Data[key as keyof typeof step6Data].type === 'file') {
          const file = step6Data[key as keyof typeof step6Data].value[0]
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
              question: step6Data[key as keyof typeof step6Data].label,
              url: url,
              type: step6Data[key as keyof typeof step6Data].type,
            }
          }

        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step6Data[key as keyof typeof step6Data].label,
              value: step6Data[key as keyof typeof step6Data].value,
              type: step6Data[key as keyof typeof step6Data].type,
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
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

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

        let stepData = {
          ...step6Data
        }

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]]
          if (key.type === 'file') {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step6Data],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step6Data],
                value: key.value
              }
            }
          }
        }
        setStep6Data(stepData)


      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
    , [])

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

  return (
    <StepsContainer title={title.title}>
      <form className='w-full h-full'>
        {
          Object.keys(step6Data).map((key, index) => {
            if (step6Data[key as keyof typeof step6Data].type === 'file') {
              return <UploadInput
                key={index}
                spaced={true}
                // @ts-ignore
                urls={step6Data[key as keyof typeof step6Data].url ? [step6Data[key as keyof typeof step6Data].url] : []}
                title={step6Data[key as keyof typeof step6Data].label}
                files={step6Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            }
            return (
              <Input
                key={index}
                checkBox={true}
                transparent={true}
                isAutoFill={step6Data[key as keyof typeof step6Data].isAutoFill}
                isArea={step6Data[key as keyof typeof step6Data].isArea}
                spaced={true}
                label={step6Data[key as keyof typeof step6Data].label}
                name={key}
                value={step6Data[key as keyof typeof step6Data].value as string}
                setValue={(e: any) => setStep6Data({ ...step6Data, [key]: { ...step6Data[key as keyof typeof step6Data], value: e.target.value } })}
                required={step6Data[key as keyof typeof step6Data].required}
                type={step6Data[key as keyof typeof step6Data].type} />
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

export default Step6