"use client";

import React from "react";

type FileInputProps = CommonProps & {
  setFile: (e: React.ChangeEvent<HTMLInputElement> | null) => void;
  accept?: string;
};

const FileInput = (props: FileInputProps) => {
  const [file, setFile] = React.useState<File | null>(null);
  const ref = React.useRef<HTMLInputElement>(null);
  const mode = props.mode || "light";

  return (
    <div
      className={`flex flex-col ${props.spaced && "mt-[40px]"} ${
        props.className
      }`}
    >
      <div className="flex w-full gap-[1rem] mb-[20px] items-center">
        {props.label && (
          <p
            className={`text-[20px]  ${
              mode === "light" ? "text-grey" : "text-[#F9F9F9]"
            }`}
          >
            {props.label} {props.required && " *"}
          </p>
        )}
        {file && (
          <div className="relative">
            <div
              onClick={() => {
                setFile(null);
                props.setFile(null);
              }}
              className="absolute text-[8px] border border-black cursor-pointer top-[-5px] right-[-5px] w-[14px] h-[14px] flex justify-center items-center bg-[#F9F9F9] rounded-full"
            >
              X
            </div>
            <img
              src={URL.createObjectURL(file)}
              alt="file"
              className="w-[30px] h-[30px] object-cover"
            />
          </div>
        )}
      </div>
      <input
        type={"text"}
        name={props.name}
        onClick={() => {
          ref.current?.click();
        }}
        placeholder={props.placeholder + (props.required ? "  *" : "")}
        value={file?.name || "Choose your file"}
        readOnly={true}
        accept="image/*"
        required={props.required}
        disabled={props.disabled}
        autoComplete="new-password"
        className={`w-full p-[1rem] h-[48px] border-[1px] ${
          mode === "light"
            ? "bg-white  border-[rgba(0,0,0,0.5)]"
            : "bg-[#121212] text-white  border-[#7C7C7C] placeholder:text-[#7C7C7C]"
        } rounded-[5px] outline-none ${props.error ? "border-red-500" : ""}`}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
      />
      <input
        ref={ref}
        type="file"
        onChange={(e) => {
          props.setFile(e);
          setFile(e.target.files?.[0] || null);
        }}
        className="hidden"
      />

      {props.error && <p className="text-xs text-red-500">{props.error}</p>}
    </div>
  );
};

export default FileInput;
