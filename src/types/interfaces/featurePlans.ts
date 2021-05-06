export interface FeaturePlansDetails {
  headline: string;
  plans: { feature: string; basic: boolean; pro: boolean; business: boolean }[];
}
