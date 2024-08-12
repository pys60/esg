import { TableConfig } from "@/Components/Micro/Table";

export const RNDTable = [
  [
    {
      content: "",
    },
    {
      content: "Current Financial Year",
      className: "text-center font-bold",
    },
    {
      content: "Previous Financial Year",
      className: "text-center font-bold",
    },
    {
      content: "Details of improvements in environmental and social impacts",
      className: "text-center font-bold",
    },
  ],
  [
    {
      content: "R&D investments",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "Capex",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
];

export const NICTable = [
  [
    {
      content: "NIC Code",
    },
    {
      content: "Name of Product/Service",
    },
    {
      content: "% of Total Turnover contributed",
    },
    {
      content:
        "Boundary for which the Life Cycle Perspective /Assessment was conducted",
    },
    {
      content: "Whether conducted by independent external agency (Yes/No)",
    },
    {
      content:
        "Results communicated in public domain (Yes/No) If yes, provide the web-link.",
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
];

export const RiskTable = [
  [
    {
      content: "Name of Product / Service",
    },
    {
      content: "Description of the risk / concern",
    },
    {
      content: "Action Taken",
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
];

export const RecycleTable: TableConfig = [
  [
    {
      content: "Indicate input material",
    },
    {
      content: "Recycled or re-used input material to total material",
      colSpan: 2,
      className: "text-center font-bold",
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "Current Financial Year",
      isInput: true,
    },
    {
      content: "Previous Financial Year",
      isInput: true,
    },
  ],
  [
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
];

export const ReUsedTable: TableConfig = [
  [
    {
      content: "",
    },
    {
      content: "Current Financial Year",
      className: "text-center font-bold",
      colSpan: 3,
    },
    {
      content: "Previous Financial Year",
      className: "text-center font-bold",
      colSpan: 3,
    },
  ],
  [
    {
      content: "",
    },
    {
      content: "Re-Used",
    },
    {
      content: "Recycled",
    },
    {
      content: "Safely disposed",
    },
    {
      content: "Re-Used",
    },
    {
      content: "Recycled",
    },
    {
      content: "Safely disposed",
    },
  ],
  [
    {
      content: "Plastics (including packaging)",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "E-Waste",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "Hazardous waste",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
  [
    {
      content: "Other waste",
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
    {
      content: "",
      isInput: true,
    },
  ],
];

export const EmployeeBenefitsTable = (type?: "employees" | "workers") => {
  return [
    [
      {
        content: `% of ${type} covered by`,
        colSpan: 12,
        className: "font-bold text-center bg-yellow-100",
      },
    ],
    [
      {
        content: "Category",
        rowSpan: 2,
        className: "font-semibold",
      },
      { content: "Total", rowSpan: 2, className: "font-semibold" },
      {
        content: "Health Insurance",
        colSpan: 2,
        className: "font-semibold text-center",
      },
      {
        content: "Accident Insurance",
        colSpan: 2,
        className: "font-semibold text-center",
      },
      {
        content: "Maternity Benefits",
        colSpan: 2,
        className: "font-semibold text-center",
      },
      {
        content: "Paternity Benefits",
        colSpan: 2,
        className: "font-semibold text-center",
      },
      {
        content: "Day Care facilities",
        colSpan: 2,
        className: "font-semibold text-center",
      },
    ],
    [
      {
        content: "Number",
        className: "font-semibold text-center",
      },
      {
        content: "Percentage (%)",
        className: "font-semibold text-center",
      },
      {
        content: "Number",
        className: "font-semibold text-center",
      },
      {
        content: "Percentage (%)",
        className: "font-semibold text-center",
      },
      {
        content: "Number",
        className: "font-semibold text-center",
      },
      {
        content: "Percentage (%)",
        className: "font-semibold text-center",
      },
      {
        content: "Number",
        className: "font-semibold text-center",
      },
      {
        content: "Percentage (%)",
        className: "font-semibold text-center",
      },
      {
        content: "Number",
        className: "font-semibold text-center",
      },
      {
        content: "Percentage (%)",
        className: "font-semibold text-center",
      },
    ],
    [
      {
        content: "Permanent Employees",
        colSpan: 12,
        className: "font-semibold text-center bg-neutral-200",
      },
    ],
    [
      { content: "Male" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
    [
      { content: "Female" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
    [
      { content: "Total" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
    [
      {
        content: "Other than Permanent Employees",
        colSpan: 12,
        className: "font-semibold text-center bg-neutral-200",
      },
    ],
    [
      { content: "Male" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
    [
      { content: "Female" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
    [
      { content: "Total" },
      { content: "", isInput: true },
      ...Array(10).fill({ content: "", isInput: true }),
    ],
  ];
};

export const EmployeeRetentionTable = [
  [
    {
      content: "Gender",
      rowSpan: 2,
      className: "font-semibold",
    },
    {
      content: "Permanent Employees",
      colSpan: 2,
      className: "font-semibold text-center",
    },
    {
      content: "Permanent workers",
      colSpan: 2,
      className: "font-semibold text-center",
    },
  ],
  [
    {
      content: "Return to work rate",
      className: "font-semibold text-center",
    },
    {
      content: "Retention rate",
      className: "font-semibold text-center",
    },
    {
      content: "Return to work rate",
      className: "font-semibold text-center",
    },
    {
      content: "Retention rate",
      className: "font-semibold text-center",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const EmployeeBenefitsTable2 = [
  [
    {
      content: "Benefits",
      rowSpan: 2,
      className: "font-semibold",
    },
    {
      content: "FY - Current Financial Year",
      colSpan: 3,
      className: "font-semibold text-center",
    },
    {
      content: "FY - Previous Financial Year",
      colSpan: 3,
      className: "font-semibold text-center",
    },
  ],
  [
    {
      content: "Total employees / workers in respective category",
      className: "font-semibold text-center",
    },
    {
      content:
        "No. of employees / workers in respective category, who are part of association(s) or Union",
      className: "font-semibold text-center",
    },
    {
      content: "% Percentage",
      className: "font-semibold text-center",
    },
    {
      content: "Total employees / workers in respective category",
      className: "font-semibold text-center",
    },
    {
      content:
        "No. of employees / workers in respective category, who are part of association(s) or Union",
      className: "font-semibold text-center",
    },
    {
      content: "% Percentage",
      className: "font-semibold text-center",
    },
  ],
  [
    { content: "Total Permanent Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total Permanent Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const EmployeeWorkerTable = [
  [
    {
      content: "Category",
      rowSpan: 2,
      className: "font-semibold ",
    },
    {
      content: "Current Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "On Health and safety measures",
      className: "font-semibold text-center ",
    },
    {
      content: "On Skill upgradation",
      className: "font-semibold text-center ",
    },
    {
      content: "Total (D)",
      className: "font-semibold text-center ",
    },
    {
      content: "On Health and safety measures",
      className: "font-semibold text-center ",
    },
    {
      content: "On Skill upgradation",
      className: "font-semibold text-center ",
    },
  ],
  [
    {
      content: "Employees",
      colSpan: 7,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Workers",
      colSpan: 7,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const EmployeeWorkerTable2 = [
  [
    {
      content: "Category",
      rowSpan: 2,
      className: "font-semibold ",
    },
    {
      content: "Current Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Number",
      className: "font-semibold text-center ",
    },
    {
      content: "% Percentage",
      className: "font-semibold text-center ",
    },
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Number",
      className: "font-semibold text-center ",
    },
    {
      content: "Percentage",
      className: "font-semibold text-center ",
    },
  ],
  [
    {
      content: "Employees",
      colSpan: 7,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Workers",
      colSpan: 7,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Female" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const SafetyIncidentTable: TableConfig = [
  [
    {
      content: "Safety Incident/Number",
      className: "font-semibold ",
    },
    { content: "Category", className: "font-semibold " },
    {
      content: "Current Financial Year",
      className: "font-semibold ",
    },
    {
      content: "Previous Financial Year",
      className: "font-semibold ",
    },
  ],
  [
    {
      content:
        "Lost Time Injury Frequency Rate (LTIFR) (per one million-person hours worked)",
      rowSpan: 2,
    },
    { content: "Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total recordable work-related injuries", rowSpan: 2 },
    { content: "Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "No. of fatalities", rowSpan: 2 },
    { content: "Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "High consequence work-related injury or ill-health (excluding fatalities)",
      rowSpan: 2,
    },
    { content: "Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const WorkingConditionTable: TableConfig = [
  [
    {
      content: "Category",
      rowSpan: 2,
      className: "font-semibold ",
    },
    {
      content: "Current Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      colSpan: 3,
      className: "font-semibold text-center ",
    },
  ],
  [
    {
      content: "Filed during the year",
      className: "font-semibold text-center ",
    },
    {
      content: "Pending resolution at the end of year",
      className: "font-semibold text-center ",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center ",
    },
    {
      content: "Filed during the year",
      className: "font-semibold text-center ",
    },
    {
      content: "Pending resolution at the end of year",
      className: "font-semibold text-center ",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Working Conditions" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Health &Safety" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const AssessmentTable: TableConfig = [
  [
    { content: "", className: "font-semibold " },
    {
      content:
        "% of your plants and offices that were assessed (by entity or statutory authorities or third parties)",
      className: "font-semibold text-center ",
    },
  ],
  [{ content: "Health and safety practices" }, { content: "", isInput: true }],
  [{ content: "Working Conditions" }, { content: "", isInput: true }],
];

export const RehabilitationTable: TableConfig = [
  [
    { content: "", rowSpan: 2, className: "font-semibold " },
    {
      content: "Total no. of affected employees/ workers",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content:
        "No. of employees/workers that are rehabilitated and placed in suitable employment or whose family members have been placed in suitable employment",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
  ],
  [
    {
      content: "Current Financial Year",
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      className: "font-semibold text-center ",
    },
    {
      content: "Current Financial Year",
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const ValueChainTable: TableConfig = [
  [
    { content: "", className: "font-semibold " },
    {
      content:
        "% of value chain partners (by value of business done with such partners) that were assessed",
      className: "font-semibold text-center ",
    },
  ],
  [{ content: "Health and safety practices" }, { content: "", isInput: true }],
  [{ content: "Working Conditions" }, { content: "", isInput: true }],
];

export const WageComparisonTable: TableConfig = [
  [
    {
      content: "Category",
      rowSpan: 2,
      className: "font-semibold ",
    },
    {
      content: "Current Financial Year",
      colSpan: 5,
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      colSpan: 5,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Equal to Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content: "More than Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Equal to Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content: "More than Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Male" },
    { content: "", isInput: true },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "", isInput: true },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
  ],
  [
    {
      content: "Employees",
      colSpan: 11,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [{ content: "Permanent" }, ...Array(10).fill({ content: "", isInput: true })],
  [
    { content: "Other than Permanent" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
  [
    { content: "Total Employees" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
  [
    {
      content: "Workers",
      colSpan: 11,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [{ content: "Permanent" }, ...Array(10).fill({ content: "", isInput: true })],
  [
    { content: "Other than Permanent" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
  [
    { content: "Total Workers" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
];

export const WageComparisonTable2: TableConfig = [
  [
    {
      content: "Category",
      rowSpan: 2,
      className: "font-semibold ",
    },
    {
      content: "Current Financial Year",
      colSpan: 5,
      className: "font-semibold text-center ",
    },
    {
      content: "Previous Financial Year",
      colSpan: 5,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Equal to Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content: "More than Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    { content: "Total", className: "font-semibold text-center " },
    {
      content: "Equal to Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content: "More than Minimum Wage",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Male" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
    { content: "Number", className: "text-center" },
    { content: "Percentage", className: "text-center" },
  ],
  [
    {
      content: "Employees",
      colSpan: 11,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [{ content: "Permanent" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Male" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Female" }, ...Array(10).fill({ content: "", isInput: true })],
  [
    { content: "Other than Permanent" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
  [{ content: "Male" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Female" }, ...Array(10).fill({ content: "", isInput: true })],
  [
    {
      content: "Workers",
      colSpan: 11,
      className: "font-semibold text-center bg-neutral-200",
    },
  ],
  [{ content: "Permanent" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Male" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Female" }, ...Array(10).fill({ content: "", isInput: true })],
  [
    { content: "Other than Permanent" },
    ...Array(10).fill({ content: "", isInput: true }),
  ],
  [{ content: "Male" }, ...Array(10).fill({ content: "", isInput: true })],
  [{ content: "Female" }, ...Array(10).fill({ content: "", isInput: true })],
];

export const RemunerationTable: TableConfig = [
  [
    { content: "", rowSpan: 2, className: "font-semibold " },
    {
      content: "Male",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
    {
      content: "Female",
      colSpan: 2,
      className: "font-semibold text-center ",
    },
  ],
  [
    {
      content: "Number",
      className: "font-semibold text-center ",
    },
    {
      content: "Median remuneration/ salary/ wages of respective category",
      className: "font-semibold text-center ",
    },
    {
      content: "Number",
      className: "font-semibold text-center ",
    },
    {
      content: "Median remuneration/ salary/ wages of respective category",
      className: "font-semibold text-center ",
    },
  ],
  [
    { content: "Board of Directors (BoD)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Key Managerial Personnel" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Employees other than BoD and KMP" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];
