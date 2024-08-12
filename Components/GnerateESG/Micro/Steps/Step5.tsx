"use client";

import Input from "@/Components/Micro/Input";
import UploadInput from "@/Components/Micro/UploadInput";
import { useUserStore } from "@/utils/Zustand";
import { apiClient, apiClientFormDataWithAuth } from "@/utils/apiClient";
import { useRouterWithQuery } from "@/utils/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ESGBottomBar from "../ESGBottomBar";
import StepsContainer from "./StepsContainer";

type Props = {
  title: {
    title: string;
    value: string;
  };
  nextstep: string;
  prevstep: string;
};

const Step5 = ({ title, nextstep, prevstep }: Props) => {
  const router = useRouterWithQuery();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserStore();
  const [step5Data, setStep5Data] = useState({
    picture: {
      label: "Upload Your Picture",
      value: [],
      type: "file",
      url: "",
      required: false,
      isAutoFill: false,
      isArea: false,
    },
    cybersecurityBreaches: {
      label:
        "Have there been any breaches in cyber security in the last three years?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    isoCertification: {
      label: "Is the company ISO 27001-certified for information security?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    gdprCompliance: {
      label:
        "Is your company General Data Protection Regulation (GDPR) compliant?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    cyberAttackInsurance: {
      label:
        "What kind of insurance does the company have in place to protect it from cyber attacks?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    cyberAttackMitigation: {
      label:
        "What steps has the company taken to mitigate the risk of a cyber attack, such as penetration testing and employee training?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itBestPractices: {
      label:
        "How does the company ensure that its IT systems comply with industry best practices?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    expectedCyberThreats: {
      label:
        "What kind of cyber security threats does the company expect to face in the coming year?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    insiderThreatProtection: {
      label: "How does the company protect against insider threats?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    ransomwareImpactHistory: {
      label:
        "Has the company been affected by any ransomware attacks in the past?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    cyberAttackRecoveryPlan: {
      label:
        "What kind of backup and recovery plan does the company have in place in the event of a cyber attack?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itEnvironmentalSustainability: {
      label:
        "How does your IT strategy align with your organization's environmental sustainability goals?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itCarbonFootprintReduction: {
      label:
        "What measures are in place to reduce the carbon footprint of your IT infrastructure (e.g., energy-efficient data centers, cloud computing)?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itEmployeeWellbeingSupport: {
      label:
        "How does your IT policy support the well-being of your employees (e.g., ergonomics, digital wellness programs)?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    digitalWorkplaceSafety: {
      label:
        "Are there measures in place to prevent issues like digital overwork or cyber harassment?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itGovernanceCompliance: {
      label:
        "How is governance maintained in IT and cybersecurity to ensure compliance with ESG standards?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itCorporateGovernanceRole: {
      label:
        "What role does the IT department play in upholding corporate governance and ethical standards?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itVendorEsgCompliance: {
      label:
        "How do you ensure that your IT vendors and partners comply with your ESG standards?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    esgProgressReports: {
      label:
        "Are there regular reports or assessments that demonstrate progress towards ESG objectives in IT and security management?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    itEquipmentDisposalPolicy: {
      label:
        "Is there a policy in place for disposing of old or unused IT equipment?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
  });

  const setPictureAny = (files: any, key: string) => {
    setStep5Data({
      ...step5Data,
      [key]: {
        ...step5Data[key as keyof typeof step5Data],
        value: files,
      },
    });
  };

  const handleSave = async (type?: string) => {
    let stepData = {};
    const stepDataKeys = Object.keys(step5Data);
    try {
      setLoading(true);
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i];
        if (step5Data[key as keyof typeof step5Data].type === "file") {
          const file = step5Data[key as keyof typeof step5Data].value[0];
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
              question: step5Data[key as keyof typeof step5Data].label,
              url: url,
              type: step5Data[key as keyof typeof step5Data].type,
            },
          };
        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step5Data[key as keyof typeof step5Data].label,
              value: step5Data[key as keyof typeof step5Data].value,
              type: step5Data[key as keyof typeof step5Data].type,
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
              [title.value]: stepData,
            },
          }),
        })
        .json();
      console.log(res);
      if (res.success) {
        if (type === "SAVE") {
          return;
        }
        toast.success("Saved Successfully");
        if (type) {
          router.push(`/esg/create/${nextstep}`);
        } else {
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res: any = await apiClient
          .get(`auth/esg/me/${title.value}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .json();

        const { value } = res;

        const stepDataKeys = Object.keys(value);

        let stepData = {
          ...step5Data,
        };

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]];
          if (key.type === "file") {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step5Data],
                url: key.url,
              },
            };
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step5Data],
                value: key.value,
              },
            };
          }
        }

        setStep5Data(stepData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <StepsContainer title={title.title}>
      <form className="w-full h-full">
        {Object.keys(step5Data).map((key, index) => {
          if (step5Data[key as keyof typeof step5Data].type === "file") {
            return (
              <UploadInput
                key={index}
                spaced={true}
                urls={
                  // @ts-expect-error URL on one property only
                  step5Data[key as keyof typeof step5Data].url
                    ? // @ts-expect-error URL on one property only
                      [step5Data[key as keyof typeof step5Data].url]
                    : []
                }
                title={step5Data[key as keyof typeof step5Data].label}
                files={step5Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            );
          }
          return (
            <Input
              checkBox={true}
              transparent={true}
              key={index}
              isAutoFill={step5Data[key as keyof typeof step5Data].isAutoFill}
              isArea={step5Data[key as keyof typeof step5Data].isArea}
              spaced={true}
              label={step5Data[key as keyof typeof step5Data].label}
              name={key}
              value={step5Data[key as keyof typeof step5Data].value as string}
              setValue={(e: any) =>
                setStep5Data({
                  ...step5Data,
                  [key]: {
                    ...step5Data[key as keyof typeof step5Data],
                    value: e.target.value,
                  },
                })
              }
              required={step5Data[key as keyof typeof step5Data].required}
              type={step5Data[key as keyof typeof step5Data].type}
            />
          );
        })}
      </form>
      <ESGBottomBar
        handleSave={handleSave}
        handleReset={handleReset}
        loading={loading}
        nextDisabled={false}
        router={router}
        prevDisabled={false}
        prevstep={`/esg/create/${prevstep}`}
      />
    </StepsContainer>
  );
};

export default Step5;
