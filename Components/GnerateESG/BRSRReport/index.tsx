"use client";

import Input from "@/Components/Micro/Input";
import Label from "@/Components/Micro/Label";
import RadioInput from "@/Components/Micro/RadioInput";
import SubHead from "@/Components/Micro/SubHead";
import { TableContainer } from "@/Components/Micro/Table";
import StepsContainer from "../Micro/Steps/StepsContainer";
import ReportPart2 from "./ReportPart2";

const BRSRComponent = () => {
  return (
    <StepsContainer title={"BRSR Report"}>
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Corporate Identity Number (CIN) of the Listed Entity"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Name of the Listed Entity"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Year of incorporation"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Registered office address"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Corporate address"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="E-mail"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Telephone"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Website"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Financial year for which reporting is being done"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Name of the Stock Exchange(s) where shares are listed"
        checkBox
        placeholder="Enter CIN"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
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
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Name"
            placeholder="Enter CIN"
            transparent
          />
          <Input
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Telephone"
            placeholder="Enter CIN"
            transparent
          />
          <Input
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Email"
            placeholder="Enter CIN"
            transparent
          />
        </div>
      </div>
      <Input
        spaced
        setValue={() => {}}
        value={""}
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
          config={[
            [
              { content: "S. No.", className: "font-semibold " },
              {
                content: "Description of main Activity",
                className: "font-semibold ",
              },
              {
                content: "Description of Business Activity",
                className: "font-semibold ",
              },
              {
                content: "% of Turnover of the Entity",
                className: "font-semibold ",
              },
            ],
            [
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
          ]}
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
          config={[
            [
              { content: "S. No.", className: "font-semibold " },
              {
                content: "Product/Service",
                className: "font-semibold ",
              },
              {
                content: "NIC Code",
                className: "font-semibold ",
              },
              {
                content: "% of Total Turnover Contributed",
                className: "font-semibold ",
              },
            ],
            [
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
          ]}
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
          config={[
            [
              {
                content: "Location",
                className: "font-semibold ",
              },
              {
                content: "Number of plants",
                className: "font-semibold ",
              },
              {
                content: "Number of offices",
                className: "font-semibold ",
              },
              {
                content: "Total",
                className: "font-semibold ",
              },
            ],
            [
              { content: "National" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "International" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
          ]}
        />
      </div>
      <SubHead>Market served by Entity</SubHead>
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="What is the contribution of exports as a percentage of the total turnover of the entity?"
        checkBox
        placeholder="Enter Market served by Entity"
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="A brief on types of customers"
        checkBox
        placeholder="Enter Brief on types of customers"
        transparent
      />
      <SubHead>Employees</SubHead>
      <Input
        spaced
        setValue={() => {}}
        value={""}
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
          config={[
            [
              { content: "S. No.", className: "font-semibold " },
              {
                content: "Particulars",
                className: "font-semibold ",
              },
              { content: "Total", className: "font-semibold " },
              { content: "Male", className: "font-semibold " },
              {
                content: "Male Percentage(%)",
                className: "font-semibold ",
              },
              {
                content: "Female No.",
                className: "font-semibold ",
              },
              {
                content: "Female Percentage (%)",
                className: "font-semibold ",
              },
            ],
            [
              {
                content: "EMPLOYEES",
                colSpan: 7,
                className: "font-bold text-center bg-white",
              },
            ],
            [
              { content: "1" },
              { content: "Permanent" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "2" },
              { content: "Other than permanent" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "3" },
              { content: "Total Employees" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              {
                content: "WORKERS",
                colSpan: 7,
                className: "font-bold text-center bg-white",
              },
            ],
            [
              { content: "4" },
              { content: "Permanent" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "5" },
              { content: "Other than Permanent" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
            [
              { content: "6" },
              { content: "Total Workers" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
              { content: "" },
            ],
          ]}
        />
      </div>
      <SubHead>Participation/Inclusion/Representation of Women</SubHead>
      <Input
        spaced
        setValue={() => {}}
        value={""}
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
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Number of Women"
            placeholder="Enter Total"
            transparent
          />
          <Input
            setValue={() => {}}
            value={""}
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
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Number of Women"
            placeholder="Enter Total"
            transparent
          />
          <Input
            setValue={() => {}}
            value={""}
            type={"text"}
            label="Percentage of Women"
            placeholder="Enter Total"
            transparent
          />
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
          2021-22 FY Number of Employees and Workers
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
      </div>
      <SubHead secText>
        Holding, Subsidiary and Associate Companies (including joint ventures)
      </SubHead>
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Name of the holding / subsidiary /associate companies / joint ventures"
        checkBox
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Indicate whether holding/ Subsidiary/Associate/ JointVenture"
        checkBox
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="% of shares held by listed entity"
        checkBox
        transparent
      />
      <RadioInput
        label="Does the entity indicated above, participate in the Business Responsibility initiatives of the listed entity?"
        options={["Yes", "No"]}
        checked={"Yes"}
        setChecked={() => {}}
      />
      <SubHead secText>CSR Details</SubHead>
      <RadioInput
        label="Whether CSR is applicable as per section 135 of Companies Act, 2013"
        options={["Yes", "No"]}
        checked={"Yes"}
        setChecked={() => {}}
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Turnover (in Rs.)"
        checkBox
        transparent
      />
      <Input
        spaced
        setValue={() => {}}
        value={""}
        type={"text"}
        label="Net worth (in Rs.)"
        checkBox
        transparent
      />
      <SubHead secText>Transparency and Disclosures Compliances</SubHead>
      <Input
        spaced
        setValue={() => {}}
        value={""}
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
        config={[
          [
            {
              content: "Stakeholder group from whom complaint is received",
              rowSpan: 2,
              className: "font-semibold  align-middle",
            },
            {
              content:
                "Grievance Redressal Mechanism in Place (Yes/No) (If Yes, then provide web-link for grievance redress policy)",
              rowSpan: 2,
              className: "font-semibold  align-middle",
            },
            {
              content: "FY Current Financial Year",
              colSpan: 3,
              className: "font-semibold bg-green-100 text-center",
            },
            {
              content: "FY Previous Financial Year",
              colSpan: 3,
              className: "font-semibold bg-green-100 text-center",
            },
          ],
          [
            {
              content: "Number of complaints filed during the year",
              className: "font-semibold  text-center",
            },
            {
              content:
                "Number of complaints pending resolution at close of the year",
              className: "font-semibold  text-center",
            },
            {
              content: "Remarks",
              className: "font-semibold  text-center",
            },
            {
              content: "Number of complaints filed during the year",
              className: "font-semibold  text-center",
            },
            {
              content:
                "Number of complaints pending resolution at close of the year",
              className: "font-semibold  text-center",
            },
            {
              content: "Remarks",
              className: "font-semibold  text-center",
            },
          ],
          [
            { content: "Communities" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Investors (other than shareholders)" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
        ]}
      />
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={[
          [
            {
              content: "Stakeholder group from whom complaint is received",
              rowSpan: 2,
              className: "font-semibold  align-middle",
            },
            {
              content:
                "Grievance Redressal Mechanism in Place (Yes/No) (If Yes, then provide web-link for grievance redress policy)",
              rowSpan: 2,
              className: "font-semibold  align-middle",
            },
            {
              content: "FY Current Financial Year",
              colSpan: 3,
              className: "font-semibold bg-green-100 text-center",
            },
            {
              content: "FY Previous Financial Year",
              colSpan: 3,
              className: "font-semibold bg-green-100 text-center",
            },
          ],
          [
            {
              content: "Number of complaints filed during the year",
              className: "font-semibold  text-center",
            },
            {
              content:
                "Number of complaints pending resolution at close of the year",
              className: "font-semibold  text-center",
            },
            {
              content: "Remarks",
              className: "font-semibold  text-center",
            },
            {
              content: "Number of complaints filed during the year",
              className: "font-semibold  text-center",
            },
            {
              content:
                "Number of complaints pending resolution at close of the year",
              className: "font-semibold  text-center",
            },
            {
              content: "Remarks",
              className: "font-semibold  text-center",
            },
          ],
          [
            { content: "Stakeholders" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Employees and Workers" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Customers" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Value Chain Partners" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "other (please specify)" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
        ]}
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
        config={[
          [
            { content: "S.No", className: "font-semibold " },
            {
              content: "Material issue Identified",
              className: "font-semibold ",
            },
            {
              content: "Indicate whether risk or opportunity (R/O)",
              className: "font-semibold ",
            },
            {
              content: "Rationale for identifying the risk / opportunity",
              className: "font-semibold ",
            },
            {
              content: "In case of risk, approach to adapt or mitigate",
              className: "font-semibold ",
            },
            {
              content:
                "Financial implications of the risk or opportunity (Indicate positive or negative implications)",
              className: "font-semibold ",
            },
          ],
          [
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
        ]}
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
        config={[
          [
            {
              content: "Disclosure Questions",
              className: "font-semibold ",
              colSpan: 1,
            },
            {
              content: "P1",
              className: "font-semibold  text-center",
            },
            {
              content: "P2",
              className: "font-semibold  text-center",
            },
            {
              content: "P3",
              className: "font-semibold  text-center",
            },
            {
              content: "P4",
              className: "font-semibold  text-center",
            },
            {
              content: "P5",
              className: "font-semibold  text-center",
            },
            {
              content: "P6",
              className: "font-semibold  text-center",
            },
            {
              content: "P7",
              className: "font-semibold  text-center",
            },
            {
              content: "P8",
              className: "font-semibold  text-center",
            },
            {
              content: "P9",
              className: "font-semibold  text-center",
            },
          ],
          [
            {
              content: "Policy and management processes",
              className: "font-semibold",
              colSpan: 10,
            },
          ],
          [
            {
              content:
                "1. Whether your entity's policy/policies cover each principle and its core elements of the NGRBCs. (Yes/No)",
              className: "pl-4",
            },
            {
              content: "YES",
              className: "text-center text-green-600 font-semibold",
            },
            {
              content: "NO",
              className: "text-center text-red-600 font-semibold",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content: "b. Has the policy been approved by the Board? (Yes/No)",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content: "c. Web Link of the Policies, if available",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content:
                "2. Whether the entity has translated the policy into procedures. (Yes / No)",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content:
                "3. Do the enlisted policies extend to your value chain partners? (Yes/No)",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content:
                "4. Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle.",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content:
                "5. Specific commitments, goals and targets set by the entity with defined timelines, if any.",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content:
                "6. Performance of the entity against the specific commitments, goals and targets along-with reasons in case the same are not met.",
              className: "pl-4",
            },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
            { content: "", className: "text-center" },
          ],
          [
            {
              content: "Governance, leadership and oversight",
              className: "font-semibold",
              colSpan: 10,
            },
          ],
          [
            {
              content:
                "7. Statement by director responsible for the business responsibility report, highlighting ESG related challenges, targets and achievements (listed entity has flexibility regarding the placement of this disclosure)",
              className: "pl-4",
              colSpan: 10,
            },
          ],
          [
            {
              content:
                "8. Details of the highest authority responsible for implementation and oversight of the Business Responsibility policy (ies).",
              className: "pl-4",
              colSpan: 1,
            },
            {
              content: "",
              className: "pl-4",
              colSpan: 9,
            },
          ],
          [
            {
              content:
                "9. Does the entity have a specified Committee of the Board/ Director responsible for decision making on sustainability related issues? (Yes / No). If yes, provide details.",
              className: "pl-4",
              colSpan: 1,
            },
            {
              content: "",
              className: "pl-4",
              colSpan: 9,
            },
          ],
        ]}
      />
      <TableContainer
        maxHeight="800px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={[
          [
            {
              content: "Questions",
              colSpan: 19,
              className: "font-semibold ",
            },
          ],
          [
            {
              content: "Subject for Review",
              rowSpan: 2,
              className: "font-semibold  align-middle",
            },
            {
              content:
                "Indicate whether review was undertaken by Director / Committee of the Board/ Any other Committee",
              colSpan: 9,
              className: "font-semibold  text-center",
            },
            {
              content:
                "Frequency (Annually/ Half yearly/Quarterly/ Any other – please specify)",
              colSpan: 9,
              className: "font-semibold  text-center",
            },
          ],
          [
            ...Array(9)
              .fill(0)
              .map((_, i) => ({
                content: `P${i + 1}`,
                className: "font-semibold  text-center",
              })),
            ...Array(9)
              .fill(0)
              .map((_, i) => ({
                content: `P${i + 1}`,
                className: "font-semibold  text-center",
              })),
          ],
          [
            {
              content:
                "Performance against above policies and follow up action",
            },
            ...Array(18).fill({ content: "" }),
          ],
          [
            {
              content:
                "Compliance with statutory requirements of relevance to the principles, and, rectification of any non-compliances",
            },
            ...Array(18).fill({ content: "" }),
          ],
          [
            {
              content:
                "11. Has the entity carried out independent assessment/ evaluation of the working of its policies by an external agency? (Yes/No). If yes, provide name of the agency.",
              rowSpan: 2,
            },
            { content: "P1", colSpan: 2, className: "text-center" },
            { content: "P2", colSpan: 2, className: "text-center" },
            { content: "P3", colSpan: 2, className: "text-center" },
            { content: "P4", colSpan: 2, className: "text-center" },
            { content: "P5", colSpan: 2, className: "text-center" },
            { content: "P6", colSpan: 2, className: "text-center" },
            { content: "P7", colSpan: 2, className: "text-center" },
            { content: "P8", colSpan: 2, className: "text-center" },
            { content: "P9", colSpan: 2, className: "text-center" },
          ],
          [...Array(9).fill({ content: "", colSpan: 2 })],
        ]}
      />
      <Label spaced noCheckbox>
        12. If answer to question (1) above is “No” i.e. not all Principles are
        covered by a policy, reasons to be stated
      </Label>
      <TableContainer
        maxHeight="600px"
        className="my-8 border-2 border-blue-200 rounded"
        theme="light"
        config={[
          [
            { content: "Questions", className: "font-semibold " },
            {
              content: "P1",
              className: "font-semibold  text-center",
            },
            {
              content: "P2",
              className: "font-semibold  text-center",
            },
            {
              content: "P3",
              className: "font-semibold  text-center",
            },
            {
              content: "P4",
              className: "font-semibold  text-center",
            },
            {
              content: "P5",
              className: "font-semibold  text-center",
            },
            {
              content: "P6",
              className: "font-semibold  text-center",
            },
            {
              content: "P7",
              className: "font-semibold  text-center",
            },
            {
              content: "P8",
              className: "font-semibold  text-center",
            },
            {
              content: "P9",
              className: "font-semibold  text-center",
            },
          ],
          [
            {
              content:
                "The entity does not consider the Principles material to its business (Yes/No)",
            },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content:
                "The entity is not at a stage where it is in a position to formulate and implement the policies on specified principles (Yes/No)",
            },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content:
                "The entity does not have the financial or/human and technical resources available for the task (Yes/No)",
            },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content:
                "It is planned to be done in the next financial year (Yes/No)",
            },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Any other reason (please specify)" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "", isInput: true },
          ],
        ]}
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
        config={[
          [
            {
              content: "Segment",
              className: "font-semibold ",
              width: "20vw",
            },
            {
              content: "Total number of training and awareness programmes held",
              className: "font-semibold ",
            },
            {
              content:
                "Topics / principles covered under the training and its impact",
              className: "font-semibold ",
            },
            {
              content:
                "%age of persons in respective category covered by the awareness programmes",
              className: "font-semibold ",
            },
          ],
          [
            {
              content: "Board of Directors",
            },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content: "Key Managerial Personnel",
            },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content: "Employees other than BoD and KMPs",
            },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content: "Workers",
            },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
        ]}
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
        config={[
          [
            {
              content: "Monetary",
              colSpan: 6,
              className: "font-bold text-center bg-yellow-100",
            },
          ],
          [
            { content: "", width: "15%" },
            {
              content: "NGRBC Principle",
              className: "font-semibold",
              width: "20%",
            },
            {
              content:
                "Name of the regulatory/ enforcement agencies/ judicial institutions",
              className: "font-semibold",
              width: "20%",
            },
            {
              content: "Amount (In INR)",
              className: "font-semibold",
              width: "15%",
            },
            {
              content: "Brief of the Case",
              className: "font-semibold",
              width: "20%",
            },
            {
              content: "Has an appeal been preferred? (Yes/No)",
              className: "font-semibold",
              width: "10%",
            },
          ],
          [
            { content: "Penalty/ Fine" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Settlement" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            { content: "Compounding fee" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content: "Non-Monetary",
              colSpan: 6,
              className: "font-bold text-center bg-yellow-100",
            },
          ],
          [
            { content: "", width: "15%" },
            {
              content: "NGRBC Principle",
              className: "font-semibold",
              width: "25%",
            },
            {
              content:
                "Name of the regulatory/ enforcement agencies/ judicial institutions",
              className: "font-semibold",
              width: "20%",
            },
            {
              content: "Brief of the Case",
              className: "font-semibold",
              width: "30%",
            },
            {
              content: "Has an appeal been preferred? (Yes/No)",
              className: "font-semibold",
              width: "10%",
              colSpan: 2,
            },
          ],
          [
            { content: "Imprisonment" },
            { content: "" },
            { content: "" },
            { content: "" },
            {
              content: "",
              colSpan: 2,
            },
          ],
          [
            { content: "Punishment" },
            { content: "" },
            { content: "" },
            { content: "" },
            {
              content: "",
              colSpan: 2,
            },
          ],
        ]}
      />
      <div className="w-full rounded-md p-[2rem] shadow-md mt-[40px]">
        <Label checked>
          Of the instances disclosed in Question 2 above, details of the Appeal/
          Revision preferred in cases where monetary or non-monetary action has
          been appealed.
        </Label>
        <Input
          setValue={() => {}}
          value={""}
          label="Case Details"
          isArea
          spaced
          transparent
        />
        <Input
          setValue={() => {}}
          value={""}
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
          checked={"Yes"}
          setChecked={() => {}}
        />
        <Input
          setValue={() => {}}
          value={""}
          label="Describe in breif"
          isArea
          spaced
          transparent
        />
        <Input
          setValue={() => {}}
          value={""}
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
        config={[
          [
            {
              content: "",
              width: "20vw",
            },
            {
              content: "FY (Current Financial Year)",
              className: "font-semibold ",
              colSpan: 2,
            },
            {
              content: "FY (Previous Financial Year)",
              className: "font-semibold ",
              colSpan: 2,
            },
          ],
          [
            {
              content: "",
            },
            { content: "Number" },
            { content: "Remark" },
            { content: "Number" },
            { content: "Remark" },
          ],
          [
            {
              content:
                "Number of complaints received in relation to issues of Conflict of Interest of the Directors",
            },
            { content: "" },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
          [
            {
              content:
                "Number of complaints received in relation to issues of Conflict of Interest of the KMPs",
            },
            { content: "" },
            { content: "" },
            { content: "" },
          ],
        ]}
      />
      <Input
        setValue={() => {}}
        value={""}
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
        setValue={() => {}}
        value={""}
        label="Total number of awareness programmes held"
        spaced
        transparent
      />
      <Input
        setValue={() => {}}
        value={""}
        label="Topics / principles covered under the training"
        spaced
        transparent
      />
      <RadioInput
        label="Does the entity have an anti-corruption or anti-bribery policy? If yes, provide details in brief and if available, provide a web-link to the policy."
        options={["Yes", "No"]}
        checked={"Yes"}
        setChecked={() => {}}
      />
      <ReportPart2 />
    </StepsContainer>
  );
};

export default BRSRComponent;
