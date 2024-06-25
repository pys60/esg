'use client'

import { useChatHistoryStore } from '@/utils/Zustand'
import React, { useState } from 'react'


type InputProps = CommonProps & {
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: string,
  isArea?: false
}

type TextAreaProps = CommonProps & {
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  isArea: true,
  rows?: number
}

type Props = InputProps | TextAreaProps

const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false)
  const { setSelectedQuestion } = useChatHistoryStore()
  const mode = props.mode || 'light'
  const [disabled, setDisabled] = useState(true)

  const onFocusHandler = () => {
    setIsFocused(true);
    setShowButton(true); // Show button on focus
  };

  const onBlurHandler = () => {
    setIsFocused(false);
    setTimeout(() => setShowButton(false), 300); // Hide button after a delay
  };


  // const handleAiClick = async (question: EsgQuestion) => {
  //   if (!step1Data.companyName.value || !step1Data.companyBrief.value) {
  //     toast.error('Please fill in company name and info to use AI')
  //     return
  //   }
  //   try {
  //     const data: any = await apiClient.post('calculate/ans', {
  //       body: JSON.stringify({
  //         question: question.q,
  //         hint: `My company is ${step1Data.companyName.value} and we do ${step1Data.companyBrief.value}, ${question.a}`,
  //       })
  //     }).json()

  //     return data.content

  //   }
  //   catch (err) {
  //     toast.error('AI is not working, please try again later')
  //   } finally {

  //   }

  // }

  const handleAutoFill = async () => {

    try {
      setLoading(true)
      setSelectedQuestion(`${props.label}`)
      // const data = await handleAiClick({
      //   q: props.label as string,
      //   a: props.value as string,
      //   type: 'text'
      // })
      // props.setValue({ target: { value: data } } as any)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false)
      setShowButton(false);
    }
  }

  return (
    <div className={`flex relative flex-col ${props.spaced && 'mt-[40px]'} ${props.className}`}>
      {
        props.img && <img src={props.img} alt={props.label} className='w-full object-cover h-auto mb-[20px]' />
      }
      <div className='flex items-start justify-between w-full'>

        <div className='flex items-center w-full'>
          {
            (props.label && !props.diffLabel && props.checkBox) && <input type="checkbox" checked={disabled} name={props.name} id={props.name} className={`w-[20px] h-[20px] accent-blue-500  mr-[1rem] mb-[20px]`} onChange={(e) => {
              if (!e.target.checked) {
                props.setValue({ target: { value: '' } } as any)
              }
              setDisabled(e.target.checked)
            }} />
          }
          {(props.label && !props.diffLabel) && <label id={props.name} className={`text-[20px] ${props.checkBox && 'w-[90%]'} mb-[20px] ${mode === 'light' ? 'text-grey' : 'text-[#F9F9F9]'
            }`}>{props.label} {props.required && ' *'}</label>}

          {(props.label && props.diffLabel) && <label id={props.name} className={`text-[16px] ${props.checkBox && 'w-[90%]'} mt-[12px] mb-[8px] ${mode === 'light' ? 'text-grey' : 'text-[#F9F9F9]'
            }`}>{props.label} {props.required && ' *'}</label>}
        </div>
        {props.endIcon && <div className=''>{props.endIcon}</div>}
        {loading && <div className='animate-spin'>
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/loading-sign.png" alt="loading-sign" />
        </div>}
      </div>
      <div className='relative w-full'>
        {
          props.isAutoFill && (showButton || isFocused) && <button disabled={loading} onClick={handleAutoFill} className='absolute z-[1]  bottom-[-10vh] right-[0]'>
            <img src='/Images/SVG/AI.svg' alt='AI' className='w-[10vw] h-[10vh]' />
          </button>
        }
        {
          props.isArea ? (
            <textarea
              onFocusCapture={onFocusHandler}
              onBlurCapture={onBlurHandler}
              name={props.name}
              placeholder={(props.placeholder || 'Type Here') + (props.required ? '  *' : '')}
              value={props.value}
              onChange={props.setValue as any}
              required={props.required}
              disabled={props.disabled || loading || !disabled}
              autoComplete='new-password'
              className={`w-full disabled:opacity-50 disabled:cursor-not-allowed p-[1rem] ${mode === 'light' ? props.transparent ? 'border-[rgba(0,0,0,0.5)] bg-transparent' : 'bg-white  border-[rgba(0,0,0,0.5)]' : `${props.transparent ? 'bg-transparent' : 'bg-[#121212]'} text-white  border-[#7C7C7C] placeholder:text-[#7C7C7C]`} rounded-[5px] outline-none border-[1px] ${props.error ? 'border-red-500' : ''}`}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              onKeyDown={props.onKeyDown}
              onKeyUp={props.onKeyUp}
              rows={props.rows || 10}
              style={{ height: '180px' }}
              readOnly={props.readOnly}
            />
          ) : (
            <input
              onFocusCapture={onFocusHandler}
              onBlurCapture={onBlurHandler}
              type={props.type || 'text'}
              name={props.name}
              placeholder={(props.placeholder || 'Type Here') + (props.required ? '  *' : '')}
              value={props.value}
              onChange={(e) => {
                if (props.type === 'number') {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')
                }
                props.setValue(e) as any
              }}
              required={props.required}
              disabled={props.disabled || loading || !disabled}
              autoComplete='new-password'
              readOnly={props.readOnly}
              className={`w-full disabled:opacity-50 disabled:cursor-not-allowed ${props.endIcon ? 'pr-[48px]' : 'pr-[1rem]'}
              p-[1rem] h-[48px] border-[1px] ${mode === 'light' ? props.transparent ? 'border-[rgba(0,0,0,0.5)] bg-transparent' : 'bg-white  border-[rgba(0,0,0,0.5)]' : `${props.transparent ? 'bg-transparent' : 'bg-[#121212]'} text-white border-[#7C7C7C] placeholder:text-[#7C7C7C]`
                } rounded-[5px] outline-none ${props.error ? 'border-red-500' : ''}`}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              onKeyDown={props.onKeyDown}
              onKeyUp={props.onKeyUp}
            />
          )
        }
      </div>

      {props.error && <p className='text-xs text-red-500'>{props.error}</p>}

    </div>
  )
}

export default Input
