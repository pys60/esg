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

//PAGE 3
export const humanRightsIssuesTableConfig = [
  [
    { content: "", rowSpan: 2, className: "font-semibold bg-neutral-100" },
    {
      content: "FY Current Financial Year",
      colSpan: 3,
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      colSpan: 3,
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    {
      content: "Filed during the year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "Pending resolution at the end of year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "Filed during the year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "Pending resolution at the end of year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    { content: "Sexual Harassment" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Discrimination at workplace" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Child Labour" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Forced Labour/Involuntary Labour" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Wages" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Other human rights related issues" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const plantAssessmentConfig = [
  [
    { content: "", className: "font-semibold bg-neutral-100" },
    {
      content:
        "% of your plants and offices that were assessed (by entity or statutory authorities or third parties)",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [{ content: "Child labour" }, { content: "", isInput: true }],
  [{ content: "Forced/Involuntary labour" }, { content: "", isInput: true }],
  [{ content: "Sexual harassment" }, { content: "", isInput: true }],
  [{ content: "Discrimination at workplace" }, { content: "", isInput: true }],
  [{ content: "Wages" }, { content: "", isInput: true }],
  [{ content: "Others – please specify" }, { content: "", isInput: true }],
];

export const valueChainAssessmentConfig = [
  [
    { content: "", className: "font-semibold bg-neutral-100" },
    {
      content:
        "% of value chain partners (by value of business done with such partners) that were assessed",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [{ content: "Sexual Harassment" }, { content: "", isInput: true }],
  [{ content: "Discrimination at workplace" }, { content: "", isInput: true }],
  [{ content: "Child Labour" }, { content: "", isInput: true }],
  [
    { content: "Forced Labour/Involuntary Labour" },
    { content: "", isInput: true },
  ],
  [{ content: "Wages" }, { content: "", isInput: true }],
  [{ content: "Others – please specify" }, { content: "", isInput: true }],
];

export const energyConsumptionConfig = [
  [
    { content: "Parameter", className: "font-semibold bg-neutral-100" },
    {
      content: "FY Current Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    { content: "Total electricity consumption (A)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total fuel consumption (B)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Energy consumption through other sources (C)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total Energy Consumption (A+B+C)", className: "font-semibold" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Energy intensity per rupee of turnover\n(Total energy consumption/ turnover in rupees)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Energy intensity (optional) – the relevant metric may be selected by the entity",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const waterWithdrawalConfig = [
  [
    { content: "Parameter", className: "font-semibold bg-neutral-100" },
    {
      content: "FY Current Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    {
      content: "Water withdrawal by source (in kilolitres)",
      colSpan: 3,
      className: "font-semibold",
    },
  ],
  [
    { content: "(i) Surface water" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) Groundwater" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) Third party water" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iv) Seawater / desalinated water" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(v) Others" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Total volume of water withdrawal\n(in kilolitres) (i + ii + iii + iv + v)",
      className: "font-semibold",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total volume of water consumption\n(in kilolitres)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Water intensity per rupee of turnover (Water consumed / turnover)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Water intensity (optional) – the relevant metric may be selected by the entity",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const airEmissionsConfig = [
  [
    { content: "Parameter", className: "font-semibold bg-neutral-100" },
    {
      content: "Please specify unit",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Current Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    { content: "NOx" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "SOx" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Particulate matter (PM)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Persistent organic pollutants (POP)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Volatile organic compounds (VOC)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Hazardous air pollutants (HAP)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Others – please specify" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const emissionsConfig = [
  [
    { content: "Parameter", className: "font-semibold bg-neutral-100" },
    { content: "Unit", className: "font-semibold text-center bg-neutral-100" },
    {
      content: "FY Current Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    {
      content:
        "Total Scope 1 emissions\n(Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)",
    },
    { content: "Metric tonnes of CO2 equivalent" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Total Scope 2 emissions\n(Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)",
    },
    { content: "Metric tonnes of CO2 equivalent" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total Scope 1 and Scope 2 emissions per rupee of turnover" },
    { content: "" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Total Scope 1 and Scope 2\nemission intensity (optional) – the relevant metric may be selected by the entity",
    },
    { content: "" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Volatile organic compounds (VOC)" },
    { content: "" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Hazardous air pollutants (HAP)" },
    { content: "" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Others – please specify" },
    { content: "" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const wasteManagementConfig = [
  [
    { content: "Parameter", className: "font-semibold bg-neutral-100" },
    {
      content: "FY Current Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
    {
      content: "FY Previous Financial Year",
      className: "font-semibold text-center bg-neutral-100",
    },
  ],
  [
    {
      content: "Total Waste generated (in metric tonnes)",
      colSpan: 3,
      className: "font-semibold bg-neutral-200",
    },
  ],
  [
    { content: "Plastic waste (A)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "E-waste (B)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Bio-medical waste (C)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Construction and demolition waste (D)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Radioactive waste (F)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Other Hazardous waste. Please specify, if any. (G)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Other Non-hazardous waste generated (H). Please specify, if any. (Break-up by composition i.e. by materials relevant to the sector)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total (A+B + C + D + E + F + G + H)",
      className: "font-semibold",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "For each category of waste generated, total waste recovered through recycling, re-using or other recovery operations (in metric tonnes)",
      colSpan: 3,
      className: "font-semibold bg-neutral-200",
    },
  ],
  [
    { content: "Category of waste" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(i) Recycled" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) Re-used" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) Other recovery operations" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total", className: "font-semibold" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "For each category of waste generated, total waste disposed by nature of disposal method (in metric tonnes)",
      colSpan: 3,
      className: "font-semibold bg-neutral-200",
    },
  ],
  [
    { content: "Category of waste" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(i) Incineration" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) Landfilling" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) Other disposal operations" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total", className: "font-semibold" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const environmentalComplianceConfig = [
  [
    { content: "S. No.", className: "font-semibold bg-neutral-100" },
    {
      content: "Location of operations/offices",
      className: "font-semibold bg-neutral-100",
    },
    {
      content: "Type of operations",
      className: "font-semibold bg-neutral-100",
    },
    {
      content:
        "Whether the conditions of environmental approval / clearance are being complied with? (Y/N) If no, the reasons thereof and corrective action taken, if any.",
      className: "font-semibold bg-neutral-100",
    },
  ],
  [
    { content: "1", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "2", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "3", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const eiaNotificationConfig = [
  [
    {
      content: "Name and brief details of project",
      className: "font-semibold bg-neutral-100",
    },
    {
      content: "EIA Notification No.",
      className: "font-semibold bg-neutral-100",
    },
    { content: "Date", className: "font-semibold bg-neutral-100" },
    {
      content: "Whether conducted by independent external agency (Yes / No)",
      className: "font-semibold bg-neutral-100",
    },
    {
      content: "Results communicated in public domain (Yes / No)",
      className: "font-semibold bg-neutral-100",
    },
    { content: "Relevant Web link", className: "font-semibold bg-neutral-100" },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const specificLawTable: TableConfig = [
  [
    { content: "S. No.", className: "header-cell", width: "10%" },
    {
      content:
        "Specify the law / regulation / guidelines which was not complied with",
      className: "header-cell",
      width: "30%",
    },
    {
      content: "Provide details of the non-compliance",
      className: "header-cell",
      width: "20%",
    },
    {
      content:
        "Any fines / penalties / action taken by regulatory agencies such as pollution control boards or by courts",
      className: "header-cell",
      width: "20%",
    },
    {
      content: "Corrective action taken, if any",
      className: "header-cell",
      width: "20%",
    },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const energyConsumptionTableConfig: TableConfig = [
  [
    { content: "Parameter", className: "header-cell", width: "40%" },
    {
      content: "FY Current Financial Year",
      className: "header-cell",
      width: "30%",
    },
    {
      content: "FY Previous Financial Year",
      className: "header-cell",
      width: "30%",
    },
  ],
  [
    {
      content: "From renewable sources",
      className: "section-header",
      colSpan: 3,
    },
  ],
  [
    { content: "Total electricity consumption (A)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total fuel consumption (B)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Energy consumption through other sources (C)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total energy consumed from renewable sources (A+B+C)",
      className: "section-footer",
      colSpan: 3,
    },
  ],
  [
    {
      content: "From non-renewable sources",
      className: "section-header",
      colSpan: 3,
    },
  ],
  [
    { content: "Total electricity consumption (D)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total fuel consumption (E)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Energy consumption through other sources (F)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total energy consumed from non-renewable sources (D+E+F)",
      className: "section-footer",
      colSpan: 3,
    },
  ],
];

export const waterDischargeTableConfig: TableConfig = [
  [
    { content: "Parameter", rowSpan: 2, colSpan: 1 },
    { content: "FY Current Financial Year", rowSpan: 1, colSpan: 1 },
    { content: "FY Previous Financial Year", rowSpan: 1, colSpan: 1 },
  ],
  [
    {
      content:
        "Water discharge by destination and level of treatment (in kilolitres)",
      colSpan: 3,
    },
  ],
  [
    { content: "(i) To Surface water" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) To Groundwater" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) To Seawater" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iv) Sent to third-parties" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(v) Others" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Total water discharged (in kilolitres)", colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const waterWithdrawalConsumptionTableConfig: TableConfig = [
  [
    { content: "Parameter", rowSpan: 1, colSpan: 1 },
    { content: "FY Current Financial Year", rowSpan: 1, colSpan: 1 },
    { content: "FY Previous Financial Year", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "Water withdrawal by source (in kilolitres)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(i) Surface water", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) Groundwater", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) Third party water", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iv) Seawater / desalinated water", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(v) Others", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total volume of water withdrawal (in kilolitres)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total volume of water consumption (in kilolitres)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Water intensity per rupee of turnover (Water consumed / turnover)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(i) Into Surface water" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(ii) Into Groundwater" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iii) Into Seawater" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(iv) Sent to third-parties" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "(v) Others" },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "• No treatment", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "• With treatment – please specify level of treatment",
      rowSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total water discharged (in kilolitres)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const greenhouseGasEmissionsTableConfig: TableConfig = [
  [
    { content: "Parameter", rowSpan: 1, colSpan: 1 },
    { content: "Unit", rowSpan: 1, colSpan: 1 },
    { content: "FY - Current Financial Year", rowSpan: 1, colSpan: 1 },
    { content: "FY - Previous Financial Year", rowSpan: 1, colSpan: 1 },
  ],
  [
    {
      content:
        "Total Scope 3 emissions\n(Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "Metric tonnes of CO2 equivalent", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Total Scope 3 emissions per rupee of turnover",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Total Scope 3 emission intensity (optional) – the\nrelevant metric may be selected by the entity",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", rowSpan: 1, colSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const initiativesTableConfig: TableConfig = [
  [
    { content: "Sr. No.", rowSpan: 1, colSpan: 1 },
    { content: "Initiative undertaken", rowSpan: 1, colSpan: 1 },
    {
      content:
        "Details of the initiative (Web-link, if any, may be\nprovided along-with summary)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "Outcome of the initiative", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const tradeIndustryChamberTableConfig: TableConfig = [
  [
    { content: "S. No.", rowSpan: 1, colSpan: 1 },
    {
      content: "Name of the trade and industry chambers/ associations",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      content:
        "Reach of trade and industry chambers/ associations(State/National)",
      rowSpan: 1,
      colSpan: 1,
    },
  ],
  [
    { content: "1", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "2", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "3", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "4", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "5", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "6", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "7", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "8", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "9", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "10", rowSpan: 1 },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const authorityCorrectionActionTableConfig: TableConfig = [
  [
    { content: "Name of authority", rowSpan: 1, colSpan: 1 },
    { content: "Brief of the case", rowSpan: 1, colSpan: 1 },
    { content: "Corrective action taken", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const publicPolicyAdvocacyTableConfig: TableConfig = [
  [
    { content: "S. No.", rowSpan: 1, colSpan: 1 },
    { content: "Public policy advocated", rowSpan: 1, colSpan: 1 },
    { content: "Method resorted for such\nadvocacy", rowSpan: 1, colSpan: 1 },
    {
      content: "Whether information available in\npublic domain? (Yes/No)",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      content:
        "Frequency of Review by Board\n(Annually/ Half yearly/ Quarterly /\nOthers – please specify)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "Web Link, if available", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const projectDetailsTableConfig: TableConfig = [
  [
    {
      content: "Name and brief details of project",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "SIA Notification No.", rowSpan: 1, colSpan: 1 },
    { content: "Date of notification", rowSpan: 1, colSpan: 1 },
    {
      content: "Whether conducted by\nindependent external agency\n(Yes / No)",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      content: "Results communicated in public\ndomain\n(Yes / No)",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "Relevant Web link", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const sourcingDetailsTableConfig: TableConfig = [
  [
    { content: "", rowSpan: 1, colSpan: 1 },
    { content: "FY - Current Financial Year", rowSpan: 1, colSpan: 1 },
    { content: "FY - Previous Financial Year", rowSpan: 1, colSpan: 1 },
  ],
  [
    {
      content: "Directly sourced from MSMEs/ small producers",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Sourced directly from within the district and neighbouring districts",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const negativeSocialImpactTableConfig: TableConfig = [
  [
    {
      content: "Details of negative social impact identified",
      rowSpan: 1,
      colSpan: 1,
    },
    { content: "Corrective action taken", rowSpan: 1, colSpan: 1 },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const aspirationalDistrictSpendingTable: TableConfig = [
  [
    { content: "S. No.", width: "10%" },
    { content: "State", width: "25%" },
    { content: "Aspirational District", width: "35%" },
    { content: "Amount spent (In INR)", width: "30%" },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "25%" },
    { content: "", isInput: true, width: "35%" },
    { content: "", isInput: true, width: "30%" },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "25%" },
    { content: "", isInput: true, width: "35%" },
    { content: "", isInput: true, width: "30%" },
  ],
];

//PAGE 4
export const traditionalKnowledgeIPTable: TableConfig = [
  [
    { content: "S. No.", width: "10%" },
    {
      content: "Intellectual Property based on traditional knowledge",
      width: "30%",
    },
    { content: "Owned/ Acquired (Yes/No)", width: "20%" },
    { content: "Benefit shared (Yes / No)", width: "20%" },
    { content: "Basis of calculating benefit share", width: "20%" },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "30%" },
    { content: "", isInput: true, width: "20%" },
    { content: "", isInput: true, width: "20%" },
    { content: "", isInput: true, width: "20%" },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "30%" },
    { content: "", isInput: true, width: "20%" },
    { content: "", isInput: true, width: "20%" },
    { content: "", isInput: true, width: "20%" },
  ],
];

export const complianceMonitoringTable: TableConfig = [
  [
    { content: "Name of authority", width: "25%" },
    { content: "Brief of the Case", width: "45%" },
    { content: "Corrective action taken", width: "30%" },
  ],
  [
    { content: "", isInput: true, width: "25%" },
    { content: "", isInput: true, width: "45%" },
    { content: "", isInput: true, width: "30%" },
  ],
  [
    { content: "", isInput: true, width: "25%" },
    { content: "", isInput: true, width: "45%" },
    { content: "", isInput: true, width: "30%" },
  ],
];

export const csrProjectTable: TableConfig = [
  [
    { content: "S. No.", width: "10%" },
    { content: "CSR Project", width: "40%" },
    { content: "No. of persons benefitted from CSR Projects", width: "30%" },
    {
      content: "% of beneficiaries from vulnerable and marginalized groups",
      width: "20%",
    },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "40%" },
    { content: "", isInput: true, width: "30%" },
    { content: "", isInput: true, width: "20%" },
  ],
  [
    { content: "", isInput: true, width: "10%" },
    { content: "", isInput: true, width: "40%" },
    { content: "", isInput: true, width: "30%" },
    { content: "", isInput: true, width: "20%" },
  ],
];

export const environmentalSocialParametersConfig = [
  [
    { content: "" },
    {
      content: "As a percentage to total turnover",
    },
  ],
  [
    {
      content: "Environmental and social parameters relevant to the product",
    },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Safe and responsible usage",
    },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Recycling and/or safe disposal",
    },
    { content: "", isInput: true },
  ],
];

export const financialYearComparisonConfig = [
  [
    { content: "" },
    { content: "Current Financial Year", colSpan: 2 },
    { content: "Remarks" },
    { content: "FY - Previous Financial Year", colSpan: 2 },
    { content: "Remarks" },
  ],
  [
    { content: "" },
    { content: "Received during the year" },
    { content: "Pending resolution at end of year" },
    { content: "" },
    { content: "Received during the year" },
    { content: "Pending resolution at end of year" },
    { content: "" },
  ],
  [
    { content: "Data privacy" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Advertising" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Cyber-security" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Delivery of essential services" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Restrictive Trade Practices" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Unfair Trade Practices" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Other" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const productRecallTableConfig: TableConfig = [
  [
    {
      content: "",
    },
    {
      content: "Number",
    },
    {
      content: "Reason for recall",
    },
  ],
  [
    {
      content: "Voluntary recalls",
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
      content: "Forced recalls",
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

//PAGE 1
export const businessActivityTable: TableConfig = [
  [
    { content: "S. No.", className: "font-semibold " },
    { content: "Description of main Activity", className: "font-semibold " },
    {
      content: "Description of Business Activity",
      className: "font-semibold ",
    },
    { content: "% of Turnover of the Entity", className: "font-semibold " },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const productServiceTable: TableConfig = [
  [
    { content: "S. No.", className: "font-semibold " },
    { content: "Product/Service", className: "font-semibold " },
    { content: "NIC Code", className: "font-semibold " },
    { content: "% of Total Turnover Contributed", className: "font-semibold " },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const locationTable: TableConfig = [
  [
    { content: "Location", className: "font-semibold " },
    { content: "Number of plants", className: "font-semibold " },
    { content: "Number of offices", className: "font-semibold " },
    { content: "Total", className: "font-semibold " },
  ],
  [
    { content: "National" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "International" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const employeeTable = [
  [
    { content: "S. No.", className: "font-semibold " },
    { content: "Particulars", className: "font-semibold " },
    { content: "Total", className: "font-semibold " },
    { content: "Male", className: "font-semibold " },
    { content: "Male Percentage(%)", className: "font-semibold " },
    { content: "Female No.", className: "font-semibold " },
    { content: "Female Percentage (%)", className: "font-semibold " },
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "2" },
    { content: "Other than permanent" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "3" },
    { content: "Total Employees" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "5" },
    { content: "Other than Permanent" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "6" },
    { content: "Total Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const stakeholderGrievanceTable = [
  [
    {
      content: "Stakeholder group from whom complaint is received",
      rowSpan: 2,
      className: "font-semibold align-middle",
    },
    {
      content:
        "Grievance Redressal Mechanism in Place (Yes/No) (If Yes, then provide web-link for grievance redress policy)",
      rowSpan: 2,
      className: "font-semibold align-middle",
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
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints pending resolution at close of the year",
      className: "font-semibold text-center",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints filed during the year",
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints pending resolution at close of the year",
      className: "font-semibold text-center",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center",
    },
  ],
  [
    { content: "Communities" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Investors (other than shareholders)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const stakeholderGrievanceTable2 = [
  [
    {
      content: "Stakeholder group from whom complaint is received",
      rowSpan: 2,
      className: "font-semibold align-middle",
    },
    {
      content:
        "Grievance Redressal Mechanism in Place (Yes/No) (If Yes, then provide web-link for grievance redress policy)",
      rowSpan: 2,
      className: "font-semibold align-middle",
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
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints pending resolution at close of the year",
      className: "font-semibold text-center",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints filed during the year",
      className: "font-semibold text-center",
    },
    {
      content: "Number of complaints pending resolution at close of the year",
      className: "font-semibold text-center",
    },
    {
      content: "Remarks",
      className: "font-semibold text-center",
    },
  ],
  [
    { content: "Stakeholders" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Employees and Workers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Customers" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Value Chain Partners" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "other (please specify)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const materialIssuesTable: TableConfig = [
  [
    { content: "S.No", className: "font-semibold " },
    { content: "Material issue Identified", className: "font-semibold " },
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const disclosureQuestionsTable: TableConfig = [
  [
    {
      content: "Disclosure Questions",
      className: "font-semibold",
      colSpan: 1,
    },
    {
      content: "P1",
      className: "font-semibold text-center",
    },
    {
      content: "P2",
      className: "font-semibold text-center",
    },
    {
      content: "P3",
      className: "font-semibold text-center",
    },
    {
      content: "P4",
      className: "font-semibold text-center",
    },
    {
      content: "P5",
      className: "font-semibold text-center",
    },
    {
      content: "P6",
      className: "font-semibold text-center",
    },
    {
      content: "P7",
      className: "font-semibold text-center",
    },
    {
      content: "P8",
      className: "font-semibold text-center",
    },
    {
      content: "P9",
      className: "font-semibold text-center",
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
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content: "b. Has the policy been approved by the Board? (Yes/No)",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content: "c. Web Link of the Policies, if available",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content:
        "2. Whether the entity has translated the policy into procedures. (Yes / No)",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content:
        "3. Do the enlisted policies extend to your value chain partners? (Yes/No)",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content:
        "4. Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle.",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content:
        "5. Specific commitments, goals and targets set by the entity with defined timelines, if any.",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
  ],
  [
    {
      content:
        "6. Performance of the entity against the specific commitments, goals and targets along-with reasons in case the same are not met.",
      className: "pl-4",
    },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
    { content: "", className: "text-center", isInput: true },
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
];

export const policyReviewTable = [
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
      className: "font-semibold align-middle",
    },
    {
      content:
        "Indicate whether review was undertaken by Director / Committee of the Board/ Any other Committee",
      colSpan: 9,
      className: "font-semibold text-center",
    },
    {
      content:
        "Frequency (Annually/ Half yearly/Quarterly/ Any other – please specify)",
      colSpan: 9,
      className: "font-semibold text-center",
    },
  ],
  [
    ...Array(9)
      .fill(0)
      .map((_, i) => ({
        content: `P${i + 1}`,
        className: "font-semibold text-center",
        isInput: true,
      })),
    ...Array(9)
      .fill(0)
      .map((_, i) => ({
        content: `P${i + 1}`,
        className: "font-semibold text-center",
        isInput: true,
      })),
  ],
  [
    {
      content: "Performance against above policies and follow up action",
    },
    ...Array(18).fill({ content: "", isInput: true }),
  ],
  [
    {
      content:
        "Compliance with statutory requirements of relevance to the principles, and, rectification of any non-compliances",
    },
    ...Array(18).fill({ content: "", isInput: true }),
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
  [...Array(9).fill({ content: "", colSpan: 2, isInput: true })],
];

export const policyMaterialityTable: TableConfig = [
  [
    { content: "Questions", className: "font-semibold " },
    {
      content: "P1",
      className: "font-semibold text-center",
    },
    {
      content: "P2",
      className: "font-semibold text-center",
    },
    {
      content: "P3",
      className: "font-semibold text-center",
    },
    {
      content: "P4",
      className: "font-semibold text-center",
    },
    {
      content: "P5",
      className: "font-semibold text-center",
    },
    {
      content: "P6",
      className: "font-semibold text-center",
    },
    {
      content: "P7",
      className: "font-semibold text-center",
    },
    {
      content: "P8",
      className: "font-semibold text-center",
    },
    {
      content: "P9",
      className: "font-semibold text-center",
    },
  ],
  [
    {
      content:
        "The entity does not consider the Principles material to its business (Yes/No)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "The entity is not at a stage where it is in a position to formulate and implement the policies on specified principles (Yes/No)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "The entity does not have the financial or/human and technical resources available for the task (Yes/No)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "It is planned to be done in the next financial year (Yes/No)",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Any other reason (please specify)" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const trainingAndAwarenessTable: TableConfig = [
  [
    {
      content: "Segment",
      className: "font-semibold",
      width: "20vw",
    },
    {
      content: "Total number of training and awareness programmes held",
      className: "font-semibold",
    },
    {
      content: "Topics / principles covered under the training and its impact",
      className: "font-semibold",
    },
    {
      content:
        "%age of persons in respective category covered by the awareness programmes",
      className: "font-semibold",
    },
  ],
  [
    {
      content: "Board of Directors",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Key Managerial Personnel",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Employees other than BoD and KMPs",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content: "Workers",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];

export const complianceTable: TableConfig = [
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Settlement" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    { content: "Compounding fee" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    {
      content: "",
      colSpan: 2,
      isInput: true,
    },
  ],
  [
    { content: "Punishment" },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    {
      content: "",
      colSpan: 2,
      isInput: true,
    },
  ],
];

export const conflictOfInterestTable = [
  [
    {
      content: "",
      width: "20vw",
    },
    {
      content: "FY (Current Financial Year)",
      className: "font-semibold",
      colSpan: 2,
    },
    {
      content: "FY (Previous Financial Year)",
      className: "font-semibold",
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
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
  [
    {
      content:
        "Number of complaints received in relation to issues of Conflict of Interest of the KMPs",
    },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
    { content: "", isInput: true },
  ],
];
