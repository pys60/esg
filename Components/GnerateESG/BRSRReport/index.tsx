"use client";

import Input from "@/Components/Micro/Input";
import Label from "@/Components/Micro/Label";
import PriButton from "@/Components/Micro/PriButton";
import RadioInput from "@/Components/Micro/RadioInput";
import SubHead from "@/Components/Micro/SubHead";
import { TableContainer } from "@/Components/Micro/Table";
import { useShowSideBarStore } from "@/utils/Zustand";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import StepsContainer from "../Micro/Steps/StepsContainer";
import {
  businessActivityTable,
  complianceTable,
  conflictOfInterestTable,
  disclosureQuestionsTable,
  employeeTable,
  locationTable,
  materialIssuesTable,
  policyMaterialityTable,
  policyReviewTable,
  productServiceTable,
  stakeholderGrievanceTable,
  stakeholderGrievanceTable2,
  trainingAndAwarenessTable,
} from "./constants";
import ReportPart2 from "./ReportPart2";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
Chart.register(Title);
Chart.register(Tooltip);
Chart.register(Legend);
Chart.register(ArcElement, Tooltip, Legend);

const BRSRComponent = () => {
  const { setShowSideBar } = useShowSideBarStore();
  const router = useRouter();
  const [buisnessActivityState, setBuisnessActivityState] = useState(
    businessActivityTable
  );
  const [productServiceTableState, setProductServiceTableState] =
    useState(productServiceTable);
  const [locationTableState, setLocationTableState] = useState(locationTable);
  const [employeeTableState, setEmployeeTableState] = useState(employeeTable);
  const [stakeholderGrievanceTableState, setStakeholderGrievanceTableState] =
    useState(stakeholderGrievanceTable);
  const [stakeholderGrievanceTable2State, setStakeholderGrievanceTable2State] =
    useState(stakeholderGrievanceTable2);
  const [materialIssuesTableState, setMaterialIssuesTableState] =
    useState(materialIssuesTable);
  const [disclosureQuestionsTableState, setDisclosureQuestionsTableState] =
    useState(disclosureQuestionsTable);
  const [policyReviewTableState, setPolicyReviewTableState] =
    useState(policyReviewTable);
  const [policyMaterialityTableState, setPolicyMaterialityTableState] =
    useState(policyMaterialityTable);
  const [trainingAndAwarenessTableState, setTrainingAndAwarenessTableState] =
    useState(trainingAndAwarenessTable);
  const [complianceTableState, setComplianceTableState] =
    useState(complianceTable);
  const [conflictOfInterestTableState, setConflictOfInterestTableState] =
    useState(conflictOfInterestTable);

  const [inputState, setInputState] = useState({
    cin: "",
    name: "",
    year: "",
    registeredOffice: "",
    corporateAddress: "",
    email: "",
    telephone: "",
    website: "",
    financialYear: "",
    reportingPeriod: "",
    stockExchange: "",
    paidUpCapital: "",
    contactName: "",
    contactTelephone: "",
    contactEmail: "",
    reportingBoundary: "",
    marketServed: "",
    typeOfCustomers: "",
    detailsAtEnd: "",
    boardsOfDirectors: "",
    numberOfWomenInBoard: "",
    percentageOfWomenInBoard: "",
    numberOfWomenInKeyManagement: "",
    percentageOfWomenInKeyManagement: "",
    numberOfEmployeesAndWorkersMale2021: "",
    numberOfEmployeesAndWorkersFemale2021: "",
    numberOfEmployeesAndWorkersMale2022: "",
    numberOfEmployeesAndWorkersFemale2022: "",
    numberOfEmployeesAndWorkersMale2023: "",
    numberOfEmployeesAndWorkersFemale2023: "",
    nameOfHolding: "",
    typeOfHolding: "",
    percentageOfShares: "",
    participateInBusinessResponsibility: "",
    isCSRApplicable: "",
    turnOverCSR: "",
    netWorthCSR: "",
    complianceWithListing: "",
    describeInBreifAntiCorruption: "",
    webLinkAntiCorruption: "",
    caseDetails: "",
    regulatoryAgency: "",
    detailsOfCorrectiveAction: "",
    totalNumberAwarenessProgrammes: "",
    totalNumberParticipants: "",
    antiCorruptionPolicy: "",
    antiCorruptionPolicyLeadership: "",
  });
  const [radioState, setRadioState] = useState({
    participateInBusinessResponsibility: "Yes",
    isCSRApplicable: "Yes",
    antiCorruptionPolicy: "Yes",
    antiCorruptionPolicyLeadership: "Yes",
  });

  const valuConfig = (key: keyof typeof inputState) => {
    const obj = {
      value: inputState[key],
      setValue: (
        value: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
      ) => {
        setInputState((prevState) => ({
          ...prevState,
          [key]: value.target.value,
        }));
      },
    };
    return obj;
  };

  const setRadioConfig = (key: keyof typeof radioState) => {
    return {
      checked: radioState[key as keyof typeof radioState],
      setChecked: (value: string) => {
        setRadioState((prevState) => ({
          ...prevState,
          [key]: value,
        }));
      },
    };
  };

  useEffect(() => {
    setShowSideBar(false);
  }, []);

  return (
    <StepsContainer pt="0" title={"BRSR Report"}>
      <Input
        spaced
        {...valuConfig("cin")}
        type={"text"}
        label="Corporate Identity Number (CIN) of the Listed Entity"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("name")}
        type={"text"}
        label="Name of the Listed Entity"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("year")}
        type={"text"}
        label="Year of incorporation"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("registeredOffice")}
        type={"text"}
        label="Registered office address"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("corporateAddress")}
        type={"text"}
        label="Corporate address"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("email")}
        type={"text"}
        label="E-mail"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("telephone")}
        type={"text"}
        label="Telephone"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("website")}
        type={"text"}
        label="Website"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("financialYear")}
        type={"text"}
        label="Financial year for which reporting is being done"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("reportingPeriod")}
        type={"text"}
        label="Name of the Stock Exchange(s) where shares are listed"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        {...valuConfig("stockExchange")}
        type={"text"}
        label="Paid-up Capital"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <div className="mt-[40px] p-[1rem] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md">
        <Label checked>
          Name and contact details of the person who may be contacted in case of
          any queries on the BRSR report
        </Label>
        <div className="mt-[1rem] flex gap-[1rem]">
          <Input
            {...valuConfig("contactName")}
            type={"text"}
            label="Name"
            placeholder="Enter CIN"
            transparent
          />
          <Input
            {...valuConfig("contactTelephone")}
            type={"text"}
            label="Telephone"
            placeholder="Enter CIN"
            transparent
          />
          <Input
            {...valuConfig("contactEmail")}
            type={"text"}
            label="Email"
            placeholder="Enter CIN"
            transparent
          />
        </div>
      </div>
      <Input
        spaced
        {...valuConfig("reportingBoundary")}
        type={"text"}
        label="Reporting boundary - Are the disclosures under this report made on a standalone basis (i.e. only for the entity) or on a consolidated basis (i.e. for the entity and all the entities
which form a part of its consolidated financial statements, taken together)."
        checkBox
        placeholder="Enter CIN"
        transparent
      />

      <div className="w-full pt-[40px] mt-[40px] pb-[10px] border-t-2 border-t-blue-500 border-b  text-[20px] font-bold ">
        Details of the Listed Entity
      </div>

      <div className="mt-[40px]">
        <Label checked>
          Details of business activities (accounting for 90% of the turnover):
        </Label>
        <TableContainer
          maxHeight="400px"
          className="my-8 border-2 border-blue-200 rounded"
          theme="light"
          config={buisnessActivityState}
          setConfig={setBuisnessActivityState}
        />
      </div>
      <div className="mt-[40px]">
        <Label checked>
          Products/Services sold by the entity (accounting for 90% of the
          entity’s Turnover):
        </Label>
        <TableContainer
          maxHeight="400px"
          className="my-8 border-2 border-blue-200 rounded"
          theme="light"
          config={productServiceTableState}
          setConfig={setProductServiceTableState}
        />
      </div>
      <SubHead>Operations</SubHead>
      <div className="mt-[40px]">
        <Label checked>
          Number of Locations Where plants and/or operations/Offices of Entity
          are situated.
        </Label>
        <TableContainer
          maxHeight="400px"
          className="my-8 border-2 border-blue-200 rounded"
          theme="light"
          config={locationTableState}
          setConfig={setLocationTableState}
        />
      </div>
      <SubHead>Market served by Entity</SubHead>
      <Input
        spaced
        {...valuConfig("marketServed")}
        type={"text"}
        label="What is the contribution of exports as a percentage of the total turnover of the entity?"
        checkBox
        placeholder="Enter Market served by Entity"
        transparent
      />
      <Input
        spaced
        {...valuConfig("typeOfCustomers")}
        type={"text"}
        label="A brief on types of customers"
        checkBox
        placeholder="Enter Brief on types of customers"
        transparent
      />
      <SubHead>Employees</SubHead>
      <Input
        spaced
        {...valuConfig("detailsAtEnd")}
        type={"text"}
        label="Details as at the end of Financial Year"
        checkBox
        placeholder="Enter Details as at the end of Financial Year"
        transparent
      />
      <div className="mt-[40px]">
        <Label checked>
          Employees and workers (including differently abled)
        </Label>
        <TableContainer
          maxHeight="600px"
          className="my-8 border-2 border-blue-200 rounded"
          theme="light"
          config={employeeTableState}
          setConfig={setEmployeeTableState}
        />
      </div>
      <div className="flex w-full mt-[40px] items-center gap-[2vw]">
        {/* BAR CHART */}
        <div className="w-full">
          <Bar
            data={{
              labels: ["Total", "FULL TIME", "PART TIME"],

              datasets: [
                {
                  label: "",
                  data: [
                    parseInt(employeeTableState[4][2].content),
                    parseInt(employeeTableState[2][2].content),
                    parseInt(employeeTableState[3][2].content),
                  ],
                  backgroundColor: ["#f3b344", "#67e09c", "#3e8df3"],
                  barThickness: 60,
                  animations: {
                    y: {
                      easing: "easeInOutElastic",
                    },
                  },
                  borderColor: ["#f3b344", "#67e09c", "#3e8df3"],
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              responsive: true,
              maintainAspectRatio: false,

              plugins: {
                legend: {
                  position: "top" as const,
                },
                colors: {
                  enabled: true,
                },
              },
            }}
          />
        </div>
      </div>
      <SubHead>Participation/Inclusion/Representation of Women</SubHead>
      <Input
        spaced
        {...valuConfig("boardsOfDirectors")}
        type={"text"}
        label="Boards of Directors"
        checkBox
        placeholder="Total"
        transparent
      />
      <div className="mt-[40px]">
        <Label checked>Boards of Directors</Label>
        <div className="flex mt-[40px] gap-[1rem]">
          <Input
            {...valuConfig("numberOfWomenInBoard")}
            type={"text"}
            label="Number of Women"
            placeholder="Enter Total"
            transparent
          />
          <Input
            {...valuConfig("percentageOfWomenInBoard")}
            type={"text"}
            label="Percentage of Women"
            placeholder="Enter Total"
            transparent
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <Label checked>Key Management Personnel</Label>
        <div className="flex mt-[40px] gap-[1rem]">
          <Input
            {...valuConfig("numberOfWomenInKeyManagement")}
            type={"text"}
            label="Number of Women"
            placeholder="Enter Total"
            transparent
          />
          <Input
            {...valuConfig("percentageOfWomenInKeyManagement")}
            type={"text"}
            label="Percentage of Women"
            placeholder="Enter Total"
            transparent
          />
        </div>
      </div>
      <div className="w-full  h-[300px] mt-[40px]">
        <div className="relative h-[300px] w-fit">
          <Doughnut
            data={{
              labels: ["Board of Directors", "Key Management Personnel"],
              datasets: [
                {
                  data: [
                    inputState.numberOfWomenInBoard || 50,
                    inputState.numberOfWomenInKeyManagement || 50,
                  ],
                  backgroundColor: ["#00B8D9", "#FFA800"],
                  borderColor: ["#00B8D9", "#FFA800"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              rotation: -90,
              circumference: 180,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <p className="text-[16px] mt-[100px]">
              {"Total: " +
                (parseInt(inputState.numberOfWomenInBoard || "0") +
                  parseInt(inputState.numberOfWomenInKeyManagement || "0"))}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <Label checked>Turnover rate for permanent employees and workers</Label>
        <Label spaced noCheckbox>
          2023-24 FY Number of Employees and Workers
        </Label>
        <div className="flex mt-[20px] gap-[1rem]">
          <Input
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Male"
            placeholder="Enter Total"
            transparent
          />
          <Input
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Female"
            placeholder="Enter Total"
            transparent
          />
        </div>
        <Label spaced noCheckbox>
          2022-23 FY Number of Employees and Workers
        </Label>
        <div className="flex mt-[20px] gap-[1rem]">
          <Input
            {...valuConfig("numberOfEmployeesAndWorkersMale2022")}
            type={"text"}
            label="Male"
            placeholder="Enter Total"
            transparent
          />
          <Input
            {...valuConfig("numberOfEmployeesAndWorkersFemale2022")}
            type={"text"}
            label="Female"
            placeholder="Enter Total"
            transparent
          />
        </div>
        <Label spaced noCheckbox>
          2021-22 FY Number of Employees and Workers
        </Label>
        <div className="flex mt-[20px] gap-[1rem]">
          <Input
            type={"text"}
            label="Male"
            {...valuConfig("numberOfEmployeesAndWorkersMale2021")}
            placeholder="Enter Total"
            transparent
          />
          <Input
            type={"text"}
            label="Female"
            {...valuConfig("numberOfEmployeesAndWorkersFemale2021")}
            placeholder="Enter Total"
            transparent
          />
        </div>
      </div>
      <SubHead secText>
        Holding, Subsidiary and Associate Companies (including joint ventures)
      </SubHead>
      <Input
        spaced
        {...valuConfig("nameOfHolding")}
        type={"text"}
        label="Name of the holding / subsidiary /associate companies / joint ventures"
        checkBox
        transparent
      />
      <Input
        spaced
        {...valuConfig("typeOfHolding")}
        type={"text"}
        label="Indicate whether holding/ Subsidiary/Associate/ JointVenture"
        checkBox
        transparent
      />
      <Input
        spaced
        {...valuConfig("percentageOfShares")}
        type={"text"}
        label="% of shares held by listed entity"
        checkBox
        transparent
      />
      <RadioInput
        label="Does the entity indicated above, participate in the Business Responsibility initiatives of the listed entity?"
        options={["Yes", "No"]}
        {...setRadioConfig("participateInBusinessResponsibility")}
      />
      <SubHead secText>CSR Details</SubHead>
      <RadioInput
        label="Whether CSR is applicable as per section 135 of Companies Act, 2013"
        options={["Yes", "No"]}
        {...setRadioConfig("isCSRApplicable")}
      />
      <Input
        spaced
        {...valuConfig("turnOverCSR")}
        type={"text"}
        label="Turnover (in Rs.)"
        checkBox
        transparent
      />
      <Input
        spaced
        {...valuConfig("netWorthCSR")}
        type={"text"}
        label="Net worth (in Rs.)"
        checkBox
        transparent
      />
      <SubHead secText>Transparency and Disclosures Compliances</SubHead>
      <Input
        spaced
        {...valuConfig("complianceWithListing")}
        type={"text"}
        label="Complaints/Grievances on any of the principles (Principles 1 to 9) under the National
Guidelines on Responsible Business Conduct"
        checkBox
        transparent
      />
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={stakeholderGrievanceTableState}
        setConfig={setStakeholderGrievanceTableState}
      />
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={stakeholderGrievanceTable2State}
        setConfig={setStakeholderGrievanceTable2State}
      />
      <Label checked spaced>
        Overview of the entity’s material responsible business conduct issues
      </Label>
      <Label noCheckbox spaced>
        Please indicate material responsible business conduct and sustainability
        issues pertaining to environmental and social matters that present a
        risk or an opportunity to your business, rationale for identifying the
        same, approach to adapt or mitigate the risk along-with its financial
        implications, as per the following format
      </Label>
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={materialIssuesTableState}
        setConfig={setMaterialIssuesTableState}
      />
      <SubHead secText>Management and process disclosures</SubHead>
      <Label noCheckbox spaced>
        This section is aimed at helping businesses demonstrate the structures,
        policies and processes put in place towards adopting the NGRBC
        Principles and Core Elements.
      </Label>
      <TableContainer
        maxHeight="800px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={disclosureQuestionsTableState}
        setConfig={setDisclosureQuestionsTableState}
      />
      <TableContainer
        maxHeight="800px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={policyReviewTableState}
        setConfig={setPolicyReviewTableState}
      />
      <Label spaced noCheckbox>
        12. If answer to question (1) above is “No” i.e. not all Principles are
        covered by a policy, reasons to be stated
      </Label>
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={policyMaterialityTableState}
        setConfig={setPolicyMaterialityTableState}
      />
      <Label head spaced noCheckbox>
        SECTION C: PRINCIPLE WISE PERFORMANCE DISCLOSURE
      </Label>
      <Label noCheckbox spaced>
        This section is aimed at helping entities demonstrate their performance
        in integrating the Principles and Core Elements with key processes and
        decisions. The information sought is categorized as “Essential” and
        “Leadership”. While the essential indicators are expected to be
        disclosed by every entity that is mandated to file this report, the
        leadership indicators may be voluntarily disclosed by entities which
        aspire to progress to a higher level in their quest to be socially,
        environmentally and ethically responsible.
      </Label>
      <Label noCheckbox spaced head>
        PRINCIPLE 1 Businesses should conduct and govern themselves with
        integrity, and in a manner that is Ethical, Transparent and Accountable.
      </Label>
      <Label checked spaced>
        Percentage coverage by training and awareness programmes on any of the
        Principles during the financial year
      </Label>
      <TableContainer
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={trainingAndAwarenessTableState}
        setConfig={setTrainingAndAwarenessTableState}
      />
      <Label checked spaced>
        Details of fines / penalties /punishment/ award/ compounding fees/
        settlement amount paid in proceedings (by the entity or by directors /
        KMPs) with regulators/ law enforcement agencies/ judicial institutions,
        in the financial year, in the following format (Note: the entity shall
        make disclosures on the basis of materiality as specified in Regulation
        30 of SEBI (Listing Obligations and Disclosure Obligations) Regulations,
        2015 and as disclosed on the entity’s website)
      </Label>
      <TableContainer
        maxHeight="800px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={complianceTableState}
        setConfig={setComplianceTableState}
      />
      <div className="w-full rounded-md p-[2rem] shadow-md mt-[40px]">
        <Label checked>
          Of the instances disclosed in Question 2 above, details of the Appeal/
          Revision preferred in cases where monetary or non-monetary action has
          been appealed.
        </Label>
        <Input
          {...valuConfig("caseDetails")}
          label="Case Details"
          isArea
          spaced
          transparent
        />
        <Input
          {...valuConfig("regulatoryAgency")}
          label="Name of the regulatory/ enforcement agencies/ judicial institutions"
          spaced
          transparent
        />
      </div>
      <div className="w-full rounded-md p-[2rem] shadow-md mt-[40px]">
        <RadioInput
          label="Does the entity have an anti-corruption or anti-bribery policy? If yes, provide details in
brief and if available, provide a web-link to the policy."
          options={["Yes", "No"]}
          {...setRadioConfig("antiCorruptionPolicy")}
        />
        <Input
          {...valuConfig("describeInBreifAntiCorruption")}
          label="Describe in breif"
          isArea
          spaced
          transparent
        />
        <Input
          {...valuConfig("webLinkAntiCorruption")}
          label="Web Link"
          spaced
          transparent
        />
      </div>
      <Label checked spaced>
        Details of complaints with regard to conflict of interest:
      </Label>
      <TableContainer
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={conflictOfInterestTableState}
        setConfig={setConflictOfInterestTableState}
      />
      <Input
        {...valuConfig("detailsOfCorrectiveAction")}
        label="Provide details of any corrective action taken or underway on issues related to fines / penalties / action taken by regulators/ law enforcement agencies/ judicial institutions, on cases of corruption and conflicts of interest."
        spaced
        transparent
      />
      <SubHead>Leadership Indicators</SubHead>
      <Label noCheckbox head spaced>
        Awareness programmes conducted for value chain partners on any of the
        Principles during the financial year:
      </Label>
      <Input
        {...valuConfig("totalNumberAwarenessProgrammes")}
        label="Total number of awareness programmes held"
        spaced
        transparent
      />
      <Input
        {...valuConfig("totalNumberParticipants")}
        label="Topics / principles covered under the training"
        spaced
        transparent
      />
      <RadioInput
        label="Does the entity have an anti-corruption or anti-bribery policy? If yes, provide details in brief and if available, provide a web-link to the policy."
        options={["Yes", "No"]}
        {...setRadioConfig("antiCorruptionPolicyLeadership")}
      />
      <ReportPart2 />
      <div className="mt-[40px] flex w-full justify-end">
        <PriButton
          onClick={async () => {
            await toast.promise(
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve("Report Generated Successfully");
                }, 2000);
              }),
              {
                loading: "Generating Report",
                success:
                  "Data Submitted Successfully, your report will be generated soon, redirecting to dashboard",
                error: "Error Generating Report",
              }
            );

            setTimeout(() => {
              router.push("/");
            }, 3000);
          }}
          className="w-fit!"
        >
          Generate Report
        </PriButton>
      </div>
    </StepsContainer>
  );
};

export default BRSRComponent;
