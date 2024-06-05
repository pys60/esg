'use client'

import Input from '@/Components/Micro/Input'
import Radio from '@/Components/Micro/Radio'
import UploadInput from '@/Components/Micro/UploadInput'
import { useEsgReportDataStore, useGlobalStandardsStore, useUserStore } from '@/utils/Zustand'
import { apiClient, apiClientFormDataWithAuth } from '@/utils/apiClient'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import toast from 'react-hot-toast'
import StepsContainer from './StepsContainer'

import Label from '@/Components/Micro/Label'
import {
  ArcElement,
  BarElement,
  CategoryScale, Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import ESGBottomBar from '../ESGBottomBar'

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(Title);
Chart.register(Tooltip);
Chart.register(Legend);
Chart.register(ArcElement, Tooltip, Legend);

type Props = {
  title: {
    title: string,
    value: string
  },
  nextstep: string,
  prevstep: string
}

const Step1 = ({ title, nextstep }: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setUser } = useUserStore()
  const { step1Data, setStep1Data } = useEsgReportDataStore()
  const { globalStandards } = useGlobalStandardsStore()
  const setPicture = (files: any) => {
    setStep1Data({
      ...step1Data,
      picture: {
        ...step1Data.picture,
        value: files
      }
    })
  }

  const selectedGlobalStandards = globalStandards.filter((standard) => standard.selected)[0]

  const setCustomeImages = (files: any) => {
    setStep1Data({
      ...step1Data,
      customizedImages: {
        ...step1Data.customizedImages,
        value: files
      }
    })
  }

  const handleSave = async (type?: string) => {
    let stepData = {}
    const stepDataKeys = Object.keys(step1Data)
    try {
      setLoading(true)
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i]
        if (step1Data[key as keyof typeof step1Data].type === 'file') {

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
    <StepsContainer title={`${selectedGlobalStandards.name} (${selectedGlobalStandards.short})`}>
      <form className='w-full h-full'>
        <UploadInput
          urls={step1Data.picture.url !== '' ? [step1Data.picture.url] : undefined}
          spaced={true}
          title='Upload Your Picture'
          files={step1Data.picture.value}
          setFiles={setPicture}
        />
        <UploadInput
          urls={step1Data.customizedImages.url !== '' ? [step1Data.customizedImages.url] : undefined}
          spaced={true}
          title={step1Data.customizedImages.label}
          files={step1Data.customizedImages.value}
          setFiles={setCustomeImages}
        />
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
          type={step1Data.companyBrief.type} />

        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.companyNumber.isAutoFill}
          isArea={step1Data.companyNumber.isArea}
          spaced={true}
          label={step1Data.companyNumber.label}
          name={'companyNumber'}
          value={step1Data.companyNumber.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, companyNumber: { ...step1Data.companyNumber, value: e.target.value } })}
          type={step1Data.companyNumber.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.yoi.isAutoFill}
          isArea={step1Data.yoi.isArea}
          spaced={true}
          label={step1Data.yoi.label}
          name={'yoi'}
          value={step1Data.yoi.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, yoi: { ...step1Data.yoi, value: e.target.value } })}
          type={step1Data.yoi.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.registeredAddress.isAutoFill}
          isArea={step1Data.registeredAddress.isArea}
          spaced={true}
          label={step1Data.registeredAddress.label}
          name={'registeredAddress'}
          value={step1Data.registeredAddress.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, registeredAddress: { ...step1Data.registeredAddress, value: e.target.value } })}
          type={step1Data.registeredAddress.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.corporateAddress.isAutoFill}
          isArea={step1Data.corporateAddress.isArea}
          spaced={true}
          label={step1Data.corporateAddress.label}
          name={'corporateAddress'}
          value={step1Data.corporateAddress.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, corporateAddress: { ...step1Data.corporateAddress, value: e.target.value } })}
          type={step1Data.corporateAddress.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.email.isAutoFill}
          isArea={step1Data.email.isArea}
          spaced={true}
          label={step1Data.email.label}
          name={'companyEmail'}
          value={step1Data.email.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, email: { ...step1Data.email, value: e.target.value } })}
          type={step1Data.email.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.telephone.isAutoFill}
          isArea={step1Data.telephone.isArea}
          spaced={true}
          label={step1Data.telephone.label}
          name={'companyTelephone'}
          value={step1Data.telephone.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, telephone: { ...step1Data.telephone, value: e.target.value } })}
          type={step1Data.telephone.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.website.isAutoFill}
          isArea={step1Data.website.isArea}
          spaced={true}
          label={step1Data.website.label}
          name={'companyWebsite'}
          value={step1Data.website.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, website: { ...step1Data.website, value: e.target.value } })}
          type={step1Data.website.type} />
        <UploadInput
          urls={step1Data.logo.url !== '' ? [step1Data.logo.url] : undefined}
          spaced={true}
          title='Logo'
          files={step1Data.logo.value}
          setFiles={(files: any) => setStep1Data({ ...step1Data, logo: { ...step1Data.logo, value: files } })}
        />
        <UploadInput
          urls={step1Data.managementPicture.url !== '' ? [step1Data.managementPicture.url] : undefined}
          spaced={true}
          title='Upload Management Picture'
          files={step1Data.managementPicture.value}
          setFiles={(files: any) => setStep1Data({ ...step1Data, managementPicture: { ...step1Data.managementPicture, value: files } })}
        />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.menagementMessage.isAutoFill}
          isArea={step1Data.menagementMessage.isArea}
          spaced={true}
          label={step1Data.menagementMessage.label}
          name={'menagementMessage'}
          value={step1Data.menagementMessage.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, menagementMessage: { ...step1Data.menagementMessage, value: e.target.value } })}
          type={step1Data.menagementMessage.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.geographicLocation.isAutoFill}
          isArea={step1Data.geographicLocation.isArea}
          spaced={true}
          label={step1Data.geographicLocation.label}
          name={'geographicLocation'}
          value={step1Data.geographicLocation.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, geographicLocation: { ...step1Data.geographicLocation, value: e.target.value } })}
          type={step1Data.geographicLocation.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.reportingYear.isAutoFill}
          isArea={step1Data.reportingYear.isArea}
          spaced={true}
          label={step1Data.reportingYear.label}
          name={'reportingYear'}
          value={step1Data.reportingYear.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, reportingYear: { ...step1Data.reportingYear, value: e.target.value } })}
          type={step1Data.reportingYear.type} />

        <div className='w-full p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md mt-[40px]'>
          <Label checked={step1Data.dedicatedPerson.value}>{step1Data.dedicatedPerson.label}</Label>
          <div className='flex items-center gap-[1rem]'>
            <Radio checked={step1Data.dedicatedPerson.value} name='dedicatedPerson' label='Yes' id='yes' onChange={() => setStep1Data({ ...step1Data, dedicatedPerson: { ...step1Data.dedicatedPerson, value: true } })} />
            <Radio checked={!step1Data.dedicatedPerson.value} name='dedicatedPerson' label='No' id='no' onChange={() => setStep1Data({ ...step1Data, dedicatedPerson: { ...step1Data.dedicatedPerson, value: false } })} />
          </div>

          {
            step1Data.dedicatedPerson.value && (
              <>
                <p className='text-[20px] mb-[20px] mt-[40px]'>
                  {step1Data.dedicatedPerson.label2}
                </p>
                <div className='w-full flex gap-[2vw]'>
                  <Input
                    transparent={true}
                    isAutoFill={step1Data.dedicatedPersonName.isAutoFill}
                    isArea={step1Data.dedicatedPersonName.isArea}
                    label={step1Data.dedicatedPersonName.label}
                    name={'dedicatedPersonName'}
                    value={step1Data.dedicatedPersonName.value}
                    setValue={(e: any) => setStep1Data({ ...step1Data, dedicatedPersonName: { ...step1Data.dedicatedPersonName, value: e.target.value } })}
                    type={step1Data.dedicatedPersonName.type} />
                  <Input
                    transparent={true}
                    isAutoFill={step1Data.dedicatedPersonEmail.isAutoFill}
                    isArea={step1Data.dedicatedPersonEmail.isArea}
                    label={step1Data.dedicatedPersonEmail.label}
                    name={'dedicatedPersonEmail'}
                    value={step1Data.dedicatedPersonEmail.value}
                    setValue={(e: any) => setStep1Data({ ...step1Data, dedicatedPersonEmail: { ...step1Data.dedicatedPersonEmail, value: e.target.value } })}
                    type={step1Data.dedicatedPersonEmail.type} />
                </div>
              </>
            )
          }

        </div>

        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.companiesOperations.isAutoFill}
          isArea={step1Data.companiesOperations.isArea}
          spaced={true}
          label={step1Data.companiesOperations.label}
          name={'companiesOperations'}
          value={step1Data.companiesOperations.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, companiesOperations: { ...step1Data.companiesOperations, value: e.target.value } })}
          type={step1Data.companiesOperations.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.briefOnBusinessOperations.isAutoFill}
          isArea={step1Data.briefOnBusinessOperations.isArea}
          spaced={true}
          label={step1Data.briefOnBusinessOperations.label}
          name={'briefOnBusinessOperations'}
          value={step1Data.briefOnBusinessOperations.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, briefOnBusinessOperations: { ...step1Data.briefOnBusinessOperations, value: e.target.value } })}
          type={step1Data.briefOnBusinessOperations.type} />
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.supplyCountries.isAutoFill}
          isArea={step1Data.supplyCountries.isArea}
          spaced={true}
          label={step1Data.supplyCountries.label}
          name={'supplyCountries'}
          value={step1Data.supplyCountries.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, supplyCountries: { ...step1Data.supplyCountries, value: e.target.value } })}
          type={step1Data.supplyCountries.type} />
        <div className='w-full mt-[40px] p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
          <Label checked={Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female) > 0}>{step1Data.numOfEmployees.label}</Label>
          <div className='flex w-full mt-[30px] items-center gap-[2vw]'>
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={"Total"}
              name={'numOfEmployeesTotal'}
              value={Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female)}
              setValue={() => { }}
              disabled={true}
              type={step1Data.numOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={"MALE"}
              name={'numOfEmployeesMale'}
              value={step1Data.numOfEmployees.value.male}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  numOfEmployees: {
                    ...step1Data.numOfEmployees,
                    value: {
                      ...step1Data.numOfEmployees.value,
                      male: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.numOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={'FEMALE'}
              name={'numOfEmployeesFemale'}
              value={step1Data.numOfEmployees.value.female}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  numOfEmployees: {
                    ...step1Data.numOfEmployees,
                    value: {
                      ...step1Data.numOfEmployees.value,
                      female: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.numOfEmployees.type}
            />
          </div>
          <div className='flex w-full mt-[40px] items-center gap-[2vw]'>
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={"Total Percentage"}
              name={'numOfEmployeesTotalPercentage'}
              value={
                (Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female)) > 0 ? 100 : 0
              }
              setValue={() => { }}
              disabled={true}
              type={step1Data.numOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={"MALE %"}
              name={'numOfEmployeesMalePercentage'}
              value={
                ((Number(step1Data.numOfEmployees.value.male) / (Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female))) * 100).toFixed(2)
              }
              setValue={() => { }}
              disabled={true}
              type={step1Data.numOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfEmployees.isAutoFill}
              isArea={step1Data.numOfEmployees.isArea}
              label={'FEMALE %'}
              name={'numOfEmployeesFemalePercentage'}
              value={
                ((Number(step1Data.numOfEmployees.value.female) / (Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female))) * 100).toFixed(2)
              }
              setValue={() => { }}
              type={step1Data.numOfEmployees.type}
              disabled={true}
            />
          </div>
          <div className='w-full  h-[300px] mt-[40px]'>
            <div className='relative h-[300px] w-fit'>
              <Doughnut
                data={{
                  labels: ['Male', 'Female'],
                  datasets: [
                    {
                      data: [step1Data.numOfEmployees.value.male || 50, step1Data.numOfEmployees.value.female || 50],
                      backgroundColor: ['#00B8D9', '#FFA800'],
                      borderColor: ['#00B8D9', '#FFA800'],
                      borderWidth: 1
                    }
                  ]
                }}
                options={{
                  rotation: -90,
                  circumference: 180,
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
              <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <p className='text-[16px] mt-[100px]'>{
                  'Total: ' + (Number(step1Data.numOfEmployees.value.male) + Number(step1Data.numOfEmployees.value.female))
                }</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-[40px] p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
          <Label checked={Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female) > 0} >{step1Data.diffAbledNumOfEmployees.label}</Label>
          <div className='flex w-full mt-[30px] items-center gap-[2vw]'>
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={"Total"}
              name={'diffAbledNumOfEmployeesTotal'}
              value={Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female)}
              setValue={() => { }}
              disabled={true}
              type={step1Data.diffAbledNumOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={"MALE"}
              name={'diffAbledNumOfEmployeesMale'}
              value={step1Data.diffAbledNumOfEmployees.value.male}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  diffAbledNumOfEmployees: {
                    ...step1Data.diffAbledNumOfEmployees,
                    value: {
                      ...step1Data.diffAbledNumOfEmployees.value,
                      male: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.diffAbledNumOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={'FEMALE'}
              name={'diffAbledNumOfEmployeesFemale'}
              value={step1Data.diffAbledNumOfEmployees.value.female}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  diffAbledNumOfEmployees: {
                    ...step1Data.diffAbledNumOfEmployees,
                    value: {
                      ...step1Data.diffAbledNumOfEmployees.value,
                      female: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.diffAbledNumOfEmployees.type}
            />
          </div>
          <div className='flex w-full mt-[40px] items-center gap-[2vw]'>
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={"Total Percentage"}
              name={'diffAbledNumOfEmployeesTotalPercentage'}
              value={
                (Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female)) > 0 ? 100 : 0
              }
              setValue={() => { }}
              disabled={true}
              type={step1Data.diffAbledNumOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={"MALE %"}
              name={'diffAbledNumOfEmployeesMalePercentage'}
              value={
                ((Number(step1Data.diffAbledNumOfEmployees.value.male) / (Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female))) * 100).toFixed(2)
              }
              setValue={() => { }}
              disabled={true}
              type={step1Data.diffAbledNumOfEmployees.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.diffAbledNumOfEmployees.isAutoFill}
              isArea={step1Data.diffAbledNumOfEmployees.isArea}
              label={'FEMALE %'}
              name={'diffAbledNumOfEmployeesFemalePercentage'}
              value={
                ((Number(step1Data.diffAbledNumOfEmployees.value.female) / (Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female))) * 100).toFixed(2)
              }
              setValue={() => { }}
              type={step1Data.diffAbledNumOfEmployees.type}
              disabled={true}
            />
          </div>
          {/* DOUGHNUT CHART */}
          <div className='w-full  h-[300px] mt-[40px]'>
            <div className='relative h-[300px] w-fit'>
              <Doughnut
                data={{
                  labels: ['Male', 'Female'],
                  datasets: [
                    {
                      data: [step1Data.diffAbledNumOfEmployees.value.male || 50, step1Data.diffAbledNumOfEmployees.value.female || 50],
                      backgroundColor: ['#00B8D9', '#FFA800'],
                      borderColor: ['#00B8D9', '#FFA800'],
                      borderWidth: 1
                    }
                  ]
                }}
                options={{
                  rotation: -90,
                  circumference: 180,
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
              <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <p className='text-[16px] mt-[100px]'>{
                  'Total: ' + (Number(step1Data.diffAbledNumOfEmployees.value.male) + Number(step1Data.diffAbledNumOfEmployees.value.female))
                }</p>
              </div>
            </div>
          </div>
        </div>

        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.participationOfWomen.isAutoFill}
          isArea={step1Data.participationOfWomen.isArea}
          spaced={true}
          label={step1Data.participationOfWomen.label}
          name={'participationOfWomen'}
          value={step1Data.participationOfWomen.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, participationOfWomen: { ...step1Data.participationOfWomen, value: e.target.value } })}
          type={step1Data.participationOfWomen.type} />
        <div className='w-full mt-[40px] p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md'>
          <Label checked={Number(step1Data.numOfWorkers.value.fullTime) + Number(step1Data.numOfWorkers.value.partTime) + Number(step1Data.numOfWorkers.value.contract) > 0} >{step1Data.numOfWorkers.label}</Label>
          <div className='flex w-full mt-[30px] items-center gap-[2vw]'>
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfWorkers.isAutoFill}
              isArea={step1Data.numOfWorkers.isArea}
              label={"Total"}
              name={'numOfWorkersTotal'}
              value={Number(step1Data.numOfWorkers.value.fullTime) + Number(step1Data.numOfWorkers.value.partTime) + Number(step1Data.numOfWorkers.value.contract)}
              setValue={() => { }}
              disabled={true}
              type={step1Data.numOfWorkers.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfWorkers.isAutoFill}
              isArea={step1Data.numOfWorkers.isArea}
              label={"FULL TIME"}
              name={'numOfWorkersFullTime'}
              value={step1Data.numOfWorkers.value.fullTime}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  numOfWorkers: {
                    ...step1Data.numOfWorkers,
                    value: {
                      ...step1Data.numOfWorkers.value,
                      fullTime: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.numOfWorkers.type} />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfWorkers.isAutoFill}
              isArea={step1Data.numOfWorkers.isArea}
              label={'PART TIME'}
              name={'numOfWorkersPartTime'}
              value={step1Data.numOfWorkers.value.partTime}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  numOfWorkers: {
                    ...step1Data.numOfWorkers,
                    value: {
                      ...step1Data.numOfWorkers.value,
                      partTime: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.numOfWorkers.type}
            />
            <Input
              transparent={true}
              isAutoFill={step1Data.numOfWorkers.isAutoFill}
              isArea={step1Data.numOfWorkers.isArea}
              label={'CONTRACT'}
              name={'numOfWorkersContract'}
              value={step1Data.numOfWorkers.value.contract}
              setValue={(e: any) => {
                setStep1Data({
                  ...step1Data,
                  numOfWorkers: {
                    ...step1Data.numOfWorkers,
                    value: {
                      ...step1Data.numOfWorkers.value,
                      contract: e.target.value
                    }
                  }
                })
              }
              }
              type={step1Data.numOfWorkers.type}
            />
          </div>
          <div className='flex w-full mt-[40px] items-center gap-[2vw]'>
            {/* BAR CHART */}
            <div className='w-full'>
              <Bar
                data={{
                  labels: ['Total', 'FULL TIME', 'PART TIME', 'CONTRACT'],

                  datasets: [
                    {
                      label: '',
                      data: [Number(step1Data.numOfWorkers.value.fullTime) + Number(step1Data.numOfWorkers.value.partTime) + Number(step1Data.numOfWorkers.value.contract), step1Data.numOfWorkers.value.fullTime, step1Data.numOfWorkers.value.partTime, step1Data.numOfWorkers.value.contract],
                      backgroundColor: [
                        '#f3b344',
                        '#67e09c',
                        '#3e8df3',
                        '#49dd59',
                      ],
                      barThickness: 60,
                      animations: {
                        y: {
                          easing: 'easeInOutElastic'
                        }
                      },
                      borderColor: [
                        '#f3b344',
                        '#67e09c',
                        '#3e8df3',
                        '#49dd59',
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

                  plugins: {
                    legend: {
                      position: 'top' as const,
                    },
                    colors: {
                      enabled: true,
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
        <Input
          checkBox={true}
          transparent={true}
          isAutoFill={step1Data.contratorParticipation.isAutoFill}
          isArea={step1Data.contratorParticipation.isArea}
          spaced={true}
          label={step1Data.contratorParticipation.label}
          name={'contratorParticipation'}
          value={step1Data.contratorParticipation.value}
          setValue={(e: any) => setStep1Data({ ...step1Data, contratorParticipation: { ...step1Data.contratorParticipation, value: e.target.value } })}
          type={step1Data.contratorParticipation.type} />
        <div className='w-full mt-[40px]'>
          <Label checked={step1Data.bod.value}>
            {step1Data.bod.label}
          </Label>
          <div className='flex gap-[1rem] items-center'>
            <Radio checked={step1Data.bod.value} name='bod' label='Yes' id='yes' onChange={() => setStep1Data({ ...step1Data, bod: { ...step1Data.bod, value: true } })} />
            <Radio checked={!step1Data.bod.value} name='bod' label='No' id='no' onChange={() => setStep1Data({ ...step1Data, bod: { ...step1Data.bod, value: false } })} />
          </div>
          {
            step1Data.bod.value && (
              <>
                <p className='text-[20px] mb-[20px] mt-[40px]'>
                  {step1Data.bod.label2}
                </p>
                <div className='w-full flex gap-[2vw]'>
                  <Input
                    transparent={true}
                    isAutoFill={step1Data.maleBod.isAutoFill}
                    isArea={false}
                    label='Total'
                    name={'bodTotal'}
                    value={Number(step1Data.maleBod.value) + Number(step1Data.femaleBod.value)}
                    setValue={() => { }}
                    disabled={true}
                    type={'number'} />
                  <Input
                    transparent={true}
                    isAutoFill={step1Data.maleBod.isAutoFill}
                    isArea={step1Data.maleBod.isArea}
                    label={step1Data.maleBod.label}
                    name={'maleBod'}
                    value={step1Data.maleBod.value}
                    setValue={(e: any) => setStep1Data({ ...step1Data, maleBod: { ...step1Data.maleBod, value: e.target.value } })}
                    disabled={false}
                    type={step1Data.maleBod.type} />
                  <Input
                    transparent={true}
                    isAutoFill={step1Data.femaleBod.isAutoFill}
                    isArea={step1Data.femaleBod.isArea}
                    label={step1Data.femaleBod.label}
                    name={'femaleBod'}
                    value={step1Data.femaleBod.value}
                    setValue={(e: any) => setStep1Data({ ...step1Data, femaleBod: { ...step1Data.femaleBod, value: e.target.value } })}
                    disabled={false}
                    type={step1Data.femaleBod.type} />
                </div>
              </>
            )
          }

        </div>
        <div className='w-full mt-[40px]'>
          <Label checked={step1Data.publicTraded.value}>
            {step1Data.publicTraded.label}
          </Label>
          <div className='flex gap-[1rem] items-center'>
            <Radio checked={step1Data.publicTraded.value} name='publicTraded' label='Yes' id='yes' onChange={() => setStep1Data({ ...step1Data, publicTraded: { ...step1Data.publicTraded, value: true } })} />
            <Radio checked={!step1Data.publicTraded.value} name='publicTraded' label='No' id='no' onChange={() => setStep1Data({ ...step1Data, publicTraded: { ...step1Data.publicTraded, value: false } })} />
          </div>
          {
            step1Data.publicTraded.value && (
              <Input
                transparent={true}
                isAutoFill={step1Data.stockExchange.isAutoFill}
                isArea={step1Data.stockExchange.isArea}
                spaced={true}
                label={step1Data.stockExchange.label}
                name={'stockExchange'}
                value={step1Data.stockExchange.value}
                setValue={(e: any) => setStep1Data({ ...step1Data, stockExchange: { ...step1Data.stockExchange, value: e.target.value } })}
                type={step1Data.stockExchange.type} />
            )
          }
        </div>
        <div className='w-full my-[40px]'>
          <Label checked={step1Data.boardComittee.value}>
            {step1Data.boardComittee.label}
          </Label>
          <div className='flex gap-[1rem] items-center'>
            <Radio checked={step1Data.boardComittee.value} name='boardComittee' label='Yes' id='yes' onChange={() => setStep1Data({ ...step1Data, boardComittee: { ...step1Data.boardComittee, value: true } })} />
            <Radio checked={!step1Data.boardComittee.value} name='boardComittee' label='No' id='no' onChange={() => setStep1Data({ ...step1Data, boardComittee: { ...step1Data.boardComittee, value: false } })} />
          </div>
        </div>
      </form>
      <ESGBottomBar
        handleSave={handleSave}
        handleReset={handleReset}
        loading={loading}
        nextDisabled={false}
        router={router}
        prevDisabled={false}
        prevstep='/esg/add'
      />
    </StepsContainer>
  )
}

export default Step1