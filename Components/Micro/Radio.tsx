import React from 'react';

interface RadioProps {
  label: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: () => void;
}

const Radio: React.FC<RadioProps> = ({ label, name, id, checked, onChange }) => {
  return (
    <div className={`${checked ? 'bg-[#dfeaff]' : 'bg-[#ececec]'}
                    flex items-center p-4 py-2 border border-blue-500 rounded-md`}>
      <input
        type="radio"
        name={name}
        id={id}
        className="accent-blue-500"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="ml-[10px] text-[18px]">
        {label}
      </label>
    </div>
  );
}

export default Radio;
