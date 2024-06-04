'use client'

import { useContriesStore } from '@/components/utils/Zustand/store';
import React from 'react';
import Dropdown from '../Dropdown';

type Country = {
  code: string;
  flag: string;
  name: {
    common: string;
  };
};

type Props = {
  label?: string;
  placeholder?: string;
  selectedValue?: string;
  setSelectedValue: (value: string) => void;
  required?: boolean;
  spaced?: boolean;
  noLabel?: boolean;
  className?: string;
};

const CountryDropdown: React.FC<Props> = ({
  label = 'Select Country',
  placeholder = 'Select Country',
  selectedValue = 'IN',
  setSelectedValue,
  required = false,
  spaced = false,
  noLabel = false,
  className = ''
}) => {
  const { countries } = useContriesStore();

  const options = countries.map((country: Country) => ({
    value: country.code,
    label: (
      <div className="flex w-full px-[1rem] items-center">
        <img src={country.flag} className="h-[20px] w-[30px] mr-[1rem]" alt={country.name.common} />
        <p>{country.name.common}</p>
      </div>
    ),
    filterValue: country.name.common
  }));

  return (
    <Dropdown
      label={
        !noLabel ? 'Select Country' : undefined
      }
      className={className}
      options={options}

      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      placeholder={placeholder}
      required={required}
      spaced={spaced}
    />
  );
};

export default CountryDropdown;
