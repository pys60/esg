import cn from "classnames";
import React from "react";

const SubHead = ({
  children,
  borderTop,
  secText,
}: {
  children: React.ReactNode;
  borderTop?: boolean;
  secText?: boolean;
  head?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full  mt-[40px] pb-[10px] border-b  text-[20px] font-bold ",
        {
          "border-t-2 border-t-[#386CD1] pt-[40px]": borderTop,
          "text-[#386CD1]": secText,
        }
      )}
    >
      {children}
    </div>
  );
};

export default SubHead;
