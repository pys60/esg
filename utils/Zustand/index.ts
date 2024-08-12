import { BiShieldQuarter } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GrAnalytics } from "react-icons/gr";
import { IoEarthSharp } from "react-icons/io5";
import { PiTreeStructure } from "react-icons/pi";
import { TbBrandLinktree } from "react-icons/tb";
import { create } from "zustand";
import { apiClient } from "../apiClient";

//store to store all Categories
export const useCategoriesStore = create<{
  categories: Category[];
  setCategories: (categories?: Category[]) => void;
}>((set) => ({
  categories: [],
  setCategories: (categories) => {
    if (categories) {
      set({ categories });
    } else {
      apiClient
        .get("categories")
        .then((res) => res.json())
        .then((data: any) => {
          set({ categories: data });
        });
    }
  },
}));

export const useContriesStore = create<{
  countries: Country[];
  setCountries: () => void;
}>((set) => ({
  countries: [],
  setCountries: async () => {
    const data = await fetch(
      "https://restcountries-ulgvneagma-uc.a.run.app/v3.1/all?fields=name,flags,cca2"
    );
    const countriesData = await data.json();
    const countriesArray = countriesData.map((country: any) => {
      return {
        name: country.name,
        flag: country.flags.png,
        code: country.cca2,
      };
    });
    set({ countries: countriesArray });
  },
}));

export const useUserProjectListStore = create<{
  userProjectList: Project[];
  setUserProjectList: () => void;
}>((set) => ({
  userProjectList: [],
  setUserProjectList: async () => {
    try {
      const data = await apiClient.get("item/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const projects: {
        items: Project[];
      } = await data.json();
      set({ userProjectList: projects.items });
    } catch (err) {
      set({ userProjectList: [] });
    }
  },
}));

export const useUserStore = create<{
  user: User;
  userLoading: boolean;
  setUser: (to?: string) => Promise<void>;
}>((set) => ({
  user: {
    type: "",
    _id: "",
    email: "",
    boughtItems: [],
    password: "",
    username: "",
    profileCompletePercentage: 0,
    buissnessID: undefined,
    developerID: undefined,
    isOnChainIDCreated: false,
    burntTokens: 0,
    tradeTokens: 0,
    apiBucket: [],
    isAPIEnabled: false,
    supplyBucket: [],
  },
  userLoading: false,
  setUser: async (to) => {
    if (localStorage && localStorage.getItem("token")) {
      set(() => ({ userLoading: true }));
      const token = localStorage.getItem("token") || to;
      const data: any = await apiClient
        .get(`auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .json();
      set(() => ({
        user: {
          ...data.user,
        },
        userLoading: false,
      }));
    }
  },
}));

/*
const useUserStore = create(function(set) {
  return {
    user: {
      type: '',
      _id: '',
      email: '',
      boughtItems: [],
      password: '',
      username: '',
      profileCompletePercentage: 0,
      businessID: undefined,
      developerID: undefined,
    },
    setUser: async function(to) {
      if (localStorage && localStorage.getItem('token')) {
        const token = localStorage.getItem('token') || to;
        const data = await ky.get(`${process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).json();
        set(function() {
          return {
            user: {
              ...data.user
            }
          };
        });
      }
    }
  };
});

*/

export const useCalcOpenStore = create<{
  calcOpen: boolean;
  setCalcOpen: (calcOpen: boolean) => void;
}>((set) => ({
  calcOpen: false,
  setCalcOpen: (calcOpen) => set({ calcOpen }),
}));

export const useSupplyOpenModalStore = create<{
  supplyOpenModal: boolean;
  setSupplyOpenModal: (supplyOpenModal: boolean) => void;
}>((set) => ({
  supplyOpenModal: false,
  setSupplyOpenModal: (supplyOpenModal) => set({ supplyOpenModal }),
}));

export const useProfileUpdateStore = create<{
  profileUpdateOpen: boolean;
  setProfileUpdateOpen: (profileUpdateOpen: boolean) => void;
}>((set) => ({
  profileUpdateOpen: false,
  setProfileUpdateOpen: (profileUpdateOpen) => set({ profileUpdateOpen }),
}));

export const useSellerProfileUpdateStore = create<{
  sellerProfileUpdateOpen: boolean;
  setSellerProfileUpdateOpen: (sellerProfileUpdateOpen: boolean) => void;
}>((set) => ({
  sellerProfileUpdateOpen: false,
  setSellerProfileUpdateOpen: (sellerProfileUpdateOpen) =>
    set({ sellerProfileUpdateOpen }),
}));

export const useSelectedPaymentTypeStore = create<{
  selectedPaymentType: string;
  setSelectedPaymentType: (selectedPaymentType: string) => void;
  prizeOptions: Option[];
}>((set) => ({
  selectedPaymentType: "MATIC",
  setSelectedPaymentType: (selectedPaymentType) => set({ selectedPaymentType }),
  prizeOptions: [
    { value: "USD", label: "USD" },
    { value: "MATIC", label: "MATIC" },
  ],
}));

type ESGListItem = {
  name: string;
  icon: any;
  value: string;
};

export const useESGListItemsStore = create<{
  esgReportItems: ESGListItem[];
  setEsgReportItems: (esgReportItems: ESGListItem[]) => void;
}>((set) => ({
  esgReportItems: [
    {
      name: "Standard",
      icon: FaRegFileAlt,
      value: "esg-report",
    },
    {
      name: "Environmental Questions",
      icon: TbBrandLinktree,
      value: "environmental",
    },
    {
      name: "Social Questions",
      icon: IoEarthSharp,
      value: "social",
    },
    {
      name: "Governance Questions",
      icon: GoLaw,
      value: "governance",
    },
    {
      name: "IT Security Questions",
      icon: BiShieldQuarter,
      value: "it-security",
    },
    {
      name: "Supply Chain Questions",
      icon: PiTreeStructure,
      value: "supply-chain",
    },
    {
      name: "UN SDGs & GAP Analysis",
      icon: GrAnalytics,
      value: "un-sdgs",
    },
    {
      name: "Variance Analysis",
      icon: PiTreeStructure,
      value: "variance",
    },
    {
      name: "Science Based Targets initiative (SBTi)",
      icon: PiTreeStructure,
      value: "sbt",
    },
  ],
  setEsgReportItems: (esgReportItems) => set({ esgReportItems }),
}));

export const useEsgReportDataStore = create<{
  step1Data: any;
  setStep1Data: (step1Data: any) => void;
}>((set) => ({
  step1Data: {
    picture: {
      label: "Upload Your Picture",
      value: [],
      type: "file",
      url: "",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    customizedImages: {
      label: "Upload Customized Images",
      value: [],
      type: "file",
      url: "",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    companyName: {
      label: "Company Name / Name of the Listed Entity",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    companyBrief: {
      label: "Brief on the Company",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
    companyNumber: {
      label: "Corporate Identity Number (CIN) of the Listed Entity",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    yoi: {
      label: "Year of Incorporation",
      value: "",
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    registeredAddress: {
      label: "Registered Office Address",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
    corporateAddress: {
      label: "Corporate Address",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
    email: {
      label: "Email Address",
      value: "",
      type: "email",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    telephone: {
      label: "Telephone Number",
      value: "",
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    website: {
      label: "Website",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    logo: {
      label: "Logo",
      value: [],
      type: "file",
      url: "",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    managementPicture: {
      label: "Upload Management Picture",
      value: [],
      type: "file",
      url: "",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    menagementMessage: {
      label: "Management Message",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
    geographicLocation: {
      label: "What type of geographic location does your company operate in?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    reportingYear: {
      label: "Financial Year of Which the Report is Being Prepared",
      value: "",
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    dedicatedPerson: {
      label: "Have you appointed a dedicated person to oversee ESG matters?",
      label2:
        "Details of the person who may be contacted in case of any queries on the ESG report ",
      value: false,
      type: "radio",
      required: true,
      isArea: false,
    },
    dedicatedPersonName: {
      label: "Name",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    dedicatedPersonEmail: {
      label: "Email Address",
      value: "",
      type: "email",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    companiesOperations: {
      label: `What are the company's operations (office work, manufacturing, production,
        warehousing, IT, logistics, etc)`,
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    briefOnBusinessOperations: {
      label: "Brief on the types of business operations",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    supplyCountries: {
      label:
        "What countries do you rely on for your supplies or distribution ?",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    numOfEmployees: {
      label:
        "What is the number of personnel, including permanent and full-time equivalent (FTEs) employees.",
      value: {
        male: "",
        female: "",
      },
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    diffAbledNumOfEmployees: {
      label:
        "How many of the above are differently abled personnel, including permanent and full-time equivalent (FTEs) employees.",
      value: {
        male: "",
        female: "",
      },
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    participationOfWomen: {
      label: "Participation/Inclusion/Representation of women in the workforce",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    numOfWorkers: {
      label: `What is the number of personnel, including contract and part-time workers.`,
      value: {
        fullTime: "",
        partTime: "",
        contract: "",
      },
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    contratorParticipation: {
      label: "Do you employee a large number of contractors? ",
      value: "",
      type: "text",
      required: true,
      isAutoFill: true,
      isArea: true,
    },
    bod: {
      label: "Do you have a Board of Directors?",
      label2: "If yes, please State the count and Gender",
      value: false,
      type: "radio",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
    maleBod: {
      label: "Male",
      value: "",
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    femaleBod: {
      label: "Female",
      value: "",
      type: "number",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    publicTraded: {
      label: "Are you a public traded company?",
      value: false,
      type: "radio",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    stockExchange: {
      label: "Name of the Stock Exchange where the company is listed",
      value: "",
      type: "text",
      required: true,
      isAutoFill: false,
      isArea: false,
    },
    boardComittee: {
      label:
        "Does the company have a specified committee of the Board/Director responsible for decision making on Sustainability related issues?",
      value: false,
      type: "radio",
      required: true,
      isAutoFill: false,
      isArea: true,
    },
  },
  setStep1Data: (step1Data) => set({ step1Data }),
}));

type IChatHistory = {
  sender: "bot" | "user";
  message: string;
  time: string;
};

export const useChatHistoryStore = create<{
  chatHistory: IChatHistory[];
  setChatHistory: (chatHistory: {
    sender: "bot" | "user";
    message: string;
  }) => void;
  selectedQuestion: string;
  setSelectedQuestion: (selectedQuestion: string) => void;
  resetChatHistory: () => void;
}>((set) => ({
  chatHistory: [],
  setChatHistory: (chatHistory: { sender: "bot" | "user"; message: string }) =>
    set((state) => ({
      chatHistory: [
        ...state.chatHistory,
        {
          ...chatHistory,
          time: new Date().toLocaleTimeString(),
        },
      ],
    })),
  selectedQuestion: "",
  setSelectedQuestion: (selectedQuestion: string) => set({ selectedQuestion }),
  resetChatHistory: () => set({ chatHistory: [] }),
}));

export const useGlobalStandardsStore = create<{
  globalStandards: {
    name: string;
    short: string;
    selected: boolean;
  }[];
  setGlobalStandards: (
    globalStandards: {
      name: string;
      short: string;
      selected: boolean;
    }[]
  ) => void;
}>((set) => ({
  globalStandards: [
    {
      name: "Global Reporting Initiative",
      short: "GRI", //done
      selected: true,
    },
    {
      name: "Sustainability Accounting Standards Board",
      short: "SASB", //done
      selected: false,
    },
    {
      name: "Business Responsibility and Sustainability Report",
      short: "BRSR", //done
      selected: false,
    },
    {
      name: "Task Force on Climate-related Financial Disclosures",
      short: "TCFD", //done
      selected: false,
    },
    {
      name: "European Sustainability Reporting Standards",
      short: "ESRS", //done
      selected: false,
    },
    {
      name: "Carbon Disclosure Project",
      short: "CDP",
      selected: false,
    },
    {
      name: "Principles for Responsible Investment",
      short: "PRI",
      selected: false,
    },
    {
      name: "EU Taxonomy",
      selected: false,
      short: "EUT",
    },
  ],
  setGlobalStandards: (
    globalStandards: {
      name: string;
      short: string;
      selected: boolean;
    }[]
  ) => set({ globalStandards }),
}));

/**
 *    CBS, //1
  CDP, //2
  CDP_WATER, //3
  CGPR, //4
  DUBAI, //5
  EQUATOR_PRINCIPLE,  //6
  FCS,  //7
  IIRC,//8
  ISO26000,//9
  MSC,//10
  NFRD, //11
  PRI, //12
  SA8000, //13
  SFDR, //14
  UKSC, //15
  UN_GLOBAL_COMPACT, //16
  EU_TAXONOMY, //17
  ASX //18
 */

export const useEnhancedStandardsStore = create<{
  enhancedStandards: {
    name: string;
    value: string;
    selected: boolean;
    file: string;
  }[];
  setEnhancedStandard: (
    enhancedStandards: {
      name: string;
      value: string;
      selected: boolean;
      file: string;
    }[]
  ) => void;
}>((set) => ({
  enhancedStandards: [
    {
      name: "Canadian Sustainability Standards Board",
      value: "CSSB",
      selected: false,
      file: "CSSB",
    },
    {
      name: "Canadian Securities Regulators' Standards",
      value: "CSRS",
      selected: false,
      file: "CSRS",
    },
    {
      name: "California AB 1305",
      value: "AB 1305",
      selected: false,
      file: "California_AB_1305",
    },
    {
      name: "International Integrated Reporting Council",
      value: "IIRC",
      selected: false,
      file: "IIRC",
    },
    {
      name: "Social Accountability 8000",
      value: "SA8000",
      selected: false,
      file: "SA8000",
    },
    {
      name: "European Financial Reporting Advisory Group",
      value: "EFRAG",
      selected: false,
      file: "EFRAG",
    },
    {
      name: "Corporate Sustainability Reporting Directive",
      value: "CSRD",
      selected: false,
      file: "CSRD",
    },
    {
      name: "Marine Stewardship Council",
      value: "MSC",
      selected: false,
      file: "MSC",
    },
    {
      name: "Australian Securities Exchange Corporate Governance Principles and Recommendations",
      value: "ASX",
      selected: false,
      file: "ASX",
    },
    {
      name: "Dubai Declaration on Sustainable Finance",
      value: "DUBAI",
      selected: false,
      file: "DUBAI",
    },
    {
      name: "Forest Stewardship Council",
      value: "FSC",
      selected: false,
      file: "FSC",
    },
    {
      name: "Corporate Governance Principles and Recommendations",
      value: "CGPR",
      selected: false,
      file: "CGPR",
    },
    {
      name: "UK Stewardship Code",
      value: "UKSC",
      selected: false,
      file: "UKSC",
    },
    {
      name: "Equator Principles",
      value: "EP",
      selected: false,
      file: "EQUATOR_PRINCIPLE",
    },
    {
      name: "European Union's Non-Financial Reporting Directive",
      value: "NFRD",
      selected: false,
      file: "NFRD",
    },
    {
      name: "Climate Bonds Standard",
      value: "CBS",
      selected: false,
      file: "CBS",
    },
    {
      name: "Sustainable Finance Disclosure Regulation",
      value: "SFDR",
      selected: false,
      file: "SFDR",
    },
    {
      name: "CDP Water Security",
      value: "CDPW",
      selected: false,
      file: "CDP_WATER",
    },
    {
      name: "CDP Supply Chain",
      value: "CDPSC",
      selected: false,
      file: "CDP_SUPPLY_CHAIN",
    },
    {
      name: "CDP Forests",
      value: "CDPF",
      selected: false,
      file: "CDP_FORESTS",
    },
    {
      name: "Global Real Estate Sustainability Benchmark",
      value: "GRESB",
      selected: false,
      file: "GRESB",
    },
    {
      name: "Brazilian Corporate Sustainability Index",
      value: "ISE",
      selected: false,
      file: "ISE",
    },
    {
      name: "Hong Kong Exchange ESG Reporting Guide",
      value: "HKEX",
      selected: false,
      file: "HKEX",
    },
    {
      name: "Singapore Exchange Sustainability Reporting",
      value: "SGX",
      selected: false,
      file: "SGX",
    },
    {
      name: "Japan’s Corporate Governance Code",
      value: "JAPAN_CGC",
      selected: false,
      file: "JAPAN_CGC",
    },
    {
      name: "German Supply Chain Due Diligence Act",
      value: "LkSG",
      selected: false,
      file: "LKSG",
    },
    {
      name: "UK Streamlined Energy and Carbon Reporting",
      value: "SECR",
      selected: false,
      file: "SECR",
    },
    {
      name: "Australian Modern Slavery Act",
      value: "AU_MSA",
      selected: false,
      file: "AU_MSA",
    },
    {
      name: "Integrated Reporting Framework",
      value: "IRF",
      selected: false,
      file: "IRF",
    },
    {
      name: "Climate Disclosure Standards Board Framework",
      value: "CDSB",
      selected: false,
      file: "CDSB",
    },
    {
      name: "Extractive Industries Transparency Initiative",
      value: "EITI",
      selected: false,
      file: "EITI",
    },
    {
      name: "Roundtable on Sustainable Palm Oil",
      value: "RSPO",
      selected: false,
      file: "RSPO",
    },
    {
      name: "Sustainable Apparel Coalition Higg Index",
      value: "SAC_HIGG",
      selected: false,
      file: "SAC_HIGG",
    },
    {
      name: "ISO 14001: Environmental Management Systems",
      value: "ISO14001",
      selected: false,
      file: "ISO14001",
    },
    {
      name: "ISO 45001: Occupational Health and Safety",
      value: "ISO45001",
      selected: false,
      file: "ISO45001",
    },
  ],

  setEnhancedStandard: (
    enhancedStandards: {
      name: string;
      value: string;
      selected: boolean;
      file: string;
    }[]
  ) => set({ enhancedStandards }),
}));
