'use client'

import React, { useRef, useState } from 'react';

type Option = {
  value: string,
  label: string | React.ReactNode,
  filterValue?: string, // Add this field as optional
};


type Props = {
  options: Option[],
  selectedValue: string,
  setSelectedValue: (value: string) => void,
  placeholder?: string,
  label?: string,
  required?: boolean,
  disabled?: boolean,
  className?: string,
  error?: string,
  spaced?: boolean,
  dark?: boolean,
  labelGap?: string,
};


const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom');
  const selectedOption = props.options.find(option => option.value === props.selectedValue);
  let filteredOptions = props.options.filter(option => {
    const filterTerm = option.filterValue || option.value; // Use filterValue if available, otherwise default to value
    return filterTerm.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleOpen = () => {
    const updatePosition = () => {
      if (dropdownRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const spaceAbove = dropdownRect.top;
        const spaceBelow = viewportHeight - dropdownRect.bottom;

        // Determine whether there's more space above or below to display the dropdown
        setDropdownPosition(spaceAbove > spaceBelow ? 'top' : 'bottom');
      }
    };


    updatePosition();
    window.addEventListener('resize', updatePosition);


    setOpen(!open);

    return () => window.removeEventListener('resize', updatePosition);
  }



  return (
    <div id='dropdown' ref={dropdownRef} className={`relative select-none flex flex-col ${props.spaced && 'mt-[40px]'} ${props.className}`}>
      {
        props.label && <p className={`text-[20px] ${props.labelGap || 'mb-[20px]'
          } ${props.dark ? 'text-pri' : 'text-grey'
          }`}>{props.label}</p>
      }
      <div
        className={`w-full p-[1rem] h-[48px] border-[1px] ${props.dark ? 'border-white/50 text-white/50' : 'border-[rgba(0,0,0,0.5)] text-grey'} rounded-[5px] outline-none ${props.error ? 'border-red-500' : ''} cursor-pointer flex justify-between items-center`}
        onClick={() => {
          handleOpen()
        }}
      >
        <div>{selectedOption ? selectedOption.label : (props.placeholder || 'Please select an option')}</div>
        <div>&#9662;</div>
      </div>
      {open && !props.disabled && (
        <div className={`absolute ${dropdownPosition === 'bottom' ? props.label ? 'top-[5.5rem]' : 'top-[3rem]' : 'bottom-[4rem]'}  max-h-[40vh] overflow-y-scroll w-full mt-2 border-[1px] border-[rgba(0,0,0,0.5)] rounded-[5px] bg-white z-10`}>
          <input
            type="text"
            className={`w-full ${props.dark ? 'placeholder:text-pri' : 'placeholder:text-grey'
              } p-[1rem] border-b ${props.dark ? 'border-pri' : 'border-grey'} outline-none`}
            placeholder="Search..."
            onChange={e => {
              if (e.target.value === '') {
                setSearchTerm('')
                filteredOptions = props.options
              }
              setSearchTerm(e.target.value)
            }}
          />
          {filteredOptions.map(option =>
            <div
              key={option.value}
              className={`p-[1rem] hover:bg-[rgba(0,0,0,0.05)] cursor-pointer ${option.value === props.selectedValue && 'bg-[rgba(0,0,0,0.1)]'}`}
              onClick={() => { props.setSelectedValue(option.value); setOpen(false); setSearchTerm(''); }}
            >
              {option.label}
            </div>
          )}
          {
            filteredOptions.length === 0 && <div className='p-[1rem]'>No options found</div>
          }
        </div>
      )}
      {
        props.error && <p className='text-xs text-red-500'>{props.error}</p>
      }
    </div>
  );
};

export default Dropdown;