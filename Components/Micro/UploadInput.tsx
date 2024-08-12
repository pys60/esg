"use client";

import { useRef, useState } from "react";
import Label from "./Label";

interface UploadInputProps {
  files: Array<File>;
  setFiles: (files: Array<File>) => void;
  disabled?: boolean;
  title?: string;
  multi?: boolean;
  spaced?: boolean;
  urls?: Array<string>;
  // Add any other props you might need
}

const UploadInput: React.FC<UploadInputProps> = ({
  files,
  multi,
  spaced,
  setFiles,
  disabled,
  title,
  urls,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      if (!multi) return setFiles([files[0]]);
      setFiles(Array.from(files));
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFiles(Array.from(files));
    }
  };

  return (
    <div
      style={{
        marginTop: spaced ? "40px" : "0rem",
      }}
      className="flex flex-col w-full"
    >
      {title && <Label checked={files.length > 0}>{title}</Label>}
      <div
        className={`w-full flex items-center flex-col justify-center transition-all duration-300 h-[20vh] ${
          isDragOver ? "scale-105" : ""
        } border-dashed border-2 border-gray rounded-xl`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {files.length === 0 && (
          <>
            <p className="text-gray/50">
              Drag and Drop or
              <span
                onClick={() => {
                  ref.current?.click();
                }}
                className="text-[#386CD1] ml-[0.5rem] cursor-pointer"
              >
                Browse
              </span>
              <input
                id="file-upload"
                type="file"
                ref={ref}
                accept="image/*"
                style={{ display: "none" }}
                disabled={disabled}
                onChange={onChange}
                multiple={multi}
              />
            </p>
            <p className="text-gray/50">JPG, PNG, SVG Max Size: 100 MB</p>
          </>
        )}
        {files.length > 0 && (
          <div className="flex gap-[1rem] ">
            {files.map((file, index) => {
              return (
                <div key={index} className="relative">
                  <div
                    onClick={() => {
                      const newFiles = files.filter((_, i) => i !== index);
                      setFiles(newFiles);
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
              );
            })}
          </div>
        )}

        {urls && urls.length > 0 && files.length === 0 && (
          <div className="flex gap-[1rem] mt-[0.5rem]">
            {urls.map((url, index) => {
              return (
                <div key={index} className="relative">
                  <div className="absolute text-[8px] border border-black top-[-5px] right-[-5px] w-[14px] h-[14px] flex justify-center items-center bg-[#F9F9F9] rounded-full">
                    o
                  </div>
                  <img
                    src={url}
                    alt="file"
                    className="w-[30px] h-[30px] object-cover"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadInput;
