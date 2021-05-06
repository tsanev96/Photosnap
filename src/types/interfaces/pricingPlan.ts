export interface PricingPlan {
  headline: string;
  description: string;
  payment: {
    monthly: string;
    yearly: string;
  };
  theme: "dark" | "light";
  button?: {
    text: string;
  };
  isMonthlyPayment?: boolean;
}
