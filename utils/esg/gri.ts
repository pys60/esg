const environmental = {
  picture: {
    label: 'Upload Your Picture',
    value: [],
    type: 'file',
    url: '',
    required: false,
    isAutoFill: false,
    isArea: false,
  },
  organizationScope: {
    label: `What are the organization's Scope 1 and Scope 2 GHG emissions, and, if applicable, Scope 3 emissions?`,
    value: '',
    value2: '',
    value3: '',
    type: 'text',
    required: false,
    isAutoFill: true,
    isArea: true,
  },
  assessmentEnvironmentalImpact: {
    label: "How does your organization assess its environmental impact?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  significantEnvironmentalImpacts: {
    label: "What significant environmental impacts have been identified in your value chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageWaterWithdrawal: {
    label: "How do you manage water withdrawal in water-stressed areas?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  improveEnergyEfficiency: {
    label: "What measures are in place to improve energy efficiency within your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  wasteManagement: {
    label: "What is the total volume of waste generated, and what strategies are in place for waste management?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  biodiversityConservation: {
    label: "How do you address biodiversity conservation in areas affected by your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  greenhouseGasEmissions: {
    label: "What is your total direct and indirect greenhouse gas emissions?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  mitigateEnvironmentalImpacts: {
    label: "What initiatives have been undertaken to mitigate environmental impacts from your products and services?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  ensureEnvironmentalCompliance: {
    label: "How do you ensure environmental compliance, and what have been the related costs?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  renewableEnergyUsage: {
    label: "What percentage of your energy is sourced from renewable sources?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageEffluentsAndWaste: {
    label: "How do you manage effluents and waste, including hazardous waste?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  reduceOzoneDepletingSubstances: {
    label: "What steps are being taken to reduce emissions of ozone-depleting substances?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  assessManageEnvironmentalRisks: {
    label: "How do you assess and manage environmental risks in your supply chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  longTermEnvironmentalTargets: {
    label: "What are your long-term targets for reducing your environmental footprint?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  stakeholderEngagement: {
    label: "How do you engage with stakeholders on environmental issues?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalImpactAssessments: {
    label: "Describe any environmental impact assessments for new projects.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  soilContaminationAndLandRehabilitation: {
    label: "How do you address soil contamination and land rehabilitation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  waterRecyclingAndReuse: {
    label: "What is your approach to water recycling and reuse?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalConsiderationsInProductDesign: {
    label: "How are environmental considerations integrated into product design?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainableResourceUsePolicies: {
    label: "What policies are in place for sustainable resource use?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  airQualityManagement: {
    label: "How do you manage air quality and control air emissions?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalStewardshipInitiatives: {
    label: "What initiatives are in place for environmental stewardship and conservation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  packagingMinimization: {
    label: "Describe your approach to packaging to minimize environmental impact.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  noisePollutionMonitoring: {
    label: "How do you monitor and manage noise pollution?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  energyConservationStrategies: {
    label: "What strategies are employed to ensure energy conservation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  logisticsAndTransportationImpacts: {
    label: "How do you address the environmental impacts of logistics and transportation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  plasticsPolicy: {
    label: "What is your policy on the use and disposal of plastics?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  renewableEnergyProjects: {
    label: "Describe any renewable energy projects you are involved in.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  marineAndFreshwaterEcosystemProtection: {
    label: "How do you manage and protect marine and freshwater ecosystems?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalSpillPreventionAndAddressing: {
    label: "What measures are taken to prevent and address environmental spills?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  supplierEngagementOnEnvironmentalPerformance: {
    label: "How do you engage with suppliers on environmental performance?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  nonRenewableResourcesReductionGoals: {
    label: "What are your goals for reducing use of non-renewable resources?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  productLifecycleEnvironmentalImpactAssessment: {
    label: "How do you assess the lifecycle environmental impact of your products?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  carbonOffsettingAndSequestrationStrategy: {
    label: "What is your strategy for carbon offsetting and sequestration?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  biodiversityPromotion: {
    label: "How do you promote biodiversity through your operations or products?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalNGOCollaborations: {
    label: "Describe any collaborations with environmental NGOs or initiatives.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  supplyChainEnvironmentalSustainability: {
    label: "How do you ensure the environmental sustainability of your supply chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalRestorationPractices: {
    label: "What practices do you have in place for environmental restoration?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  localEcosystemImpactManagement: {
    label: "How do you manage the impact of your operations on local ecosystems?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  greenCertificationsOrLabels: {
    label: "Describe any green certifications or labels your products have achieved.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  climateChangeImpactManagement: {
    label: "How do you monitor and manage the impacts of climate change on your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainableAgriculturePractices: {
    label: "What strategies do you have for sustainable agriculture practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  contributionToCircularEconomy: {
    label: "How do you contribute to circular economy principles?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalTechnologyInvestments: {
    label: "Describe your investments in environmental technologies.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  animalTreatmentPolicy: {
    label: "How do you ensure responsible use and treatment of animals in your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  landUseAndDeforestationApproach: {
    label: "What is your approach to land use and preventing deforestation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  electronicAndHazardousWasteManagement: {
    label: "How do you manage electronic and hazardous waste?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  lightPollutionMinimization: {
    label: "What steps are taken to minimize light pollution?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  rawMaterialEnvironmentalImpacts: {
    label: "How do you assess and address the environmental impacts of your raw materials?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  environmentalEducationInitiatives: {
    label: "Describe any environmental education and awareness initiatives you participate in or support.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  }
}
const social = {
  picture: {
    label: 'Upload Your Picture',
    value: [],
    type: 'file',
    url: '',
    required: false,
    isAutoFill: false,
    isArea: false,
  },
  organisationSupport: {
    label: "How does your organization support employee health and safety?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  policies: {
    label: "What policies are in place to ensure fair labor practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  employeeTraining: {
    label: "How do you assess and manage human rights risks in your operations and supply chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  diversity: {
    label: "Describe your approach to diversity and inclusion within your workforce.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  descrimination: {
    label: "What mechanisms are in place for addressing and preventing discrimination?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  workLifeBalance: {
    label: "How do you support employee training and education?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  communityEngagement: {
    label: "What measures do you take to ensure work-life balance for your employees?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  consumerHealth: {
    label: "How do you engage with and support the communities in which you operate?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  consumerPrivacy: {
    label: "Describe your policies on consumer health and safety.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  customerData: {
    label: "How do you ensure the privacy and security of customer data?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  economicDevelopment: {
    label: "What initiatives do you have to support local economic development?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  indigenousPeoples: {
    label: "How do you manage your impact on indigenous peoples?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  responsibleSourcing: {
    label: "What practices do you have for responsible sourcing and procurement?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  productLabeling: {
    label: "How do you ensure product and service labeling is accurate and transparent?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  stakeholderEngagement: {
    label: "Describe your approach to stakeholder engagement and dialogue.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialGrievances: {
    label: "How do you address grievances from affected communities?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  employeeVolunteerism: {
    label: "What programs do you have in place for employee volunteerism?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  childrenRights: {
    label: "How do you support the rights and welfare of children in your operations and supply chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  forcedLabor: {
    label: "What is your approach to preventing and addressing forced and child labor?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  consumerRights: {
    label: "How do you promote consumer rights and satisfaction?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  healthWellness: {
    label: "Describe your initiatives to promote health and wellness in the workplace.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  freedomAssociation: {
    label: "What is your policy on freedom of association and collective bargaining?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  womenEmpowerment: {
    label: "How do you support the development and empowerment",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialInitiatives: {
    label: "Describe any partnerships with NGOs or social initiatives you are involved in.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialImpacts: {
    label: "How do you address the social impacts of your operations on local communities?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  culturalHeritage: {
    label: "What measures do you take to protect and promote cultural heritage?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialRisks: {
    label: "How do you manage social risks associated with new projects or expansions?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  accessibilityInclusion: {
    label: "What is your approach to accessibility and inclusion in your products/services?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  disasterRelief: {
    label: "How do you contribute to disaster relief and humanitarian efforts?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  povertySupport: {
    label: "Describe your initiatives to address poverty and support vulnerable groups.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  ethicalMarketing: {
    label: "How do you ensure ethical marketing and advertising practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  digitalDivide: {
    label: "What strategies do you employ to address digital divide issues?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  displacementImpact: {
    label: "How do you manage the impacts of displacement caused by your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  genderEquality: {
    label: "What is your stance and action on gender equality and empowerment?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  mentalHealth: {
    label: "How do you support employee mental health and well-being?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialSupplyChain: {
    label: "Describe your approach to managing the social aspects of your supply chain.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  politicalContributions: {
    label: "What is your policy on political contributions and lobbying activities?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialGrievancesStakeholders: {
    label: "How do you address social grievances from your stakeholders?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  educationLiteracy: {
    label: "What initiatives do you have for promoting education and literacy?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  productSafety: {
    label: "How do you ensure the safety and quality of your products and services?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainableLifestyles: {
    label: "Describe your efforts to promote sustainable lifestyles through your products/services.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  migrantsRefugees: {
    label: "How do you support the social and economic integration of migrants and refugees?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainableTourism: {
    label: "What is your approach to sustainable tourism practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  publicServices: {
    label: "How do you manage the impact of your operations on public services and infrastructure?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  digitalInclusion: {
    label: "Describe your initiatives to promote digital literacy and inclusion.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  climateChange: {
    label: "How do you address the social implications of climate change?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sexualHarassment: {
    label: "What measures are in place to prevent sexual harassment and violence in the workplace?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  fairTreatment: {
    label: "How do you ensure fair treatment and non-discrimination of vulnerable groups?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  socialBenefits: {
    label: "What is your approach to providing social benefits and support to employees?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  supplierPerformance: {
    label: "How do you engage with suppliers to improve their social performance?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },

}
const governance = {
  picture: {
    label: 'Upload Your Picture',
    value: [],
    type: 'file',
    url: '',
    required: false,
    isAutoFill: false,
    isArea: false,
  },
  governanceStructureSustainability: {
    label: "How is your governance structure organized to support sustainability?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  ethicalConductCompliance: {
    label: "Describe your policies and practices regarding ethical conduct and compliance.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  accountabilityTransparency: {
    label: "How do you ensure accountability and transparency in your operations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  stakeholderEngagementFeedback: {
    label: "What mechanisms are in place for stakeholder engagement and feedback?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  conflictsInterest: {
    label: "How do you manage conflicts of interest within your organization?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  riskManagementSustainability: {
    label: "Describe your approach to risk management, especially concerning sustainability risks.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  complianceLawsRegulations: {
    label: "How do you ensure compliance with laws and regulations across different jurisdictions?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  policyAntiCorruptionBribery: {
    label: "What is your policy on anti-corruption and bribery?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainabilityIntegratedBusinessStrategy: {
    label: "How is sustainability integrated into your business strategy and decision-making processes?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  practicesBoardDiversityIndependence: {
    label: "What are your practices for board diversity and independence?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageImpactLobbyingActivities: {
    label: "How do you assess and manage the impact of your lobbying activities?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  internalControlsAuditProcedures: {
    label: "Describe your internal controls and audit procedures for sustainability reporting.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  dataSecurityCyberThreats: {
    label: "How do you ensure data security and protect against cyber threats?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  approachShareholderRightsRelations: {
    label: "What is your approach to shareholder rights and relations?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageSustainabilityDisclosuresCommunications: {
    label: "How do you manage sustainability-related disclosures and communications?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainabilityCertificationsStandardsFrameworks: {
    label: "Describe any sustainability certifications, standards, or frameworks you adhere to.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  engageRegulatorsSustainabilityIssues: {
    label: "How do you engage with regulators on sustainability issues?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  processesSettingReviewingSustainabilityTargets: {
    label: "What processes do you have in place for setting and reviewing sustainability targets?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  monitorEvaluateEffectivenessGovernancePractices: {
    label: "How do you monitor and evaluate the effectiveness of your governance practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  policiesExecutiveCompensationAlignmentSustainabilityGoals: {
    label: "Describe your policies on executive compensation and alignment with sustainability goals.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageSustainabilityImpactsMergersAcquisitionsDivestitures: {
    label: "How do you manage the sustainability impacts of mergers, acquisitions, and divestitures?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  addressEthicalConcernsEmergingTechnologies: {
    label: "How do you address ethical concerns related to emerging technologies?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  practicesEngagingRespondingRegulatoryChanges: {
    label: "What are your practices for engaging with and responding to regulatory changes?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  continuousImprovementGovernancePractices: {
    label: "How do you ensure continuous improvement in your governance practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  strategyEngagingStakeholdersGovernanceIssues: {
    label: "Describe your strategy for engaging with stakeholders on governance issues.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  assessEffectivenessRiskManagementPractices: {
    label: "How do you assess the effectiveness of your risk management practices?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  policyDisclosingMaterialInformationStakeholders: {
    label: "What is your policy on disclosing material information to stakeholders?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  manageGovernanceAspectsSupplyChain: {
    label: "How do you manage the governance aspects of your supply chain?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  approachSustainableInvestmentFinancing: {
    label: "What is your approach to sustainable investment and financing?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  ensureIndependenceExternalAuditsAssessments: {
    label: "How do you ensure the independence of external audits and assessments?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  initiativesCombatingMoneyLaunderingTerroristFinancing: {
    label: "Describe your initiatives for combating money laundering and terrorist financing.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  governanceRelatedRisks: {
    label: "How do you manage and report on governance-related risks and opportunities?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  whistleblowerProtection: {
    label: "What mechanisms are in place for whistleblower protection and ethical reporting?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  climateChangeGovernance: {
    label: "How do you address the governance implications of climate change?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  stakeholderConflictsManagement: {
    label: "What is your approach to managing conflicts between stakeholder interests?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  ethicalBehaviorSuppliers: {
    label: "How do you ensure ethical behavior among suppliers and business partners?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  corporateCitizenship: {
    label: "Describe your approach to corporate citizenship and social responsibility.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  intellectualPropertyManagement: {
    label: "How do you manage intellectual property rights in a responsible manner?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  humanRightsDueDiligence: {
    label: "What is your policy on human rights due diligence?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  digitalTransformationGovernance: {
    label: "How do you address the governance challenges of digital transformation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  boardCompetencyESG: {
    label: "Describe your efforts to enhance board competency on ESG issues.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  aiEthicsManagement: {
    label: "How do you manage the ethical implications of AI and data usage?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  fairCompetitionCompliance: {
    label: "What is your approach to ensuring fair competition and anti-trust compliance?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainabilityInProductDevelopment: {
    label: "How do you ensure that sustainability considerations are integrated into product development?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  insiderTradingPrevention: {
    label: "What measures do you take to prevent insider trading and market manipulation?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  humanRightsImpactManagement: {
    label: "How do you manage the impacts of your business activities on human rights?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  corporateTransparencyEnhancement: {
    label: "What strategies do you employ to enhance corporate transparency?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  sustainabilityStandardsAlignment: {
    label: "How do you ensure that your sustainability efforts are aligned with international standards?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  collaborativeGovernanceInitiatives: {
    label: "Describe any collaborative initiatives with other organizations to promote good governance practices.",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  },
  governanceImpactEvaluation: {
    label: "How do you evaluate the impact of your governance practices on sustainability outcomes?",
    value: "",
    type: "text",
    required: false,
    isAutoFill: true,
    isArea: true
  }

}

export const GRI = { environmental, social, governance }