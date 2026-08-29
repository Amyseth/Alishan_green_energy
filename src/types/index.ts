export interface ProductSpec {
  property: string;
  testMethod: string;
  unit: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  code: string;
  category: 'encapsulant' | 'backsheet';
  badge?: string;
  tagline: string;
  description: string;
  features: string[];
  recommendedApplications: string[];
  specifications: ProductSpec[];
  compatibility: string[];
  image?: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productInterest: string;
  estimatedVolume: string;
  message: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  code: string;
  description: string;
  scope: string;
}
