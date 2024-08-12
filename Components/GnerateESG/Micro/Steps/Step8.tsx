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

const Step8 = ({ title, nextstep, prevstep }: Props) => {
  const router = useRouterWithQuery();
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserStore();
  const [step8Data, setStep8Data] = useState({
    picture: {
      label: "Upload Your Picture",
      value: [],
      type: "file",
      url: "",
      required: false,
      isAutoFill: false,
      isArea: false,
    },
    envVariance: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Environmental Variance Analysis Questions",
    },
    carbonEmissionsVariance: {
      label:
        "What variances exist between projected and actual carbon emissions, and what factors contributed to these differences?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    waterUsageVariance: {
      label:
        "How did actual water usage figures compare with sustainability targets, identifying reasons for significant variances?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalIncidents: {
      label:
        "Were there unexpected environmental incidents, and what were their causes and impacts on planned environmental performance?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    wasteManagementVariance: {
      label:
        "What discrepancies occurred in waste management and recycling efforts compared to goals, and what influenced these outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    energyConsumptionVariance: {
      label:
        "How did energy consumption and efficiency measures perform against expectations, and what operational factors influenced these results?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    biodiversityImpactVariance: {
      label:
        "What was the variance in the impact on biodiversity and ecosystems compared to environmental commitments, and what caused these differences?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    pollutionControlVariance: {
      label:
        "How effective were pollution control measures versus planned objectives, and what operational or external factors affected these measures?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    renewableEnergyVariance: {
      label:
        "What differences were observed in the use of renewable energy sources compared to targets, including challenges and successes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalInvestmentVariance: {
      label:
        "How did actual investments in environmental technologies and practices compare with budgeted amounts, and what led to variances?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    conservationProjectVariance: {
      label:
        "Were there variances in the scope and success of environmental conservation projects, and what factors contributed to these outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    unexpectedEnvironmentalImpacts: {
      label:
        "What unexpected environmental benefits or challenges emerged, and how did they align with strategic environmental planning?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    soilWaterQualityVariance: {
      label:
        "How did soil and water quality management efforts compare with environmental health objectives, identifying causes for any discrepancies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    airQualityVariance: {
      label:
        "What variances were noted in achieving air quality standards and reducing emissions, and what were the operational impacts?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    nonRenewableResourceDependencyReduction: {
      label:
        "How did the company's efforts in reducing dependency on non-renewable resources fare against its environmental goals?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalTrainingEffectiveness: {
      label:
        "What was the effectiveness of environmental training programs for employees compared to expectations, and what influenced participation and outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    sustainableSourcingVariance: {
      label:
        "How did the implementation of sustainable sourcing practices for raw materials compare with planned initiatives, including barriers and successes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    waterConservationVariance: {
      label:
        "What differences were observed in water conservation measures against planned strategies, including factors that contributed to variances?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    circularEconomyTransitionImpacts: {
      label:
        "Were there unanticipated benefits or challenges in transitioning to a circular economy model, and how did these compare to initial plans?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    packagingImpactVariance: {
      label:
        "How did efforts to reduce environmental impact of product packaging compare with targets, and what influenced these outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalManagementCertificationVariance: {
      label:
        "What discrepancies were noted in the company's efforts to achieve environmental management system certifications (e.g., ISO 14001) compared to objectives?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    biodiversityProtectionVariance: {
      label:
        "What variances occurred in protecting endangered species and promoting biodiversity, and what unexpected factors contributed?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    pollutionImpactCommunities: {
      label:
        "How did levels of noise and light pollution from operations affect local communities compared to expectations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalAwarenessParticipation: {
      label:
        "What were the variances in participation rates and effectiveness of environmental awareness programs for employees?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    environmentalRiskMitigationNewProjects: {
      label:
        "How effective were measures to mitigate environmental risks associated with new projects or expansions?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    waterConservationStrategies: {
      label:
        "What differences were observed in the effectiveness of water conservation efforts compared to planned strategies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    soilWaterQualityStandards: {
      label:
        "How did actual soil and water quality measures compare to pre-set environmental standards and objectives?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    logisticsEnvironmentalImpactReduction: {
      label:
        "What discrepancies were observed in efforts to reduce the environmental impact of logistics and supply chain operations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    greenBuildingPracticesVariance: {
      label:
        "How did the actual implementation of green building practices and certifications compare with sustainability goals?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    hazardousSubstancesReductionVariance: {
      label:
        "What was the variance in the effectiveness of initiatives aimed at reducing the use of hazardous substances in operations and products?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    carbonOffsettingVariance: {
      label:
        "How did the company's carbon offsetting or sequestration projects perform against planned metrics, including factors influencing success or failure?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    socialHeading: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Social Variance Analysis Questions",
    },
    employeeDiversityInitiativesVariance: {
      label:
        "What was the variance between expected and actual outcomes in employee diversity and inclusion initiatives, including barriers or successes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    communityEngagementVariance: {
      label:
        "How did actual community engagement or social investment initiatives compare with planned activities, including causes for deviations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    unforeseesSocialImpacts: {
      label:
        "Were there unforeseen social impacts resulting from the organization's operations, identifying positive or negative outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    healthSafetyIncidentRatesVariance: {
      label:
        "What variances existed in health and safety incident rates compared to projections, and what were the root causes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    laborRightsPerformanceVariance: {
      label:
        "How did the company's performance in labor rights and fair wages compare with its commitments, including reasons for discrepancies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    employeeSatisfactionVariance: {
      label:
        "What discrepancies were found in employee satisfaction and engagement levels compared to expectations, and what influenced these outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    trainingEffectivenessVariance: {
      label:
        "How effective were training and development programs in meeting their goals, including variances from expected outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    productImpactConsumersVariance: {
      label:
        "What differences were noted in the impact of the organization's products or services on consumer well-being and safety?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    philanthropyVariance: {
      label:
        "How did actual volunteerism and philanthropic contributions compare with planned commitments, including influencing factors?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    grievanceRedressalVariance: {
      label:
        "What discrepancies were observed in addressing grievances from communities or workers compared to established mechanisms?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    productSafetyComplianceVariance: {
      label:
        "How did actual practices in ensuring product safety and compliance with regulatory standards compare with commitments?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    customerSatisfactionInitiativesVariance: {
      label:
        "What variances were observed in the implementation and outcomes of initiatives aimed at customer satisfaction and loyalty?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    workplaceEqualityVariance: {
      label:
        "How did the company's efforts to combat discrimination and promote equality within the workplace fare against stated goals?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    ngoPartnershipsVariance: {
      label:
        "What differences were observed in the effectiveness of partnerships with NGOs for social projects versus expectations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    digitalAccessibilityInitiativesVariance: {
      label:
        "How effective were initiatives aimed at improving digital accessibility for underprivileged communities compared to plans?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    remoteWorkEngagementVariance: {
      label:
        "What variances were noted in engagement and satisfaction levels of remote workers compared to traditional office employees?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    dataPrivacyVariance: {
      label:
        "How did actual practices around consumer data and privacy protection compare with organizational commitments and regulations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    childLaborPreventionVariance: {
      label:
        "What was the variance in the effectiveness of child and forced labor prevention measures in the supply chain?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    socialCrisisResponseVariance: {
      label:
        "How did the company's response to social crises differ from its crisis management plans, and what lessons were learned?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    disabilityAccessibilityVariance: {
      label:
        "What discrepancies were found between planned and actual outcomes in accessibility and inclusivity of services for people with disabilities?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    mentalHealthProgramsVariance: {
      label:
        "How did actual implementation of mental health programs for employees compare with the planned initiatives, including reasons for differences?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    localEconomicSupportVariance: {
      label:
        "What was the variance in outcomes of programs supporting local businesses and economies, including factors influencing these results?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    digitalInclusionInitiativesVariance: {
      label:
        "What differences were observed in initiatives aimed at promoting digital inclusion and literacy among employees and communities?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    grievanceMechanismsEffectivenessVariance: {
      label:
        "How effective were the grievance mechanisms in addressing concerns compared to expectations, and where were the gaps?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    workLifeBalanceInitiativesVariance: {
      label:
        "What variances were observed in the company's efforts to enhance work-life balance for employees versus planned initiatives?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    educationSupportInitiativesVariance: {
      label:
        "How did the company's initiatives for supporting education and skill development in communities compare with its goals?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    socialImpactAssessmentsVariance: {
      label:
        "What were the discrepancies in the effectiveness of social impact assessments versus planned outcomes, and what were the learning points?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    socialProgramDeliveryVariance: {
      label:
        "How did the actual delivery of benefits from social programs to targeted communities compare with the objectives?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    childLaborPreventionSupplyChainVariance: {
      label:
        "What differences were noted in the effectiveness of child and forced labor prevention measures in the supply chain?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    stakeholderEngagementSocialIssuesVariance: {
      label:
        "How did the company's response to addressing social issues raised by stakeholders compare with its planned strategies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    goveranceHeading: {
      value: "",
      required: false,
      isAutoFill: true,
      isArea: true,
      type: "heading",
      label: "Governance Variance Analysis Questions",
    },
    governancePracticesVariance: {
      label:
        "How did actual governance practices compare to the planned governance framework, including main reasons for discrepancies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    boardDiversityVariance: {
      label:
        "What variances were observed in board diversity efforts compared to targets, including challenges or successes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    ethicsComplianceEffectivenessVariance: {
      label:
        "How effective were the company's ethical guidelines and compliance policies in practice versus expectations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    stakeholderEngagementVariance: {
      label:
        "What differences existed between planned and actual stakeholder engagement strategies, and how did these impact outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    riskManagementVariance: {
      label:
        "Were there deviations in risk management practices from the planned approach, including unforeseen risks that emerged?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    sustainabilityGovernanceVariance: {
      label:
        "How did the implementation of sustainability governance structures compare with strategic plans, including reasons for differences?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    transparencyReportingVariance: {
      label:
        "What variances occurred in the company's approach to transparency and reporting against its commitments?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    internalControlsVariance: {
      label:
        "How did actual internal controls for financial reporting compare with planned controls, including implications of weaknesses?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    governanceStandardsAdherenceVariance: {
      label:
        "What discrepancies were found in adherence to international governance standards compared to company policies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    dataPrivacyComplianceVariance: {
      label:
        "Were there unexpected challenges in maintaining privacy and data protection standards, including compliance impacts?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    antiCorruptionMeasuresVariance: {
      label:
        "How effective were anti-corruption measures compared to planned policies, including instances of non-compliance?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    auditCommitteePerformanceVariance: {
      label:
        "What was the difference in audit committee performance in overseeing financial integrity and compliance?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    executiveCompensationVariance: {
      label:
        "How did the company's executive compensation and performance alignment practices compare with governance best practices?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    conflictOfInterestPoliciesVariance: {
      label:
        "What variances were there in the implementation of conflict of interest policies, including how conflicts were managed?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    boardMeetingsVariance: {
      label:
        "Were there deviations from planned board meeting schedules and agendas, and how did this affect decision-making?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    shareholderRelationsVariance: {
      label:
        "How did actual practices in shareholder rights and relations compare with commitments, including reasons for gaps?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    boardESGOversightVariance: {
      label:
        "What differences were observed in board involvement in setting ESG strategy and performance compared to plans?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    regulatoryComplianceVariance: {
      label:
        "Were there unforeseen legal or regulatory compliance issues, and how did they impact governance practices?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    governanceTechnologyVariance: {
      label:
        "How did the deployment of technology for governance processes compare with the planned use, including outcomes?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    lobbyingAdvocacyVariance: {
      label:
        "What variances were noted in the company's lobbying and advocacy activities in alignment with governance policies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    conflictOfInterestMonitoringVariance: {
      label:
        "What discrepancies were observed in managing conflicts of interest among board members and executives?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    whistleblowerPoliciesEffectivenessVariance: {
      label:
        "How effective were whistleblower policies and mechanisms for reporting unethical behavior compared with expectations?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    boardCompetencyDevelopmentVariance: {
      label:
        "What was the variance in enhancing board competencies through training and development programs?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    cybersecurityGovernanceVariance: {
      label:
        "How did the company's cybersecurity measures and technology governance practices compare with strategic plans?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    policymakerEngagementVariance: {
      label:
        "What differences were noted in the company's engagement with policymakers on ESG issues compared to advocacy plans?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    responsibleAIVariance: {
      label:
        "How effective were initiatives in promoting responsible use of AI and technology ethics compared to commitments?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    supplierGovernanceMonitoringVariance: {
      label:
        "What variances were observed in monitoring and enforcing supplier compliance with governance standards?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    investorESGCommunicationVariance: {
      label:
        "How did transparency and communication with investors on ESG matters compare with the planned approach?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    mergerAcquisitionRiskMitigationVariance: {
      label:
        "What discrepancies were found in strategies to mitigate governance risks associated with mergers and acquisitions?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
    sustainableFinanceAlignmentVariance: {
      label:
        "How did practices in sustainable finance and investment align with governance and ethical investment policies?",
      value: "",
      type: "text",
      required: false,
      isAutoFill: true,
      isArea: true,
    },
  });

  const setPictureAny = (files: any, key: string) => {
    setStep8Data({
      ...step8Data,
      [key]: {
        ...step8Data[key as keyof typeof step8Data],
        value: files,
      },
    });
  };

  const handleSave = async (type?: string) => {
    let stepData = {};
    const stepDataKeys = Object.keys(step8Data);
    try {
      setLoading(true);
      for (let i = 0; i < stepDataKeys.length; i++) {
        const key = stepDataKeys[i];
        if (step8Data[key as keyof typeof step8Data].type === "file") {
          const file = step8Data[key as keyof typeof step8Data].value[0];
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
              question: step8Data[key as keyof typeof step8Data].label,
              url: url,
              type: step8Data[key as keyof typeof step8Data].type,
            },
          };
        }
        if (step8Data[key as keyof typeof step8Data].type === "heading") {
          stepData = {
            ...stepData,
            [key]: {
              question: step8Data[key as keyof typeof step8Data].label,
              type: step8Data[key as keyof typeof step8Data].type,
            },
          };
        } else {
          stepData = {
            ...stepData,
            [key]: {
              question: step8Data[key as keyof typeof step8Data].label,
              value: step8Data[key as keyof typeof step8Data].value,
              type: step8Data[key as keyof typeof step8Data].type,
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
          ...step8Data,
        };

        for (let i = 0; i < stepDataKeys.length; i++) {
          const key = value[stepDataKeys[i]];
          if (key.type === "file") {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step8Data],
                url: key.url,
              },
            };
          }
          if (key.type === "heading") {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step8Data],
              },
            };
          } else {
            stepData = {
              ...stepData,
              [stepDataKeys[i]]: {
                ...stepData[stepDataKeys[i] as keyof typeof step8Data],
                value: key.value,
              },
            };
          }
        }
        setStep8Data(stepData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    <StepsContainer title={title.title}>
      <form className="w-full h-full">
        {Object.keys(step8Data).map((key, index) => {
          if (step8Data[key as keyof typeof step8Data].type === "file") {
            return (
              <UploadInput
                key={index}
                spaced={true}
                urls={
                  // @ts-expect-error URL on one property only
                  step8Data[key as keyof typeof step8Data].url
                    ? // @ts-expect-error URL on one property only
                      [step8Data[key as keyof typeof step8Data].url]
                    : []
                }
                title={step8Data[key as keyof typeof step8Data].label}
                files={step8Data.picture.value}
                setFiles={(files: any) => setPictureAny(files, key)}
              />
            );
          }

          if (step8Data[key as keyof typeof step8Data].type === "heading")
            return (
              <p key={index} className="mt-4 text-lg font-bold">
                {step8Data[key as keyof typeof step8Data].label}
              </p>
            );

          return (
            <Input
              key={index}
              checkBox={true}
              transparent={true}
              isAutoFill={step8Data[key as keyof typeof step8Data].isAutoFill}
              isArea={step8Data[key as keyof typeof step8Data].isArea}
              spaced={true}
              label={step8Data[key as keyof typeof step8Data].label}
              name={key}
              value={step8Data[key as keyof typeof step8Data].value as string}
              setValue={(e: any) =>
                setStep8Data({
                  ...step8Data,
                  [key]: {
                    ...step8Data[key as keyof typeof step8Data],
                    value: e.target.value,
                  },
                })
              }
              required={step8Data[key as keyof typeof step8Data].required}
              type={step8Data[key as keyof typeof step8Data].type}
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

export default Step8;
