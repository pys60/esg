import React, { ButtonHTMLAttributes } from 'react';
import { Tooltip } from 'react-tooltip';

interface PriButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textClass?: string;
  textStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  tooltip?: string;
}

const PriButton: React.FC<PriButtonProps> = ({
  children,
  onClick,
  className = '',
  textClass = '',
  style = {},
  textStyle = {},
  tooltip,
  ...rest
}) => {
  const buttonStyle = {
    boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    ...style
  };

  return (
    <>
      {!tooltip && <button
        onClick={onClick}
        style={buttonStyle}
        className={`bg-pri text-[16px] disabled:opacity-50 disabled:hover:bg-pri disabled:hover:text-black hover:bg-[#386cd1] hover:text-white transition-all duration-300 rounded-md px-[2rem] py-[0.5rem] ${className}`}
        {...rest}
      >
        <p style={textStyle} className={` font-bold ${textClass}`}>
          {children}
        </p>
      </button>}
      {tooltip && <>
        <a
          data-tooltip-id={tooltip.toLocaleLowerCase().replace(/ /g, "-")}
          data-tooltip-content={tooltip}
          data-tooltip-place="top"
        >
          <button
            onClick={onClick}
            style={buttonStyle}
            className={`bg-pri text-[16px] disabled:opacity-50 disabled:hover:bg-pri disabled:hover:text-black hover:bg-[#386cd1] hover:text-white transition-all duration-300 rounded-md px-[2rem] py-[0.5rem] ${className}`}
            {...rest}
          >
            <p style={textStyle} className={` font-bold ${textClass}`}>
              {children}
            </p>
          </button>
        </a>
        <Tooltip id={tooltip.toLocaleLowerCase().replace(/ /g, "-")} />
      </>}

    </>
  );
};

export default PriButton;
