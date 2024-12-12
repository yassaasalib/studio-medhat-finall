export interface ServicePackage {
  name: string;
  price: number;
  featureKeys: string[];  // Instead of direct feature strings
  isPopular?: boolean;
}

export interface PackageGroup {
  serviceId: number;
  packages: ServicePackage[];
}
