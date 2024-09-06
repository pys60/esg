"use client";

import Dropdown from "@/Components/Micro/Dropdown";
import Input from "@/Components/Micro/Input";
import PriButton from "@/Components/Micro/PriButton";
import { useEsgReportDataStore, useUserStore } from "@/utils/Zustand";
import { apiClient, apiClientFormDataWithAuth } from "@/utils/apiClient";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { GrPowerReset } from "react-icons/gr";
import { IoMdSave } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

// interface Errors {
//   bankName: string;
//   accountNumber: string;
//   accountName: string;
//   swiftCode: string;
//   ifscCode: string;
// }

const INDUSTRIES = [
  "Agriculture",
  "Mining",
  "Fishing",
  "Fishing Forestry",
  "Oil and Gas Extraction",
  "Aqua Culture",
  "Logging",
  "Livestock Farming",
  "Crop Production",
  "Dairy Farming",
  "Automobile Manufacturing",
  "Chemical Production",
  "Textile Production",
  "Food and Beverage Processing",
  "Steel Production",
  "Electronics Manufacturing",
  "Construction",
  "Shipbuilding",
  "Machinery and Equipment Manufacturing",
  "Paper and Pulp Production",
  "Retail",
  "Banking and Financial Services",
  "Healthcare",
  "Education",
  "Hospitality and Tourism",
  "Information Technology and Software Services",
  "Transportation and Logistics",
  "Real Estate",
  "Entertainment and Media",
  "Telecommunications",
  "Information Technology",
  "Research and Development",
  "Data Analysis",
  "Financial Consulting",
  "Education and Training Services",
  "Media and Publishing",
  "Strategic Planning",
  "Market Research",
  "Legal Services",
  "Scientific Research",
  "Government Administration",
  "Non-Profit Management",
  "Corporate Executive Leadership",
  "Research Institutes Leadership",
  "Cultural and Artistic Leadership",
  "Higher Education Leadership",
  "Healthcare Administration",
  "Policy Making and Regulation",
  "Legal System Leadership (Judiciary)",
  "International Organizations",
];

const DetailForAIModal = (props: Props) => {
  const { setUser } = useUserStore();
  const { step1Data, setStep1Data } = useEsgReportDataStore();

  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    try {
      setLoading(true);
      const data: any = await apiClient
        .post("auth/resetesg", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .json();

      if (data.success) {
        toast.success(data.message);
        setUser();
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    let stepData = {};
    if (
      !step1Data.companyName.value ||
      !step1Data.companyBrief.value ||
      !step1Data.industry.value
    ) {
      toast(
        "Company Name and Company Brief are required, for using the ZeroCarbon AI.",
        {
          icon: "ℹ️",
        }
      );
    }

    const stepDataKeys = Object.keys(step1Data);
    try {
      setLoading(true);
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i];
        if (step1Data[key as keyof typeof step1Data].type === "file") {
          const file = step1Data[key as keyof typeof step1Data].value[0];
          if (!file) continue;
          const formData = new FormData();
          formData.append("banner", file);
          const res: any = await apiClientFormDataWithAuth
            .post("item/uploadBanner", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: formData,
            })
            .json();

          const url = res.file.location;

          stepData = {
            ...stepData,
            [key]: {
              question: step1Data[key as keyof typeof step1Data].label,
              url: url,
              type: step1Data[key as keyof typeof step1Data].type,
            },
          };
        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step1Data[key as keyof typeof step1Data].label,
              value: step1Data[key as keyof typeof step1Data].value,
              type: step1Data[key as keyof typeof step1Data].type,
            },
          };
        }
      }

      const res: any = await apiClient
        .put("auth/esg/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            esgQNA: {
              "esg-report": stepData,
            },
          }),
        })
        .json();
      console.log(res);
      if (res.success) {
        toast.success("Saved Successfully");
        props.setIsOpen(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res: any = await apiClient
          .get(`auth/esg/me/esg-report`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .json();

        const { value } = res;

        const stepDataKeys = Object.keys(value);

        let stepData = {
          ...step1Data,
        };

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]];
          if (key.type === "file") {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step1Data],
                url: key.url,
              },
            };
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step1Data],
                value: key.value,
              },
            };
          }
        }
        setStep1Data(stepData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Dialog
        open={props.isOpen}
        as="div"
        className="relative z-10"
        onClose={() => {
          !loading && handleSave();
        }}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center text-center h-[100vh]">
            <DialogPanel className="w-[100vw] h-full p-[5rem] overflow-hidden text-left align-middle transition-all transform bg-black text-white shadow-xl ">
              <div className="flex justify-between w-full">
                <p className="text-xl font-bold text-white">
                  Add your details for Better Experience
                </p>
                <p
                  onClick={() => !loading && handleSave()}
                  className="cursor-pointer text-white"
                >
                  X
                </p>
              </div>

              <div className="w-full flex flex-col gap-[1rem] mt-[2rem]">
                <div className="w-full flex flex-col gap-[1rem]">
                  <Input
                    checkBox={true}
                    transparent={true}
                    mode="dark"
                    isAutoFill={step1Data.companyName.isAutoFill}
                    isArea={step1Data.companyName.isArea}
                    spaced={true}
                    label={step1Data.companyName.label}
                    name={"companyName"}
                    value={step1Data.companyName.value}
                    setValue={(e: any) =>
                      setStep1Data({
                        ...step1Data,
                        companyName: {
                          ...step1Data.companyName,
                          value: e.target.value,
                        },
                      })
                    }
                    required={step1Data.companyName.required}
                    type={step1Data.companyName.type}
                  />
                  <Dropdown
                    options={INDUSTRIES.map((ind) => {
                      return { label: ind, value: ind, filterValue: ind };
                    })}
                    dark={true}
                    label="Industry"
                    placeholder="Select Industry"
                    selectedValue={step1Data?.industry?.value}
                    setSelectedValue={(e: any) => {
                      setStep1Data({
                        ...step1Data,
                        industry: {
                          ...step1Data?.industry,
                          value: e,
                        },
                      });
                    }}
                  />
                  <Input
                    checkBox={true}
                    transparent={true}
                    mode="dark"
                    isAutoFill={step1Data.companyBrief.isAutoFill}
                    isArea={step1Data.companyBrief.isArea}
                    spaced={true}
                    label={step1Data.companyBrief.label}
                    name={"companyBrief"}
                    value={step1Data.companyBrief.value}
                    setValue={(e: any) =>
                      setStep1Data({
                        ...step1Data,
                        companyBrief: {
                          ...step1Data.companyBrief,
                          value: e.target.value,
                        },
                      })
                    }
                    required={step1Data.companyBrief.required}
                    type={step1Data.companyBrief.type}
                  />
                </div>
              </div>

              <div className="flex gap-[1rem] justify-end w-full">
                <PriButton
                  tooltip="Close"
                  disabled={loading}
                  onClick={() => {
                    handleSave();
                  }}
                  className="mt-[2rem] w-[20px] text-black flex items-center justify-center"
                >
                  <IoCloseSharp className="h-[20px] w-[20px]" />
                </PriButton>
                <PriButton
                  tooltip="Reset"
                  disabled={loading}
                  onClick={() => {
                    handleReset();
                  }}
                  className="mt-[2rem] w-[20px] text-black flex items-center justify-center"
                >
                  <GrPowerReset className="h-[20px] w-[20px]" />
                </PriButton>
                <PriButton
                  tooltip="Save"
                  disabled={loading}
                  onClick={() => {
                    handleSave();
                  }}
                  className="mt-[2rem] w-[20px] text-black flex items-center justify-center"
                >
                  <IoMdSave className="h-[20px] w-[20px]" />
                </PriButton>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DetailForAIModal;
