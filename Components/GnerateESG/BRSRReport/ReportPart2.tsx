import Input from "@/Components/Micro/Input";
import Label from "@/Components/Micro/Label";
import RadioInput from "@/Components/Micro/RadioInput";
import SubHead from "@/Components/Micro/SubHead";
import { TableContainer } from "@/Components/Micro/Table";
import { useState } from "react";
import {
  AssessmentTable,
  EmployeeBenefitsTable,
  EmployeeBenefitsTable2,
  EmployeeRetentionTable,
  EmployeeWorkerTable,
  EmployeeWorkerTable2,
  NICTable,
  RecycleTable,
  RehabilitationTable,
  RemunerationTable,
  ReUsedTable,
  RiskTable,
  RNDTable,
  SafetyIncidentTable,
  ValueChainTable,
  WageComparisonTable,
  WageComparisonTable2,
  WorkingConditionTable,
} from "./constants";

const ReportPart2 = () => {
  const [rndTable, setRndTable] = useState(RNDTable);
  const [nicTable, setNicTable] = useState(NICTable);
  const [riskTable, setRiskTable] = useState(RiskTable);
  const [recycleTable, setRecycleTable] = useState(RecycleTable);
  const [reusedTable, setReusedTable] = useState(ReUsedTable);
  const [employeeBenefitTable, setEmployeeBenefitTable] = useState(
    EmployeeBenefitsTable("employees")
  );
  const [workerBenefitTable, setWorkerBenefitTable] = useState(
    EmployeeBenefitsTable("workers")
  );
  const [retenionTable, setRetentionTable] = useState(EmployeeRetentionTable);
  const [empBenefitTable2, setEmpBenefitTable2] = useState(
    EmployeeBenefitsTable2
  );
  const [workerBenefitTable2, setWorkerBenefitTable2] =
    useState(EmployeeWorkerTable);
  const [empWorkerTable, setEmpWorkerTable] = useState(EmployeeWorkerTable2);
  const [safetyTable, setSafetyTable] = useState(SafetyIncidentTable);
  const [workingConditionTable, setWorkingConditionTable] = useState(
    WorkingConditionTable
  );
  const [assessmentTable, setAssessmentTable] = useState(AssessmentTable);
  const [rehabTable, setRehabTable] = useState(RehabilitationTable);
  const [valueChainTable, setValueChainTable] = useState(ValueChainTable);
  const [wageComparisonTable, setWageCompensationTable] =
    useState(WageComparisonTable);
  const [wageComparisonTable2, setWageCompensationTable2] =
    useState(WageComparisonTable2);
  const [remuTable, setRemuTable] = useState(RemunerationTable);
  return (
    <>
      <SubHead secText>
        PRINCIPLE 2 Businesses should provide goods and services in a manner
        that is sustainable and safe
      </SubHead>
      <SubHead>Essential Indicators</SubHead>
      <Label checked spaced>
        Percentage of R&D and capital expenditure (capex) investments in
        specific technologies to improve the environmental and social impacts of
        product and processes to total R&D and capex investments made by the
        entity, respectively.
      </Label>
      <TableContainer theme="light" setConfig={setRndTable} config={rndTable} />
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Does the entity have procedures in place for sustainable sourcing? (Yes/No) If yes, what percentage of inputs were sourced sustainably?"
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Percentage"
          value={""}
          setValue={() => {}}
          type="number"
          placeholder="Enter percentage"
          transparent
        />
      </div>
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Describe the processes in place to safely reclaim your products for reusing, recycling and disposing at the end of life, for (a) Plastics (including packaging) (b) E-waste (c) Hazardous waste and (d) other waste."
        transparent
        checkBox
        spaced
      />
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Whether Extended Producer Responsibility (EPR) is applicable to the entity’s activities (Yes / No). If yes, whether the waste collection plan is in line with the Extended Producer Responsibility (EPR) plan submitted to Pollution Control Boards? If not, provide steps taken to address the same."
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Percentage"
          value={""}
          setValue={() => {}}
          type="number"
          placeholder="Enter percentage"
          transparent
        />
      </div>
      <SubHead>Leadership Indicators</SubHead>
      <Label checked spaced>
        Has the entity conducted Life Cycle Perspective / Assessments (LCA) for
        any of its products (for manufacturing industry) or for its services
        (for service industry)? If yes, provide details in the following format?
      </Label>
      <TableContainer theme="light" setConfig={setNicTable} config={nicTable} />
      <Label checked spaced>
        If there are any significant social or environmental concerns and/or
        risks arising from production or disposal of your products / services,
        as identified in the Life Cycle Perspective / Assessments (LCA) or
        through any other means, briefly describe the same along-with action
        taken to mitigate the same.
      </Label>
      <TableContainer
        theme="light"
        setConfig={setRiskTable}
        config={riskTable}
      />
      <Label checked spaced>
        Percentage of recycled or reused input material to total material (by
        value) used in production (for manufacturing industry) or providing
        services (for service industry).
      </Label>
      <TableContainer
        theme="light"
        setConfig={setRecycleTable}
        config={recycleTable}
      />
      <Label checked spaced>
        Of the products and packaging reclaimed at end of life of products,
        amount (in metric tonnes) reused, recycled, and safely disposed, as per
        the following format:
      </Label>
      <TableContainer
        theme="light"
        setConfig={setReusedTable}
        config={reusedTable}
      />
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <Label checked>
          Reclaimed products and their packaging materials (as percentage of
          products sold) for each product category.
        </Label>
        <div className="w-full mt-[40px] flex gap-[1rem]">
          <Input
            label="Indicate Product Category"
            value={""}
            setValue={() => {}}
            transparent
          />
          <Input
            label="Reclaimed products and their packaging materials as % of total products sold in respective category"
            value={""}
            setValue={() => {}}
            type="number"
            placeholder="Enter percentage"
            transparent
          />
        </div>
      </div>
      <SubHead secText>
        PRINCIPLE 3 Businesses should respect and promote the well-being of all
        employees, including those in their value chains
      </SubHead>
      <SubHead>Essential Indicators</SubHead>
      <Label checked spaced>
        Details of measures for the well-being of employees
      </Label>
      <TableContainer
        maxHeight="500px"
        theme="light"
        setConfig={setEmployeeBenefitTable}
        config={employeeBenefitTable}
      />
      <Label checked spaced>
        Details of measures for the well-being of workers
      </Label>
      <TableContainer
        maxHeight="500px"
        theme="light"
        setConfig={setWorkerBenefitTable}
        config={workerBenefitTable}
      />
      <SubHead>Accessibility of workplaces</SubHead>
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Are the premises / offices of the entity accessible to differently abled employees and workers, as per the requirements of the Rights of Persons with Disabilities Act, 2016? 
If not, whether any steps are being taken by the entity in this regard."
        checkBox
        transparent
        isAutoFill
        spaced
      />
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Does the entity have an equal opportunity policy as per the Rights of Persons with Disabilities Act, 2016? If so, provide a web-link to the policy."
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Web-link"
          value={""}
          setValue={() => {}}
          type="number"
          placeholder="Enter number"
          transparent
        />
      </div>
      <Label spaced checked>
        Return to work and Retention rates of permanent employees and workers
        that took parental leave.
      </Label>
      <TableContainer
        theme="light"
        setConfig={setRetentionTable}
        config={retenionTable}
      />
      <Label spaced noCheckbox>
        Is there a mechanism available to receive and redress grievances for the
        following categories of employees and worker? If yes, give details of
        the mechanism in brief.
      </Label>
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Permanent Employees"
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Explain Here"
          value={""}
          setValue={() => {}}
          isArea
          transparent
        />
      </div>
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Other than Permanent Employees"
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Explain Here"
          value={""}
          setValue={() => {}}
          isArea
          transparent
        />
      </div>
      <Label spaced checked>
        Membership of employees and worker in association(s) or Unions
        recognised by the listed entity
      </Label>
      <TableContainer
        theme="light"
        setConfig={setEmpBenefitTable2}
        config={empBenefitTable2}
      />
      <Label spaced checked>
        Details of training given to employees and workers
      </Label>
      <TableContainer
        theme="light"
        setConfig={setWorkerBenefitTable2}
        config={workerBenefitTable2}
      />
      <Label spaced checked>
        Details of performance and career development reviews of employees and
        worker:
      </Label>
      <TableContainer
        theme="light"
        setConfig={setEmpWorkerTable}
        config={empWorkerTable}
      />
      <Label spaced checked>
        Health and safety management system
      </Label>
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Whether an occupational health and safety management system has been implemented by the entity? (Yes/ No). If yes, the coverage such system?"
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Explain Here"
          value={""}
          setValue={() => {}}
          isArea
          transparent
        />
      </div>
      <Input
        label="What are the processes used to identify work-related hazards and assess risks on a routine and non-routine basis by the entity?"
        isArea
        setValue={() => {}}
        value={""}
        transparent
        checkBox
        spaced
      />
      <RadioInput
        label="Whether you have processes for workers to report the work related hazards and to remove themselves from such risks."
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <RadioInput
        label="Do the employees/ worker of the entity have access to non-occupational medical and healthcare services? "
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <Label spaced checked>
        Details of safety incidents
      </Label>
      <TableContainer
        theme="light"
        config={safetyTable}
        setConfig={setSafetyTable}
      />
      <Label spaced checked>
        Describe the measures taken by the entity to ensure a safe and healthy
        work place.
      </Label>
      <TableContainer
        theme="light"
        config={workingConditionTable}
        setConfig={setWorkingConditionTable}
      />
      <Label spaced checked>
        Assessments for the year
      </Label>
      <TableContainer
        theme="light"
        config={assessmentTable}
        setConfig={setAssessmentTable}
      />
      <Input
        label="Provide details of any corrective action taken or underway to address safety-related incidents (if any) and on significant risks / concerns arising from assessments of health & safety practices and working conditions."
        isArea
        setValue={() => {}}
        value={""}
        transparent
        checkBox
        spaced
      />
      <Label spaced checked>
        Does the entity extend any life insurance or any compensatory package in
        the event of death of (A) Employees (Y/N) (B) Workers (Y/N)
      </Label>
      <RadioInput
        label="Employees"
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <RadioInput
        label="Workers"
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <Input
        label="Provide the measures undertaken by the entity to ensure that statutory dues have been deducted and deposited by the value chain partners."
        isArea
        setValue={() => {}}
        value={""}
        transparent
        checkBox
        spaced
      />
      <Label checked spaced>
        Provide the number of employees / workers having suffered high
        consequence work- related injury / ill-health / fatalities (as reported
        in Q11 of Essential Indicators above), who have been are rehabilitated
        and placed in suitable employment or whose family members have been
        placed in suitable employment
      </Label>
      <TableContainer
        theme="light"
        config={rehabTable}
        setConfig={setRehabTable}
      />
      <RadioInput
        label="Does the entity provide transition assistance programs to facilitate continued employability and the management of career endings resulting from retirement or termination of employment?"
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <Label spaced checked>
        Details on assessment of value chain partners
      </Label>
      <TableContainer
        theme="light"
        config={valueChainTable}
        setConfig={setValueChainTable}
      />
      <Input
        isArea
        setValue={() => {}}
        label="Provide details of any corrective actions taken or underway to address significant risks / concerns arising from assessments of health and safety practices and working conditions of value chain partners."
        value={""}
        transparent
        checkBox
        spaced
      />
      <SubHead secText>
        PRINCIPLE 4: Businesses should respect the interests of and be
        responsive to all its stakeholders
      </SubHead>
      <SubHead>Essential Indicators</SubHead>
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Describe the processes for identifying key stakeholder groups of the entity."
        transparent
        checkBox
        spaced
      />
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="List stakeholder groups identified as key for your entity and the frequency of engagement with each stakeholder group."
        transparent
        checkBox
        spaced
      />
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Describe the processes for identifying key stakeholder groups of the entity."
        transparent
        checkBox
        spaced
      />
      <SubHead>Leadership Indicators</SubHead>
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Provide the processes for consultation between stakeholders and the Board on economic, environmental, and social topics or if consultation is delegated, how is feedback from such consultations provided to the Board."
        transparent
        checkBox
        spaced
      />
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Whether stakeholder consultation is used to support the identification and management of environmental, and social topics (Yes / No). If so, provide details of instances as to how the inputs received from stakeholders on these topics were incorporated into policies and activities of the entity."
        transparent
        checkBox
        spaced
      />
      <div className="mt-[40px] w-full shadow-pri rounded-md p-[1rem]">
        <RadioInput
          noSpace
          label="Whether stakeholder consultation is used to support the identification and management of environmental, and social topics (Yes / No). If so, provide details of instances as to how the inputs received from stakeholders on these topics were incorporated into policies and activities of the entity."
          options={["Yes", "No"]}
          checked="Yes"
          setChecked={() => {}}
        />
        <Input
          spaced
          label="Explain Here"
          value={""}
          setValue={() => {}}
          isArea
          transparent
        />
      </div>
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Whether stakeholder consultation is used to support the identification and management of environmental, and social topics (Yes / No). If so, provide details of instances as to how the inputs received from stakeholders on these topics were incorporated into policies and activities of the entity."
        transparent
        checkBox
        spaced
      />
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Provide details of instances of engagement with, and actions taken to, address the concerns of vulnerable/ marginalized stakeholder groups."
        transparent
        checkBox
        spaced
      />
      <SubHead secText>
        PRINCIPLE 5 Businesses should respect and promote human rights
      </SubHead>
      <SubHead>Essential Indicators</SubHead>
      <Label checked spaced>
        Details on assessment of value chain partners
      </Label>
      <TableContainer
        theme="light"
        config={wageComparisonTable}
        setConfig={setWageCompensationTable}
      />
      <Label checked spaced>
        Details of minimum wages paid to employees and workers, in the following
        format
      </Label>
      <TableContainer
        theme="light"
        config={wageComparisonTable2}
        setConfig={setWageCompensationTable2}
      />
      <Label checked spaced>
        Details of remuneration/salary/wages, in the following format:
      </Label>
      <TableContainer
        theme="light"
        config={remuTable}
        setConfig={setRemuTable}
      />
      <RadioInput
        label="Do you have a focal point (Individual/ Committee) responsible for addressing human rights impacts or issues caused or contributed to by the business?"
        options={["Yes", "No"]}
        checked="Yes"
        setChecked={() => {}}
      />
      <Input
        isArea
        setValue={() => {}}
        value={""}
        label="Describe the internal mechanisms in place to redress grievances related to human rights issues."
        transparent
        checkBox
        spaced
      />
    </>
  );
};

export default ReportPart2;
