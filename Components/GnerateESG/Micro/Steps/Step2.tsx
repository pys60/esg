'use client'

import Input from '@/Components/Micro/Input'
import Label from '@/Components/Micro/Label'
import PriButton from '@/Components/Micro/PriButton'
import Radio from '@/Components/Micro/Radio'
import UploadInput from '@/Components/Micro/UploadInput'
import { useEnhancedStandardsStore, useGlobalStandardsStore, useUserStore } from '@/utils/Zustand'
import { apiClient, apiClientFormDataWithAuth } from '@/utils/apiClient'
import ESGQuestions from '@/utils/esg'
import { ENHANCED } from '@/utils/esg/enhanced'
import { useRouterWithQuery } from '@/utils/router'
import {
  ArcElement,
  BarElement,
  CategoryScale, Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { useEffect, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import toast from 'react-hot-toast'
import ESGBottomBar from '../ESGBottomBar'
import StepsContainer from './StepsContainer'

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(Title);
Chart.register(Tooltip);
Chart.register(Legend);
Chart.register(ArcElement);


type Props = {
  title: {
    title: string,
    value: string
  },
  nextstep: string,
  prevstep: string
}

const Step2 = ({ title, nextstep, prevstep }: Props) => {
  const router = useRouterWithQuery()
  const [loading, setLoading] = useState(false)
  const [step2Data, setStep2Data] = useState({
    picture: {
      label: 'Upload Your Picture',
      value: [],
      type: 'file',
      url: '',
      required: false,
      isAutoFill: false,
      isArea: false,
    },
    organizationScope: {
      label: `What are the organization's Scope 1 and Scope 2 GHG emissions, and, if applicable, Scope 3 emissions?`,
      value: '',
      value2: '',
      value3: '',
      type: 'text',
      required: false,
      isAutoFill: true,
      isArea: true,
    },
  })
  const { globalStandards } = useGlobalStandardsStore()
  const { enhancedStandards } = useEnhancedStandardsStore()
  const [lastYear, setLastYear] = useState(0)

  const { setUser } = useUserStore()
  const { user, userLoading } = useUserStore()
  const buisnessTripEmi = user?.buissnessID?.totalEmissionByCategory?.buisnessTripEmi
  const elecEmission = user?.buissnessID?.totalEmissionByCategory?.elecEmission
  const empEmission = user?.buissnessID?.totalEmissionByCategory?.empEmission
  const officeEmission = user?.buissnessID?.totalEmissionByCategory?.officeEmission
  const trafficOnWebsiteEmission = user?.buissnessID?.totalEmissionByCategory?.trafficOnWebsiteEmi
  const laptopEmission = user?.buissnessID?.totalEmissionByCategory?.laptopEmission
  const vehicleEmission = user?.buissnessID?.totalEmissionByCategory?.vehicleEmission
  const dataStoreEmi = user?.buissnessID?.totalEmissionByCategory?.dataStoreEmi

  const scope1 = isNaN(Number(vehicleEmission)) ? 0 : Number(vehicleEmission)
  const scope2 = isNaN(Number(elecEmission) + Number(officeEmission)) ? 0 : (Number(elecEmission) + Number(officeEmission))
  const scope3 = isNaN(Number(empEmission) + Number(trafficOnWebsiteEmission) + Number(laptopEmission) + Number(dataStoreEmi) + Number(buisnessTripEmi)) ? 0 : (Number(empEmission) + Number(trafficOnWebsiteEmission) + Number(laptopEmission) + Number(dataStoreEmi) + Number(buisnessTripEmi))


  const setPicture = (files: any) => {
    setStep2Data({
      ...step2Data,
      picture: {
        ...step2Data.picture,
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step2Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step2Data[key as keyof typeof step2Data].type === 'file') {
          const file = step2Data[key as keyof typeof step2Data].value[0]
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
              question: step2Data[key as keyof typeof step2Data].label,
              url: url,
              type: step2Data[key as keyof typeof step2Data].type,
            }
          }

        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step2Data[key as keyof typeof step2Data].label,
              value: step2Data[key as keyof typeof step2Data].value,
              type: step2Data[key as keyof typeof step2Data].type,
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


        let step2 = ESGQuestions[selectedGlobalStandards?.short as keyof typeof ESGQuestions]?.['environmental']
        // setStep2Data(step2)
        if (enhancedStandard.length > 0 && enhancedStandard[0].value !== 'None') {
          enhancedStandard.forEach((item) => {
            step2 = { ...step2, ...ENHANCED[item.file as keyof typeof ENHANCED]?.environmental }
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
                ...stepData[stepDataKeys[i] as keyof typeof step2Data],
                url: key.url,
              }
            }
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step2Data],
                value: key.value
              }
            }
          }
        }
        setStep2Data(stepData)
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
        <UploadInput
          urls={step2Data.picture.url ? [step2Data.picture.url] : []}
          spaced={true}
          title='Upload Your Picture'
          files={step2Data.picture.value}
          setFiles={setPicture}
        />
        <div className='mt-[40px]'>
          <Label checked={true}>
            {step2Data.organizationScope.label}
          </Label>
          {/* <Input
            disabled={true}
            checkBox={false}
            transparent={true}
            placeholder='Scope 1'
            isAutoFill={false}
            isArea={false}
            spaced={true}
            label='Scope 1'
            name={'organizationScope'}
            value={scope1 ? `${scope1}` : ''}
            setValue={(e: any) => setStep2Data({ ...step2Data, organizationScope: { ...step2Data.organizationScope, value: e.target.value } })}
            required={step2Data.organizationScope.required}
            type={step2Data.organizationScope.type} />
          <Input
            disabled={true}
            checkBox={false}
            transparent={true}
            placeholder='Scope 2'
            label='Scope 2'
            isAutoFill={false}
            isArea={false}
            spaced={true}
            name={'organizationScope'}
            value={scope2 ? `${scope2}` : ''}
            setValue={(e: any) => setStep2Data({ ...step2Data, organizationScope: { ...step2Data.organizationScope, value2: e.target.value } })}
            required={step2Data.organizationScope.required}
            type={step2Data.organizationScope.type} />
          <Input
            disabled={true}
            checkBox={false}
            transparent={true}
            placeholder='Scope 3'
            label='Scope 3'
            isAutoFill={false}
            isArea={false}
            spaced={true}
            name={'organizationScope'}
            value={scope3 ? `${scope3}` : ''}
            setValue={(e: any) => setStep2Data({ ...step2Data, organizationScope: { ...step2Data.organizationScope, value3: e.target.value } })}
            required={step2Data.organizationScope.required}
            type={step2Data.organizationScope.type} /> */}
          <div className='flex my-[1rem] gap-[1rem]'>
            <Radio
              checked={true}
              label={`Scope 1 : ${scope1} C02e`}
              name='scope'
              onChange={() => { }}
              id='scope1'
              noRadio={true}
            />
            <Radio
              checked={true}
              label={`Scope 2 : ${scope2} C02e`}
              name='scope'
              onChange={() => { }}
              id='scope2'
              noRadio={true}
            />
            <Radio
              checked={true}
              label={`Scope 3 : ${scope3} C02e`}
              name='scope'
              onChange={() => { }}
              id='scope3'
              noRadio={true}
            />
          </div>
          <div className='flex items-center gap-[1rem]'>
            <PriButton type='button' onClick={() => {
              window.open(`https://calculator.zerocarbon.one/?token=${localStorage.getItem('token')}&ref=alpha`)
            }} className='mt-[20px]'>
              Calculate Now
            </PriButton>
            <PriButton disabled={userLoading} type='button' onClick={() => {
              setUser()
            }} className='mt-[20px]'>
              {
                userLoading ? 'Fetching...' : 'Refresh Data'
              }
            </PriButton>
          </div>
          <div className='w-full  h-[300px] my-[40px]'>
            <div className='relative h-[300px] w-[300px]'>
              <Doughnut
                className='absolute z-[1] top-0 left-0 w-full h-full'
                data={{
                  labels: ['Scope 1', 'Scope 1', 'Scope 3'],
                  datasets: [
                    {
                      data: [scope1 || 33.33, scope2 || 33.33, scope3 || 33.33],
                      backgroundColor: ['#f94144', '#f8961d', '#f3722c'],
                      borderColor: ['#f94144', '#f8961d', '#f3722c'],
                      borderWidth: 1
                    }
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: 'black',
                        usePointStyle: true,
                      },
                    }
                  }
                }}
              />
              <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <p className='text-[16px] mt-[30px]'>{
                  'Scope Data'
                }</p>
              </div>
            </div>
          </div>
          <div className='w-full flex-col mt-[2rem] mb-[2rem] justify-start h-[400px] flex items-center'>
            <Bar
              data={{
                labels: ['No. Of Employees', 'Area of Office', 'Elec. Consumtion', 'Digial Footprint', 'Buisness Trips', 'Laptop', 'Vehicle', 'Data Store'],
                datasets: [
                  {
                    label: 'Emission',
                    data: [
                      empEmission || 0,
                      officeEmission || 0,
                      elecEmission || 0,
                      trafficOnWebsiteEmission || 0,
                      buisnessTripEmi || 0,
                      laptopEmission || 0,
                      vehicleEmission || 0,
                      dataStoreEmi || 0
                    ],
                    backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 159, 64, 01)',
                      'rgba(255, 205, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(201, 203, 207, 1)',
                      'rgba(200, 112, 289, 1)',
                    ],
                    barThickness: 40,
                    animations: {
                      y: {
                        easing: 'easeInBounce'
                      }
                    },
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(255, 205, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(201, 203, 207, 1)',
                      'rgba(200, 112, 289, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}

              height={400}
              width={600}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className='w-full  h-[500px] my-[40px]'>
            <Label checked={false}>
              GHS Emissions(Co2e) Last FY VS current FY
            </Label>
            {/* <Input transparent={true} checkBox={false} spaced={true} label='GHS Emissions(Co2e) Last FY VS current FY' name='GHS Emissions(Co2e) Last FY VS current FY' value={lastYear} setValue={(e) => setLastYear(Number(e.target.value))} required={false} type='number' /> */}
            <div className='flex gap-[1rem] items-center'>
              <Input
                checkBox={false}
                transparent={true}

                label='Last FY (Co2e)'
                name='lastFY'
                value={lastYear ? `${lastYear}` : ''}
                setValue={(e: any) => setLastYear(Number(e.target.value))}
                required={false}
                type='number' />
              <Input
                disabled={true}
                checkBox={false}
                transparent={true}
                label='Current FY (Co2e)'
                name='currentFY'
                value={scope1 + scope2 + scope3 ? `${scope1 + scope2 + scope3}` : ''}
                setValue={() => { }}
                required={false}
                type='number' />
            </div>
            <div className='relative mt-[3vh] h-[300px] w-[300px]'>
              <Doughnut
                className='absolute z-[1] top-0 left-0 w-full h-full'
                data={{
                  labels: ['Last FY', 'Curr FY'],
                  datasets: [
                    {
                      data: [isNaN(lastYear) ? 0 : lastYear, (scope1 + scope2 + scope3) || 1],
                      backgroundColor: ['#00B8D9', '#FFA800'],
                      borderColor: ['#00B8D9', '#FFA800'],
                      borderWidth: 1
                    }
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: 'black',
                        usePointStyle: true,
                      },
                    }
                  }
                }}
              />
              <div className='absolute top-0 left-0 flex items-center justify-center w-[300px] h-[300px]'>
                <p className='text-[16px] mt-[30px]'>{
                  !(scope1 + scope2 + scope3) ? 'No Data' : 'Scope Data'
                }</p>
              </div>
            </div>
          </div>
        </div>
        {
          Object.keys(step2Data).slice(2).map((key, index) => {
            return (
              <Input
                transparent={true}
                checkBox={true}
                key={index}
                isAutoFill={step2Data[key as keyof typeof step2Data].isAutoFill}
                isArea={step2Data[key as keyof typeof step2Data].isArea}
                spaced={true}
                label={step2Data[key as keyof typeof step2Data].label}
                name={key}
                value={step2Data[key as keyof typeof step2Data].value as string}
                setValue={(e: any) => setStep2Data({ ...step2Data, [key]: { ...step2Data[key as keyof typeof step2Data], value: e.target.value } })}
                required={step2Data[key as keyof typeof step2Data].required}
                type={step2Data[key as keyof typeof step2Data].type} />
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

export default Step2