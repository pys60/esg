"use client";

import CountryDropdown from "@/Components/Micro/CountryDropdown";
import PriButton from "@/Components/Micro/PriButton";
import DetailForAIModal from "@/Components/Modals/DetailForAIModal";
import {
  useEnhancedStandardsStore,
  useGlobalStandardsStore,
  useUserStore,
} from "@/utils/Zustand";
import { apiClient } from "@/utils/apiClient";
import { useRouterWithQuery } from "@/utils/router";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { GiSave } from "react-icons/gi";
import { GrClearOption, GrHomeRounded } from "react-icons/gr";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Slider, { Settings } from "react-slick";
import StepsContainer from "./StepsContainer";

type Props = {
  nextstep: string;
};

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow: (
    <button>
      <MdOutlineNavigateNext className="h-[20px] w-[20px]" />
    </button>
  ),
  prevArrow: (
    <button>
      <MdOutlineNavigateBefore className="h-[20px] w-[20px]" />
    </button>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

const Step0 = ({ nextstep }: Props) => {
  const [country, setCountry] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const { globalStandards, setGlobalStandards } = useGlobalStandardsStore();
  const { enhancedStandards, setEnhancedStandard } =
    useEnhancedStandardsStore();
  const router = useRouterWithQuery();
  const { setUser } = useUserStore();

  const [loading, setLoading] = useState(false);

  const handleSelectStandard = (name: string) => {
    const newStandards = globalStandards.map(
      (item: { name: string; short: string; selected: boolean }) => {
        if (item.name === name) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return {
          ...item,
          selected: false,
        };
      }
    );
    setGlobalStandards(newStandards);
  };

  const handleSelectEnhancedStandard = (value: string) => {
    if (value === "None") {
      const newStandards = enhancedStandards.map(
        (item: {
          name: string;
          value: string;
          selected: boolean;
          file: string;
        }) => {
          if (item.value !== "None") {
            return {
              ...item,
              selected: false,
            };
          } else {
            return {
              ...item,
              selected: !item.selected,
            };
          }
        }
      );

      setEnhancedStandard(newStandards);
      return;
    }

    const newStandards = enhancedStandards.map(
      (item: {
        name: string;
        value: string;
        selected: boolean;
        file: string;
      }) => {
        if (item.value === value) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        if (item.value === "None") {
          return {
            ...item,
            selected: false,
          };
        }
        return item;
      }
    );
    setEnhancedStandard(newStandards);
  };

  const handleSave = async () => {
    if (!country) {
      toast.error("Please select a country");
      return;
    }

    if (currentStep === 1) {
      setLoading(true);
      router.push(`/esg/create/${nextstep}`);
      return;
    }
    const selectedGlobalStandards = globalStandards.filter(
      (item: { selected: boolean }) => item.selected
    );
    if (selectedGlobalStandards.length > 0) {
      setCurrentStep(1);
    } else {
      toast.error("Please select at least one global standard");
      return;
    }
    try {
      setLoading(true);
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

  return (
    <StepsContainer
      prefixIcon={
        <GrHomeRounded
          onClick={() => {
            router.push("/buyer");
          }}
          className="h-[20px] cursor-pointer w-[20px]"
        />
      }
      bgcolor="bg-lightPri"
      pt="2%"
      noBorder={true}
      title={
        currentStep === 0
          ? "Create ESG Report"
          : "Enhance Standards adopted for a Robust ESG Framework"
      }
    >
      {currentStep === 0 && (
        <div className="w-full py-[5vh] px-[3vw] ">
          <CountryDropdown
            noLabel={true}
            className="w-[30%]"
            setSelectedValue={setCountry}
            selectedValue={country}
          />
          <div className="w-full h-[50vh] mt-[5vh]">
            <p className="text-2xl font-bold">
              Choose your Global Standards and Frameworks
            </p>
            <div className="absolute z-[2] top-[30vh] left-0 w-full justify-center gap-[1rem] esg px-[5vw] mt-[5vh]">
              <Slider {...settings}>
                {globalStandards.map(
                  (item: {
                    name: string;
                    short: string;
                    selected: boolean;
                  }) => {
                    return (
                      <div
                        onClick={() => handleSelectStandard(item.name)}
                        className="w-[15vw] bg-white p-[1vw] py-[3vh] flex flex-col items-center justify-center border border-[#386cd1] rounded-2xl"
                        key={item.name}
                      >
                        <div className="h-[40px] w-[40px] bg-[#386cd1] rounded-full flex items-center overflow-hidden justify-center">
                          <Image
                            src={`/Images/asset/${item.short}.png`}
                            alt={item.name}
                            className="object-cover"
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="text-center text-2xl font-bold mt-[3vh]">
                          {item.short}
                        </p>
                        <p className="opacity-50 text-center h-[5vh] font-bold mt-[1vh]">
                          {item.name}
                        </p>
                        <div className="h-[40px] mt-[6vh] w-[40px] border border-black rounded-full flex items-center justify-center">
                          {item.selected && (
                            <div className="w-[20px] h-[20px] bg-[#386cd1] rounded-full flex items-center justify-center"></div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
            <div
              style={{
                backgroundImage: `url('/Images/asset/add-bg.png')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[100vw] left-0 absolute h-[45vh] bottom-[0vh]"
            ></div>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <div className="w-full rounded-3xl pt-0  py-[3vh] ">
          <p className="text-[18px] text-grey/50">
            Transform your ESG reporting with our refined approach that blends
            your country&apos;s specific regulations with international
            standards. By adopting our enhanced reporting framework, your ESG
            report gets elevated stature, designed to engage a broad array of
            stakeholders with its global perspective and comprehensive insights
          </p>
          <div className="flex flex-wrap gap-[1rem] mt-[2vh]">
            {enhancedStandards.map(
              (item: { value: string; name: string; selected: boolean }) => {
                return (
                  <div
                    key={item.name}
                    className="w-[48%] bg-white px-[1%] shadow-lg py-[2%] border border-[#386cd1] rounded-lg flex items-center gap-[1rem]"
                  >
                    <button
                      onClick={() => {
                        handleSelectEnhancedStandard(item.value);
                      }}
                      className="h-[20px] flex items-center justify-center w-[20px] border border-[#386cd1] rounded-md"
                    >
                      <TiTick
                        style={{
                          transform: item.selected ? "scale(1)" : "scale(0)",
                        }}
                        className="text-[15px] transition-all text-[#386cd1] "
                      ></TiTick>
                    </button>
                    <p className="text-[16px] w-[90%] font-medium">
                      <strong>
                        {item.value} {item.name && "| "}{" "}
                      </strong>{" "}
                      {item.name}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
      <div className="h-[10vh] z-10 bg-black w-full gap-[1rem] flex items-center justify-end px-[5%] fixed left-0 bottom-0">
        <PriButton
          onClick={() => {
            router.push("/esg/create/brsr-report");
          }}
          className="!px-3 w-fit"
        >
          BRSR Report
        </PriButton>
        <PriButton
          tooltip="Save and Exit"
          onClick={() => handleSave()}
          disabled={loading}
          className="!px-3 w-fit"
        >
          <GiSave className="h-[20px] w-[20px]" />
        </PriButton>
        <PriButton
          tooltip="Reset"
          disabled={loading}
          onClick={() => {
            handleReset();
          }}
          className="!px-3 bg-white w-fit"
        >
          <GrClearOption className="h-[20px] w-[20px]" />
        </PriButton>

        <PriButton
          tooltip="Previous Step"
          disabled={currentStep === 0}
          onClick={() => {
            if (currentStep === 0) {
              return;
            }
            if (currentStep === 1) {
              setCurrentStep(0);
            }
          }}
          className="w-fit !px-3 bg-white"
        >
          <MdOutlineNavigateBefore className="h-[20px] w-[20px]" />
        </PriButton>
        <PriButton
          tooltip="Next Step"
          disabled={loading}
          onClick={() => handleSave()}
          className="w-fit !px-3 bg-white"
        >
          <MdOutlineNavigateNext className="h-[20px] w-[20px]" />
        </PriButton>
      </div>
      <DetailForAIModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </StepsContainer>
  );
};

/**
 *
 */

export default Step0;
