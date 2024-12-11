export interface AddOn {
  name: string;
  price: number;
  duration?: string;
  description?: string;
}

export interface StudioDetails {
  hours: string;
  location: string;
  policies: string[];
  notes: string[];
}

export interface PhotoService {
  id: number;
  name: string;
  description: string;
  extendedDescription: string;
  duration: string;
  basePrice: number;
  inclusions: string[];
  addOns: AddOn[];
  imageUrl: string;
  studioDetails: StudioDetails;
  promotions?: string[];
}