import cn from "classnames";
import { Label, Radio } from "zerocarbonweb";

const RadioInput = ({
  label,
  options,
  checked,
  setChecked,
  noSpace,
}: {
  label: string;
  options: string[];
  checked: string;
  setChecked: (value: string) => void;
  noSpace?: boolean;
}) => {
  return (
    <div
      className={cn({
        "mt-[40px]": !noSpace,
      })}
    >
      <Label checked>{label}</Label>
      <div className="flex gap-[1rem] mt-[20px]">
        {options.map((option) => (
          <Radio
            key={option}
            id={option}
            checked={checked === option}
            label={option}
            name={option}
            onChange={() => setChecked(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
