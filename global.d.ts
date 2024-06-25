type FormState = {
  projectName: string,
  description: string,
  address: string,
  country: string,
  websiteUrl: string,
  methodOfProject: string,
  googleLocation: any,
  numOfTokens: number,
  pricePerToken: number,
  projectImages:string[],
  projectCustomBanner:string,
  documents:string[],
  paymentType: string,
  timePeriod: string,
  registryName: string,
  companyName: string,
}

type Item = {
  _id: string;
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  seoHeading: string;
  seoKeywords: string;
  desc: string;
  address: string;
  country: string;
  methodOfProject: string;
  googleLocation: {
      lat: string;
      lng: string;
  };
  numOfTokens: number;
  pricePerToken: string;
  pricePerTokenUSD?: string;
  projectImages: string[];
  projectCustomBanner: string;
  documents: string[];
  paymentType: string;
  timePeriod: string;
  createdBy: string;
  status: string;
  createrAddress: string;
  parcel: any[]; // The type is not clear from the JSON provided, you might want to specify it more precisely
  transactions: any[]; // Same as above
  purchasedTokens: number;
  createdAt: string;
  registryName: string;
  companyName: string;
  __v: number;
};

type Projects = {
  items: Array<Item>;
  success: boolean;
}

type ErrorState = {
  projectName?: string | null,
  description?: string | null,
  address?: string | null,
  country?: string | null,
  websiteUrl?: string | null,
  methodOfProject?: string | null,
  googleLocation?: any | null,
  numOfTokens?: string | null,
  pricePerToken?: string | null,
  projectImages?:string | null,
  projectCustomBanner?:string | null,
  documents?:string | null,
  timePeriod?: string | null,
  paymentType?: string | null,
}

type Category = {
  id:number,
  name:string,
  value:string,
  image:string,
  type:string,
  description:string,
}

type Docs =    {
  documents: File[],
  projectImages: File[],
  customBanner: File | null
}

type Country = {
  name: {
    common: string;
    official: string;
  }
  flag: string;
  code: string;
}

type Project = {
  _id: string;
  name: string;
  desc: string;
  address: string;
  country: string;
  methodOfProject: string;
  googleLocation: object; // or a more specific type if you know the structure
  numOfTokens: number;
  pricePerToken: number;
  projectImages: any[]; // or a more specific type like string[]
  projectCustomBanner?: string;
  documents?: any[]; // or a more specific type like string[]
  paymentType: string;
  timePeriod: string;
  createdBy: string;
  createdAt?: Date;
  tokenAddress?: string;
  status?: string;
  createrAddress: string;
  purchasedTokens?: number;
  registryName?: string;
  companyName?: string;
  parcel?: any[]; // or a more specific type if you know the structure
  transactions?: any[]; // or a more specific type if you know the structure
  isAvailableForBatch?: boolean;
  feeSlab?: number;
  sourcingFee?: number;
};

type UserID = string;

type DeveloperID = {
    _id: UserID;
    projects: any[];
    profilePicture: string;
    companyName: string;
    contactPersonName: string;
    __v: number;
};

type Vendor = {
  name: string;
  country: string;
  carbonCredit: number;
  processOfVendor: string;
  offsetDone: boolean;
  address: string;
}

type Vendors = Vendor[];

type Resource = {
  _id: string; 
  title: string;
  description: string;
  link: string;
  type: 'pdf' | 'doc' | 'excel' | 'ppt' | 'txt' |'url'| 'other';
  createdAt: Date;
};



type BusinessID = {
    _id: UserID;
    __v: number;
    companyName: string;
    companyEmail?: string;
    companyLogo?: string;
    companyID?: string;
    contactPersonName?: string;
    designation?: string;
    contactNumber?: string;
    address?: string;
    country?: string;
    esgReport?: string;
    esgReportIPFShash?:string;
    esgTnxHash?: string;
    carbonCredit?: string;
    offsetDoneCredits?: string;
    totalEmissionByCategory?:{
      totalEmission?: string;
      empEmission?: string;
      elecEmission?: string;
      officeEmission?: string;
      buisnessTripEmi?: string;
      trafficOnWebsiteEmi?: string;
      laptopEmission?: string;
      vehicleEmission?: string;
      dataStoreEmi?: string;
      sectorType?: string;
    };
    batch?: BatchData,
    vendors: Vendors;
};

type BatchData = {
  subscriptionId?: string;
  invoiceId?: string;
  paymentIntentId?: string;
  clientSecret?: string;
  status?: 'incomplete' | string; // or just 'incomplete' if there are no other statuses
  invoiceStatus?: 'open' | string; // or just 'open' if there are no other statuses
  paymentIntentStatus?: 'requires_action' | string; // or just 'requires_action' if there are no other statuses
  numberOfTokens?: number;
  itemId?: string;
  buisnessId?: string;
  userId?: string;
  time_days?: number;
  end_date?: string; // Consider using Date if you're working with date objects
  start_date?: string; // Consider using Date if you're working with date objects
  priceId?: string;
  paymentType?: 'fiat' | string; // or just 'fiat' if there are no other payment types
  transactionHash?: string;
}


type BoughtItem = {
  itemID: string;
  transactionHash: string;
  numOfTokens: string;
  tradeTokens: string;
  burntTokens: number;
  createdAt: string;
  sellerAddress: string;
  currency: string;
  amount: string;
  expirePeriod: string;
  tokenId: number;
  certificateUrl: string;
  storeCertificate: string;
};

type User = {
    _id: UserID;
    username: string;
    password: string;
    type: "developer" | "business" | ''
    email: string;
    developerID?: DeveloperID;
    buissnessID?: BusinessID;
    boughtItems: BoughtItem[];
    profileCompletePercentage: number;
    tradeTokens: number;
    burntTokens: number;
    isOnChainIDCreated: boolean;
    isAPIEnabled: boolean;
    apiBucket:Array;
    supplyBucket:Array;
    bankDetails?:{
      bankName?: string;
      accountNumber?: string;
      accountName?: string;
      swiftCode?: string;
      ifscCode?: string;
    },
    socials?:{
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
    },
};

type CalculatorModalProps = {
  currentStep: number,
  totalSteps: number,
  setCurrentStep: any
  formData?: FORM_DATA_TYPE,
  setFormData?: any,
}

type FORM_DATA_TYPE = {
  electricityConsumption: number;
  numberOfEmployees: number;
  [key: string]: any; // add an index signature to allow any other properties
};

type Option = {
  value: string;
  label: string;
};

type EsgQuestion = {
  "q": string;
  "a": string;
  "type": string;
};

type EsgQuestions = {
  "esgReport": EsgQuestion[];
  "environmentalQuestions": EsgQuestion[];
  "socialQuestions": EsgQuestion[];
  "governanceQuestions": EsgQuestion[];
  "supplyQuestions": EsgQuestion[];
  "itQuestions": EsgQuestion[];
};

type CommonProps = {
  img?:string,
  value?: string | number,
  placeholder?: string,
  name?: string,
  label?: string,
  required?: boolean,
  disabled?: boolean,
  className?: string,
  error?: string,
  onBlur?: () => void,
  onFocus?: () => void,
  onKeyDown?: () => void,
  onKeyUp?: () => void,
  spaced?: boolean,
  mode?: 'light' | 'dark',
  diffLabel?: boolean,
  endIcon?: React.ReactNode,
  onEndIconClick?: () => void,
  isAutoFill?: boolean,
  autoCompleteFunc?: () => Promise<string>,
  transparent?: boolean,
  noBackground?: boolean,
  checkBox?: boolean,
  readOnly?: boolean,
}

type ESGReportItem = 'esg-report' | 'environmental' | 'social' | 'governance' | 'it-security' | 'supply-chain' | 'un-sdgs'

type ESGStep = {
    label: string;
  value: any;
  type: string;
  required: boolean;
  isAutoFill: boolean;
  isArea: boolean;
  url?: string;
  img?: string; // Add the img property with an optional type
}