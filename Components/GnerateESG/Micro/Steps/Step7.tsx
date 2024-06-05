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

type Step7Data = {
  label: string;
  value: any;
  type: string;
  required: boolean;
  isAutoFill: boolean;
  isArea: boolean;
  url?: string;
  img?: string; // Add the img property with an optional type
};


type Props = {
  title: {
    title: string,
    value: string
  },
  nextstep: string,
  prevstep: string
}

const Step7 = ({ title, prevstep, nextstep }: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [step7Data, setStep7Data] = useState<Record<string, Step7Data>>({
    picture: {
      label: 'Upload Your Picture',
      value: [],
      type: 'file',
      required: true,
      isAutoFill: false,
      isArea: false,
      url: ''
    },
    materialSustainabilityIssues: {
      label: "What are the material sustainability issues for the organization, and how were they identified?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    trackingSustainabilityProgress: {
      label: "How does the organization track and measure progress against its sustainability goals?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    externalAssurance: {
      label: "Has the ESG report been externally assured, and if so, by whom and to what extent?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    GRICompliance: {
      label: "How does the report comply with GRI standards, and are there any omissions or deviations?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    sustainabilityReporting: {
      label: "How does the company report its sustainability performance?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    sustainabilityTargets: {
      label: "What are the company's sustainability targets, and what progress has been made towards achieving them?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    valueChainSustainability: {
      label: "How does the company address sustainability issues in its value chain?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    humanRightsCompliance: {
      label: "How does the company ensure compliance with human rights standards in its operations?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    governmentAssistanceAndInvestments: {
      label: "What is the nature and extent of financial assistance received from the government and investments made in sustainability initiatives?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    relevantSDGs: {
      label: "Which UN SDGs are most relevant to the organization's operations and how are they integrated into its business strategy and practices?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDGContribution: {
      label: "How does the organization contribute to the achievement of the selected SDGs?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG1: {
      img: '/Images/asset/esg/no-poverty.png',
      label: "What initiatives does the company have in place to support poverty reduction within its workforce and in the communities where it operates?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG1Q2: {
      label: "How does the company assess and address the risk of poverty among its employees and external stakeholders?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG2: {
      img: '/Images/asset/esg/zero-hunger.png',
      label: "What measures is the company taking to ensure food security and improve nutrition among its employees and their communities?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG2Q2: {
      label: "How is the company contributing to sustainable agriculture practices in its supply chain?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG3: {
      img: '/Images/asset/esg/good-health.png',
      label: "What programs does the company have in place to promote physical and mental health for its employees?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG3Q2: {
      label: "How does the company support health-related initiatives in its wider community?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG4: {
      img: '/Images/asset/esg/quality-edu.png',
      label: "How is the company investing in education for its employees and the communities it operates in?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG4Q2: {
      label: "What partnerships or collaborations is the company engaged in to promote access to quality education?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG5: {
      img: '/Images/asset/esg/gender-equality.png',
      label: "What steps is the company taking to ensure gender equality within its workforce?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG5Q2: {
      label: "How is the company addressing gender-based issues, such as equal pay and sexual harassment?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG6: {
      img: '/Images/asset/esg/clean-water.png',
      label: "What actions has the company taken to ensure sustainable water use and management within its operations?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG6Q2: {
      label: "How is the company contributing to the improvement of water quality and sanitation in its community?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG7: {
      img: '/Images/asset/esg/clean-energy.png',
      label: "What initiatives does the company have to increase the use of renewable energy sources within its operations?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG7Q2: {
      label: "How is energy efficiency being improved across the company's facilities?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG8: {
      img: '/Images/asset/esg/eco-growth.png',
      label: "What measures is the company taking to ensure fair labor practices and job security for its employees?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG8Q2: {
      label: "How does the company contribute to local economic development in the areas where it operates?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG9: {
      img: '/Images/asset/esg/industry.png',
      label: "How is the company investing in infrastructure and innovations to support sustainable industrialization? ",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG9Q2: {
      label: "What steps are being taken to enhance the resilience of the company's operational infrastructure?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG10: {
      label: "How does the company ensure inclusivity and equality for all its stakeholders, including marginalized groups?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG10Q2: {
      label: "What policies are in place to reduce income or social inequality within the company?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG11: {
      img: '/Images/asset/esg/sustainable-cities.png',
      label: "What contributions does the company make towards making cities and human settlements inclusive, safe, resilient, and sustainable?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG11Q2: {
      label: "How does the company ensure that its operations do not negatively impact the urban environments where it operates?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG12: {
      img: '/Images/asset/esg/res-consumption.png',
      label: "What strategies does the company have in place to promote responsible consumption and production patterns?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG12Q2: {
      label: "How does the company manage waste and resources throughout its supply chain?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG13: {
      img: '/Images/asset/esg/climate-action.png',
      label: "What specific actions is the company taking to reduce its carbon footprint and adapt to climate change?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG13Q2: {
      label: "How is the company engaging with stakeholders to promote collective action on climate change?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG14: {
      img: '/Images/asset/esg/life-water.png',
      label: "How does the company address the impacts of its operations on marine ecosystems?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG14Q2: {
      label: "What initiatives are in place to promote the conservation of ocean and coastal areas?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG15: {
      img: '/Images/asset/esg/life-land.png',
      label: "What measures is the company taking to protect, restore, and promote sustainable use of terrestrial ecosystems?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG15Q2: {
      label: "How does the company address biodiversity loss and the impact of its operations on natural habitats?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG16: {
      img: '/Images/asset/esg/peace.png',
      label: "What is the company doing to promote peaceful and inclusive societies within its sphere of influence?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG16Q2: {
      label: "How does the company ensure ethical practices and transparency in its operations?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG17: {
      img: '/Images/asset/esg/partnerships.png',
      label: "How is the company collaborating with other organizations to advance the sustainable development goals?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDG17Q2: {
      label: "What role does the company play in fostering a global partnership for sustainable development?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    currentPerformanceVsSDGTargets: {
      label: "Current Performance vs. SDG Targets: Where does the company currently stand in relation to the targets set out in the relevant SDGs?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    gapBetweenCompanyPerformance: {
      label: "What gaps exist between the company's current performance and the SDG targets, and what opportunities are there for improvement?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    strategicActionsForSDGAlignment: {
      label: "What strategic actions is the company planning to take to address these gaps and better align with the SDGs?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    stakeholderEngagementSDGs: {
      label: "How does the company engage stakeholders in its SDG-related activities?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    },
    SDGProgressReporting: {
      label: "How does the company report on its progress towards achieving the SDGs?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true
    }
  })
  const { setUser } = useUserStore()


  const setPictureAny = (files: any, key: string) => {
    setStep7Data({
      ...step7Data,
      [key]: {
        ...step7Data[key as keyof typeof step7Data],
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step7Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step7Data[key as keyof typeof step7Data].type === 'file') {
          const file = step7Data[key as keyof typeof step7Data].value[0]
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
              question: step7Data[key as keyof typeof step7Data].label,
              url: url,
              type: step7Data[key as keyof typeof step7Data].type,
            }
          }

        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step7Data[key as keyof typeof step7Data].label,
              value: step7Data[key as keyof typeof step7Data].value,
              type: step7Data[key as keyof typeof step7Data].type,
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
      console.log(res)
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
          ...step7Data
        }

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]]
          if (key.type === 'file') {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step7Data],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step7Data],
                value: key.value
              }
            }
          }
        }

        setStep7Data(stepData)


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
    <StepsContainer title={title.title}>
      <form className='w-full h-full'>
        {
          Object.keys(step7Data).map((key, index) => {
            if (step7Data[key as keyof typeof step7Data].type === 'file') {
              return <UploadInput
                key={index}
                spaced={true}
                urls={step7Data[key as keyof typeof step7Data].url ? [step7Data[key as keyof typeof step7Data].url!] : []}
                title={step7Data[key as keyof typeof step7Data].label}
                files={step7Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            }
            return (
              <Input
                img={step7Data[key as keyof typeof step7Data]?.img || ''}
                key={index}
                checkBox={true}
                transparent={true}
                isAutoFill={step7Data[key as keyof typeof step7Data].isAutoFill}
                isArea={step7Data[key as keyof typeof step7Data].isArea}
                spaced={true}
                label={step7Data[key as keyof typeof step7Data].label}
                name={key}
                value={step7Data[key as keyof typeof step7Data].value as string}
                setValue={(e: any) => setStep7Data({ ...step7Data, [key]: { ...step7Data[key as keyof typeof step7Data], value: e.target.value } })}
                required={false}
                type={step7Data[key as keyof typeof step7Data].type} />
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

export default Step7