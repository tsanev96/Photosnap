export interface PricingPlan {
  headline: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  theme: "dark" | "light";
  button?: {
    text: string;
  };
}
