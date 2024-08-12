"use client";

import { useESGListItemsStore } from "@/utils/Zustand";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

type Props = {
  id: string;
};

const Steps = ({ id }: Props) => {
  const { esgReportItems } = useESGListItemsStore();
  return (
    <>
      {esgReportItems.map((item: any) => {
        if (item.value === id) {
          switch (item.value) {
            case "create-esg-report":
              return <Step0 nextstep={"esg-report"} key={item.value} />;
            case "esg-report":
              return (
                <Step1
                  title={{ title: item.name, value: item.value }}
                  nextstep={"environmental"}
                  prevstep={"create-esg-report"}
                  key={item.value}
                />
              );
            case "environmental":
              return (
                <Step2
                  title={{ title: item.name, value: item.value }}
                  nextstep={"social"}
                  prevstep={"esg-report"}
                  key={item.value}
                />
              );
            case "social":
              return (
                <Step3
                  title={{ title: item.name, value: item.value }}
                  nextstep={"governance"}
                  prevstep={"environmental"}
                  key={item.value}
                />
              );
            case "governance":
              return (
                <Step4
                  title={{ title: item.name, value: item.value }}
                  nextstep={"it-security"}
                  prevstep={"social"}
                  key={item.value}
                />
              );
            case "it-security":
              return (
                <Step5
                  title={{ title: item.name, value: item.value }}
                  nextstep={"supply-chain"}
                  prevstep={"governance"}
                  key={item.value}
                />
              );
            case "supply-chain":
              return (
                <Step6
                  title={{ title: item.name, value: item.value }}
                  nextstep={"un-sdgs"}
                  prevstep={"it-security"}
                  key={item.value}
                />
              );
            case "un-sdgs":
              return (
                <Step7
                  title={{ title: item.name, value: item.value }}
                  nextstep={"variance"}
                  prevstep={"supply-chain"}
                  key={item.value}
                />
              );
            case "variance":
              return (
                <Step8
                  title={{ title: item.name, value: item.value }}
                  nextstep={"sbt"}
                  prevstep={"un-sdgs"}
                  key={item.value}
                />
              );
            case "sbt":
              return (
                <Step9
                  title={{ title: item.name, value: item.value }}
                  nextstep={""}
                  prevstep={"variance"}
                  key={item.value}
                />
              );
            default:
              return null;
          }
        }
      })}
    </>
  );
};

export default Steps;
