export interface ServicePackage {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface PackageGroup {
  serviceId: number;
  packages: ServicePackage[];
}