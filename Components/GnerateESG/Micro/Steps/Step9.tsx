'use client'

import Input from '@/Components/Micro/Input'
import UploadInput from '@/Components/Micro/UploadInput'
import { useUserStore } from '@/utils/Zustand'
import { apiClient, apiClientFormDataWithAuth } from '@/utils/apiClient'
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

const Step9 = ({ title, prevstep }: Props) => {
  const router = useRouterWithQuery()
  const [loading, setLoading] = useState(false)
  const { setUser } = useUserStore()
  const [step9Data, setStep9Data] = useState({
    picture: {
      label: 'Upload Your Picture',
      value: [],
      type: 'file',
      url: '',
      required: false,
      isAutoFill: false,
      isArea: false,
    },
    environmentalPolicy: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Environmental"
    },
    greenhouse: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Greenhouse Gas Emissions",
    },
    ghgEmissionsReduction: {
      label: "Calculate the percentage reduction in Scope 3 emissions necessary to meet a 50% reduction in overall carbon emissions by 2030. What strategies will achieve this?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    methaneLeakage: {
      label: "Quantify methane leakage as a percentage of total emissions and identify targeted reduction strategies over the next 5 years.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    carbonIntensity: {
      label: "Compare our current carbon intensity per unit of production to sector averages. What is our target for reduction over the next decade?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    biodiversity: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Biodiversity and Land Use"
    },
    biodiversityImpact: {
      label: "Assess the impact of our operations on local biodiversity using an index or score. What actions can minimize our negative impact by 30% in the next 5 years?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    biodiversityPlan: {
      label: "Develop a quantifiable plan to integrate biodiversity-positive practices into our land use with specific targets (e.g., increasing green spaces by 20% by 2026).",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    waterUsageImpact: {
      label: "Measure and set targets to reduce water usage impacts on local ecosystems by 25% over the next 10 years.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    pollution: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Pollution Control"
    },
    pollutantReduction: {
      label: "Identify the top three pollutants by volume in our emissions and set specific reduction targets of 30% for each by 2030.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    hazardousDischargeMonitoring: {
      label: "Implement a continuous monitoring system for hazardous material discharge, aiming for a 40% reduction in incidents per year.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    environmentalRegulationCompliance: {
      label: "Establish compliance ratios to exceed national and international environmental regulations by 10%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    lifecycle: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Product Lifecycle Analysis"
    },
    highestImpactStage: {
      label: "Conduct a lifecycle assessment and identify the stage responsible for the highest environmental impact. Plan to reduce this by 30% over 5 years.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    upstreamImpactReduction: {
      label: "Collaborate with suppliers to reduce upstream environmental impacts by 25% as measured by emissions per product unit.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    productRecyclability: {
      label: "Evaluate and improve product end-of-life recyclability to 80% across all product lines by 2030.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    adaptation: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Adaptation and Resilience"
    },
    climateRiskAnalysis: {
      label: "Conduct a detailed risk analysis to quantify potential financial losses from key identified climate risks over the next decade.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    climateScenarioModeling: {
      label: "Use climate modeling to predict the impact on operations under various scenarios and develop a corresponding strategy to mitigate key vulnerabilities.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    emergencyPreparedness: {
      label: "Develop and quantify an emergency preparedness strategy to reduce recovery time by 50% following extreme weather events.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    socialHeading: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Social"
    },
    laborPracticesHeading: {
      label: "Labor Practices",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    laborFairPractices: {
      label: "Analyze the correlation between fair labor practices and employee turnover rates. Set a target to improve labor conditions and reduce turnover by 20%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    employeeSatisfaction: {
      label: "Implement a metric-based system to measure employee satisfaction annually with a goal to improve by 15% over three years.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    trainingGoals: {
      label: "Establish quantifiable annual training goals to increase employee participation in sustainable practices by 50%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    healthSafetyHeading: {
      label: "Health and Safety",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    injuryReduction: {
      label: "Calculate the reduction in work-related injuries achieved through improved safety measures aiming for a 30% decrease by 2025.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    mentalHealthTracking: {
      label: "Implement a tracking system for monitoring employee mental health issues with the aim to decrease related absences by 20%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    communityHealthImpacts: {
      label: "Measure the health impact of our operations on local communities using health impact assessments (HIAs) and set reduction targets for negative impacts.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    humanRightsHeading: {
      label: "Human Rights",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    humanRightsAuditing: {
      label: "Establish a quantitative auditing system for monitoring compliance with human rights standards in the supply chain, aiming to achieve 95% compliance.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    humanRightsResponseIndex: {
      label: "Develop a response index to evaluate the effectiveness of our interventions on human rights abuses, aiming for an improvement score of 80%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    humanRightsImpactTool: {
      label: "Use a standardized tool to assess and improve our human rights impact scores by 20% in high-risk areas.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    consumerRelationsHeading: {
      label: "Consumer Relations",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    customerSatisfactionIndex: {
      label: "Implement a customer satisfaction index to track improvements in product safety and reliability, targeting a 10-point improvement on a 100-point scale.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    consumerFeedbackSystem: {
      label: "Develop a quantitative feedback system to track consumer complaints and aim to reduce these by 30% each year.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    productTransparencyQuantification: {
      label: "Quantify the transparency of product content and sourcing practices, aiming to achieve a 90% positive rating from stakeholders.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    communityEngagementHeading: {
      label: "Community and Stakeholder Engagement",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    socialImpactAssessment: {
      label: "Employ a social impact assessment tool to quantitatively measure the effects of our projects on local communities, targeting a 25% improvement in positive impacts.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    communityEngagementGoals: {
      label: "Establish measurable goals for community engagement, aiming to increase community participation in project decision-making by 50%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    communityInvestmentRating: {
      label: "Develop an effectiveness rating system for our community investment initiatives, aiming for an improvement score of 75%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    governanceHeading: {
      label: "Governance",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    sustainabilityStrategyHeading: {
      label: "Sustainability Strategy and Oversight",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    boardRolesSustainability: {
      label: "Define quantitative roles for board members in sustainability initiatives, with specific KPIs to be achieved annually.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    boardEducationScore: {
      label: "Implement a board education score to measure and increase engagement with sustainability goals by 25%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    sustainabilityMetricsSystem: {
      label: "Develop a system of metrics to quantitatively integrate sustainability into corporate strategy, aiming for a 40% improvement in integration score.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    ethicsComplianceHeading: {
      label: "Ethics and Compliance",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    complianceScoring: {
      label: "Establish a compliance scoring system to track and improve adherence to environmental laws, targeting a score improvement of 20%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    ethicalComplianceMonitoring: {
      label: "Monitor and report ethical compliance rates within operations and supply chains, with a goal to reach 98% compliance.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    corruptionCostReduction: {
      label: "Set a financial target to reduce costs related to corruption and bribery by 50% over the next 5 years.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    reportingAccountabilityHeading: {
      label: "Reporting and Accountability",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    sustainabilityReporting: {
      label: "Increase the frequency and detail of sustainability reporting, aiming for 100% adherence to the Global Reporting Initiative (GRI) standards.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    performanceMetrics: {
      label: "Establish clear metrics for sustainability performance and set annual improvement targets of 10%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    executiveCompensationLink: {
      label: "Link executive compensation directly to achieving sustainability targets, with a structured bonus system that incentivizes a 15% improvement.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    riskManagementResilienceHeading: {
      label: "Risk Management and Resilience",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    nonFinancialRiskQuantification: {
      label: "Quantify non-financial risks and incorporate them into a comprehensive risk management framework, aiming to reduce potential impacts by 30%.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    environmentalReserves: {
      label: "Allocate a specific financial reserve for environmental liabilities, increasing it by 10% annually based on projected risks.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    innovationMetric: {
      label: "Establish an innovation metric to evaluate and increase contributions to sustainable technology development by 20% annually.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    innovationTechnologyHeading: {
      label: "Innovation and Technology",
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading"
    },
    rAndDInvestment: {
      label: "Allocate a specific percentage of annual revenue towards R&D in sustainable technologies, aiming to increase this allocation by 1% each year.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    innovationIndex: {
      label: "Develop an internal innovation index to measure and enhance sustainability-focused innovation across all departments.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    },
    sustainablePartnerships: {
      label: "Formulate and track the success of partnerships aimed at advancing sustainable technologies, with a target of launching three new collaborations annually.",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true
    }
  })


  const setPictureAny = (files: any, key: string) => {
    setStep9Data({
      ...step9Data,
      [key]: {
        ...step9Data[key as keyof typeof step9Data],
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step9Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step9Data[key as keyof typeof step9Data].type === 'file') {
          const file = step9Data[key as keyof typeof step9Data].value[0]
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
              question: step9Data[key as keyof typeof step9Data].label,
              url: url,
              type: step9Data[key as keyof typeof step9Data].type,
            }
          }

        } if (step9Data[key as keyof typeof step9Data].type === 'heading') {
          stepData = {
            ...stepData,
            [key]: {
              question: step9Data[key as keyof typeof step9Data].label,
              type: step9Data[key as keyof typeof step9Data].type,
            }
          }
        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step9Data[key as keyof typeof step9Data].label,
              value: step9Data[key as keyof typeof step9Data].value,
              type: step9Data[key as keyof typeof step9Data].type,
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
        try {
          apiClient.post('auth/esg/me', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          }).json()
        }
        catch (err) {
          console.log(err)
        }

        if (res.success) {
          toast.success('Data Saved Successfully! The report will be generated and sent to your email, and will be available in your dashboard')
          router.push(`/`)
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
          ...step9Data
        }

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]]
          if (key.type === 'file') {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step9Data],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step9Data],
                value: key.value
              }
            }
          }
        }
        setStep9Data(stepData)


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
          Object.keys(step9Data).map((key, index) => {
            if (step9Data[key as keyof typeof step9Data].type === 'file') {
              return <UploadInput
                key={index}
                spaced={true}
                // @ts-ignore
                urls={step9Data[key as keyof typeof step9Data].url ? [step9Data[key as keyof typeof step9Data].url] : []}
                title={step9Data[key as keyof typeof step9Data].label}
                files={step9Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            }

            if (step9Data[key as keyof typeof step9Data].type === 'heading') return (
              <p key={index} className='mt-8 text-[#386cd1] text-xl font-bold'>{step9Data[key as keyof typeof step9Data].label}</p>
            )

            return (
              <Input
                key={index}
                checkBox={true}
                transparent={true}
                isAutoFill={step9Data[key as keyof typeof step9Data].isAutoFill}
                isArea={step9Data[key as keyof typeof step9Data].isArea}
                spaced={true}
                label={step9Data[key as keyof typeof step9Data].label}
                name={key}
                value={step9Data[key as keyof typeof step9Data].value as string}
                setValue={(e: any) => setStep9Data({ ...step9Data, [key]: { ...step9Data[key as keyof typeof step9Data], value: e.target.value } })}
                required={step9Data[key as keyof typeof step9Data].required}
                type={step9Data[key as keyof typeof step9Data].type} />
            )
          })
        }

      </form>
      {/* <div className='h-[10vh] z-10 bg-black w-full gap-[1rem] flex items-center justify-end px-[5%] fixed left-0 bottom-0' >
        <PriButton disabled={false} onClick={() => {
          handleReset()
        }} className='w-[15vw] bg-white'>
          {
            loading ? (
              'Saving...'
            ) : (
              'Reset'
            )
          }
        </PriButton>
        <PriButton disabled={loading} onClick={() => {
          router.push(`/esg/create/${prevstep}`)
        }} className='w-[15vw] bg-white'>
          Previous
        </PriButton>
        <PriButton disabled={true} onClick={
          () => handleSave('next')
        } className='w-[15vw] bg-white'>
          {
            loading ? 'Saving...' : 'Next'
          }
        </PriButton>
        <PriButton onClick={() => handleSave()} disabled={loading} className='w-[15vw]'>
          {
            loading ? 'Saving...' : 'Generate Report'
          }
        </PriButton>
      </div> */}
      <ESGBottomBar
        handleSave={handleSave}
        handleReset={handleReset}
        loading={loading}
        nextDisabled={false}
        router={router}
        prevDisabled={false}
        generate={true}
        prevstep={`/esg/create/${prevstep}`}
      />
    </StepsContainer>
  )
}

export default Step9