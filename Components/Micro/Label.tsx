import cn from "classnames";

import React from "react";

const Label = ({
  children,
  checked,
  noCheckbox,
  spaced,
  head,
}: {
  children: React.ReactNode;
  checked?: boolean;
  noCheckbox?: boolean;
  spaced?: boolean;
  head?: boolean;
}) => {
  return (
    <div
      className={cn("flex w-full items-center gap-[1rem] mb-[20px]", {
        "mt-[40px]": spaced,
        "text-[20px] font-bold": head,
      })}
    >
      {noCheckbox ? null : (
        <input
          type="checkbox"
          checked={true}
          className={`w-[20px] h-[20px] ${checked && "accent-blue-500"}`}
          onChange={() => {}}
        />
      )}

      <p className="text-[20px] w-full">{children}</p>
    </div>
  );
};

export default Label;
